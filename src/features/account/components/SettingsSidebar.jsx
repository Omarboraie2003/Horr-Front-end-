import React from 'react';

const SettingsSidebar = ({ activeTab, onTabChange }) => {
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
    </aside>
  );
};

export default SettingsSidebar;
