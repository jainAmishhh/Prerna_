import React from 'react';

const ChatQuickActions = ({ actions, onQuickAction }) => (
  <div className="px-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-100">
    {/* Enhanced Heading */}
    <p className="text-sm font-extrabold text-purple-700 mb-3 flex items-center space-x-2">
      <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>Instant Guidance</span>
    </p>
    
    <div className="flex flex-wrap gap-3">
      {actions.slice(0, 6).map((action, i) => (
        <button
          key={i}
          onClick={() => onQuickAction(action.text)}
          // Enhanced Button Styling
          className="bg-white 
                     text-gray-800 
                     border-2 border-pink-300 
                     px-4 py-2 rounded-full 
                     text-sm font-semibold 
                     flex items-center space-x-2 
                     transition-all duration-300 
                     hover:shadow-lg hover:shadow-pink-300/50 
                     hover:bg-gradient-to-r from-pink-100 to-purple-100 
                     hover:scale-[1.02]
                     focus:outline-none focus:ring-4 focus:ring-purple-200"
        >
          {/* Apply theme color to icon, ensuring contrast */}
          <span className="text-pink-600 transition-all duration-300 group-hover:text-purple-600">
            {action.icon}
          </span>
          <span className="text-sm">
            {action.text}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default ChatQuickActions;