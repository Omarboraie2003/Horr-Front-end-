import React from 'react';
import useAuth from '../../auth/hooks/useAuth';

const SettingsSidebar = ({ activeTab, onTabChange }) => {
  const { logout } = useAuth();
  
  const groups = [
    {
      title: 'Billing',
      links: [
        { id: 'billing', label: 'Billing & Payments' }
      ]
    },
    {
      title: 'User Settings',
      links: [
        { id: 'my-info', label: 'My Info' },
        { id: 'security', label: 'Password & Security' },
        { id: 'notifications', label: 'Notifications' }
      ]
    }
  ];

  return (
    <aside className="md:sticky md:top-24">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Settings</h2>

      {groups.map((group, idx) => (
        <div key={idx} className="mb-8">
          <div className="text-sm font-semibold text-gray-900 mb-3">{group.title}</div>
          <nav className="space-y-1">
            {group.links.map(link => (
              <button
                key={link.id}
                onClick={() => onTabChange(link.id)}
                className={`block w-full text-left text-sm py-2 pl-3 mb-1 border-l-2 transition-all duration-200 ${
                  activeTab === link.id 
                    ? 'font-semibold text-gray-900 border-l-gray-900 bg-gray-50' 
                    : 'text-gray-500 border-transparent hover:text-amber-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      ))}

      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={logout}
          className="flex items-center w-full text-left text-sm py-2 pl-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 rounded-lg group"
        >
          <svg className="mr-3 text-red-500 group-hover:text-red-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span className="font-semibold">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
