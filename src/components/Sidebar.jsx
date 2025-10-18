import React from 'react';

import {
  HomeModernIcon,
  ListBulletIcon,
  Cog6ToothIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const primaryNavigation = [
  { name: 'Dashboard', icon: HomeModernIcon, href: '#', current: true },
  { name: 'Companies List', icon: ListBulletIcon, href: '#', current: false },
];

const secondaryNavigation = [
  { name: 'Settings', icon: Cog6ToothIcon, href: '#' },
  { name: 'Notifications', icon: BellIcon, href: '#' },
  { name: 'Profile', icon: UserCircleIcon, href: '#' },
];

const Sidebar = () => {
  return (
    
    <div className="flex flex-col w-16 bg-gray-900 h-screen fixed top-0 left-0"> 
      {}
      <div className="flex items-center justify-center h-16 shrink-0 bg-indigo-600">
        <span className="text-white text-xl font-bold">CD</span>
      </div>

      {}
      <nav className="flex flex-col flex-grow p-3 space-y-3">
        {primaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            title={item.name}
            className={`
              ${item.current
                ? 'bg-indigo-700 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }
              group flex items-center justify-center h-10 w-10 rounded-lg transition duration-150
            `}
          >
            <item.icon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">{item.name}</span>
          </a>
        ))}
      </nav>

      {}
      <nav className="p-3 border-t border-gray-800 space-y-3">
        {secondaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            title={item.name}
            className="group flex items-center justify-center h-10 w-10 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition duration-150"
          >
            <item.icon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;