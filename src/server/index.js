import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { google } from 'googleapis';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new Database(join(__dirname, 'db', 'database.sqlite'));

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    educationLevel TEXT NOT NULL,
    researchExperience TEXT NOT NULL,
    researchField TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    location TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    registeredCount INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS event_registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eventId INTEGER NOT NULL,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (eventId) REFERENCES events(id)
  );

  CREATE TABLE IF NOT EXISTS publications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    journal TEXT NOT NULL,
    year INTEGER NOT NULL,
    abstract TEXT,
    doi TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Google Sheets setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    keyFile: join(__dirname, 'credentials.json'),
    scopes: SCOPES,
  });
  return auth.getClient();
}

async function getSpreadsheet() {
  const auth = await getAuthToken();
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);
  await doc.loadInfo();
  return doc;
}

// Applications API
app.post('/api/applications', async (req, res) => {
  try {
    const { fullName, email, educationLevel, researchExperience, researchField } = req.body;
    
    // Save to SQLite
    const stmt = db.prepare(`
      INSERT INTO applications (fullName, email, educationLevel, researchExperience, researchField)
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(fullName, email, educationLevel, researchExperience, researchField);

    // Save to Google Sheets
    const doc = await getSpreadsheet();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      'Full Name': fullName,
      'Email': email,
      'Education Level': educationLevel,
      'Research Experience': researchExperience,
      'Research Field': researchField,
      'Date': new Date().toISOString()
    });

    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Failed to save application' });
  }
});

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Save to SQLite
    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(name, email, subject, message);

    // Save to Google Sheets
    const doc = await getSpreadsheet();
    const sheet = doc.sheetsByIndex[1];
    await sheet.addRow({
      'Name': name,
      'Email': email,
      'Subject': subject,
      'Message': message,
      'Date': new Date().toISOString()
    });

    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact message' });
  }
});

// Events API
app.post('/api/events', (req, res) => {
  try {
    const { title, description, date, time, location, capacity } = req.body;
    
    const stmt = db.prepare(`
      INSERT INTO events (title, description, date, time, location, capacity)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(title, description, date, time, location, capacity);
    
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.get('/api/events', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM events ORDER BY date DESC');
    const events = stmt.all();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.post('/api/events/:eventId/register', (req, res) => {
  try {
    const { eventId } = req.params;
    const { fullName, email, phone } = req.body;
    
    const event = db.prepare('SELECT * FROM events WHERE id = ?').get(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    if (event.registeredCount >= event.capacity) {
      return res.status(400).json({ error: 'Event is full' });
    }
    
    const stmt = db.prepare(`
      INSERT INTO event_registrations (eventId, fullName, email, phone)
      VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(eventId, fullName, email, phone);
    
    // Update registered count
    db.prepare('UPDATE events SET registeredCount = registeredCount + 1 WHERE id = ?').run(eventId);
    
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

// Publications API
app.post('/api/publications', (req, res) => {
  try {
    const { title, authors, journal, year, abstract, doi } = req.body;
    
    const stmt = db.prepare(`
      INSERT INTO publications (title, authors, journal, year, abstract, doi)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(title, authors, journal, year, abstract, doi);
    
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error creating publication:', error);
    res.status(500).json({ error: 'Failed to create publication' });
  }
});

app.get('/api/publications', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM publications ORDER BY year DESC, id DESC');
    const publications = stmt.all();
    res.json(publications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    res.status(500).json({ error: 'Failed to fetch publications' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});