import React from 'react';

const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between transition-transform duration-300 hover:scale-105 hover:border hover:border-red-500">
    <div>
      <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
    <div className="text-pink-500 text-4xl">{icon}</div>
  </div>
);

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 p-3">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Total Orders" value="1,234" icon="📦" />
        <DashboardCard title="Total Products" value="120" icon="🛒" />
        <DashboardCard title="Pending Orders" value="23" icon="⏳" />
        <DashboardCard title="Completed Sales" value="$15,230" icon="💰" />
        <DashboardCard title="Customer Reviews" value="87" icon="⭐" />
        <DashboardCard title="Return Requests" value="5" icon="🔄" />
      </div>
    </div>
  );
};

export default SellerDashboard;
