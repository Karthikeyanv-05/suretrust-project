import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaBell } from 'react-icons/fa';  // Icons
import { Line } from 'react-chartjs-2';  // Chart for data visualization

// Dummy data for the dashboard
const userProfile = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  careerStage: "Intermediate Developer",
  education: "BSc in Computer Science",
  profileImage: "https://via.placeholder.com/150",
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Skill Development",
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.1,
    },
  ],
};

function Dashboard() {
  const [notifications] = useState([
    "New job opportunity in your field!",
    "Your course completion certificate is ready.",
    "You have a new message from your mentor.",
  ]);

  return (
    <div className="bg-gray-100 h-screen font-sans">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-blue-900 text-white h-full p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-12 text-center">Career Guide</h2>
        <nav>
          <ul>
            <li className="mb-6 hover:bg-blue-700 p-3 rounded-lg cursor-pointer transition duration-300">
              <FaUser className="inline-block mr-3" /> Profile
            </li>
            <li className="mb-6 hover:bg-blue-700 p-3 rounded-lg cursor-pointer transition duration-300">
              <FaGraduationCap className="inline-block mr-3" /> Education
            </li>
            <li className="mb-6 hover:bg-blue-700 p-3 rounded-lg cursor-pointer transition duration-300">
              <FaBriefcase className="inline-block mr-3" /> Career
            </li>
            <li className="mb-6 hover:bg-blue-700 p-3 rounded-lg cursor-pointer transition duration-300">
              <FaBell className="inline-block mr-3" /> Notifications
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="ml-64 p-8 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome back, {userProfile.name}!</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition">
            Edit Profile
          </button>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src={userProfile.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{userProfile.name}</h3>
              <p className="text-gray-600">{userProfile.email}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Career Stage</h4>
              <p className="text-gray-600">{userProfile.careerStage}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Education</h4>
              <p className="text-gray-600">{userProfile.education}</p>
            </div>
          </div>
        </div>

        {/* Career Progress Section with Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Career Progress</h2>
          <Line data={data} options={{ responsive: true }} />
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                {notification}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Skills</h3>
            <p className="text-gray-600">Upgrade your skills to stay ahead in your career.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition">
              Start Learning
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply for Jobs</h3>
            <p className="text-gray-600">Explore job openings and apply directly through the portal.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition">
              Find Jobs
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Progress</h3>
            <p className="text-gray-600">Monitor your career journey with key metrics.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition">
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
