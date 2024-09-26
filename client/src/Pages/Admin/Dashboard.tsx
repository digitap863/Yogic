import React from 'react';
import Sidebar from '../../Components/Admin/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
 
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 sm:ml-64">
        <div className="border-2 border-dashed border-gray-200 rounded-lg dark:border-gray-700 p-6">
          {/* Welcome Heading */}
          <h1 className="text-5xl 2xl:text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#39964B] via-[#39964B] to-[#39964B] bg-clip-text leading-tight font-urban">
            Welcome back, Admin!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
