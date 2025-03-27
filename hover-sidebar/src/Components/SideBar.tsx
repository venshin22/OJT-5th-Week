import React, { useState } from 'react';
import { Menu, Home, Settings, User, MessageCircle, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Profile' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' }
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-500 ease-in-out 
        ${isHovered ? 'w-72' : 'w-14'} overflow-hidden z-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center py-4 px-1 border-b">
          
            <img src='/assets/gads_logo_transparent.png' className='h-8 w-10 mx-1'/>
          

          {isHovered && (
            <div className='mr-auto'>
              <h2 className="text-lg font-semibold">Golden Arrow</h2>
              <p className="text-sm text-gray-500">Chat Bot</p>
            </div>
          )}
          
          {isHovered && (
            <Menu color='gray' size={45} className='hover:bg-gray-100 rounded-md p-2 '/>
          )}
          
        </div>

        {/* Sidebar Menu Items */}
        <nav className="flex-1 pt-4">
          {sidebarItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 hover:bg-gray-100 rounded-full cursor-pointer group"
            >
              <item.icon 
                className="w-6 h-6 text-gray-700 mr-4 flex-shrink-0" 
              />
              {isHovered && (
                <span className="text-md text-gray-800">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <img src='/assets/gads_logo_transparent.png' className='h-5 w-5'></img>
            {isHovered && (
              <span className="text-md text-gray-800">
                Welcome to Golden Chatbot
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;