import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MessageSquare, CreditCard, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { logout, user } = useAuth();
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'AI Chat';
      case '/subscription':
        return 'Subscription';
      default:
        return 'Dashboard';
    }
  };
  
  return (
    <div className="bg-white shadow-md w-64 hidden md:flex flex-col h-full">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Premium AI</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome, {user?.name || user?.email || 'User'}</p>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <p className="px-6 py-2 text-xs font-semibold text-gray-400 uppercase">
          {getPageTitle()}
        </p>
        <nav className="mt-2">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors ${
                isActive ? 'bg-indigo-50 text-indigo-700 border-r-4 border-indigo-500' : ''
              }`
            }
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            <span>AI Chat</span>
          </NavLink>
          
          <NavLink 
            to="/subscription" 
            className={({ isActive }) => 
              `flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors ${
                isActive ? 'bg-indigo-50 text-indigo-700 border-r-4 border-indigo-500' : ''
              }`
            }
          >
            <CreditCard className="w-5 h-5 mr-3" />
            <span>Subscription</span>
          </NavLink>
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <button 
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;