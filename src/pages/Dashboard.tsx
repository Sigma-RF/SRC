import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, FileText, Award, Calendar, LogOut, ChevronRight } from 'lucide-react';

function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold text-gray-900">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Project Status"
              value="In Progress"
              description="Current research project phase"
              icon={<LayoutDashboard className="h-6 w-6 text-blue-600" />}
            />
            <DashboardCard
              title="Publications"
              value="2"
              description="Research papers published"
              icon={<FileText className="h-6 w-6 text-blue-600" />}
            />
            <DashboardCard
              title="Certifications"
              value="3"
              description="Completed certifications"
              icon={<Award className="h-6 w-6 text-blue-600" />}
            />
            <DashboardCard
              title="Upcoming Events"
              value="4"
              description="Events this month"
              icon={<Calendar className="h-6 w-6 text-blue-600" />}
            />
          </div>

          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Current Projects</h3>
              <div className="space-y-4">
                <ProjectCard
                  title="AI Research Paper"
                  progress={75}
                  dueDate="March 15, 2024"
                  status="In Progress"
                />
                <ProjectCard
                  title="Blockchain Implementation"
                  progress={30}
                  dueDate="April 1, 2024"
                  status="In Progress"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "AI Workshop",
                    date: "March 20, 2024",
                    type: "Workshop",
                  },
                  {
                    title: "Research Methodology Seminar",
                    date: "March 25, 2024",
                    type: "Seminar",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, description, icon }: { title: string; value: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
              </dd>
              <dd className="text-sm text-gray-500">{description}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, progress, dueDate, status }: { title: string; progress: number; dueDate: string; status: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {status}
        </span>
      </div>
      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
          ></div>
        </div>
      </div>
      <div className="text-sm text-gray-500">Due: {dueDate}</div>
    </div>
  );
}

export default Dashboard;