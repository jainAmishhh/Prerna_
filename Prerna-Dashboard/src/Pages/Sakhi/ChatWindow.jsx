import React from 'react';
import { MessageCircle, Video, Sparkles } from 'lucide-react';

const ChatWindow = ({ messages, isProcessing, messagesEndRef }) => (
  <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-pink-50/30 to-purple-50/30">
    {messages.map((message, index) => (
      <div
        key={index}
        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-md px-5 py-3 rounded-t-2xl 
            ${message.type === "user" 
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-bl-2xl shadow-lg hover:shadow-xl transition-shadow" 
                : "bg-white shadow-xl border border-pink-100 text-gray-800 rounded-br-2xl hover:shadow-2xl transition-shadow"
            }`}
        >
          {message.type === "bot" && (
            // Enhanced Sakhi Avatar/Label
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-pink-700 animate-pulse" />
              <span className="font-extrabold text-pink-700 text-base tracking-wide">Sakhi AI</span>
            </div>
          )}
          <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
          
          {message.hasVideo && (
            // Stronger visual call-to-action for video
            <div className="mt-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-3 border-2 border-pink-300 shadow-md">
              <div className="flex items-center space-x-2 mb-2">
                <Video className="w-4 h-4 text-purple-700" />
                <span className="text-xs font-bold text-purple-700">Video Guide Ready!</span>
              </div>
              <button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white w-full py-2 rounded-lg text-sm font-bold shadow-lg 
                           hover:shadow-xl transition-all flex items-center justify-center space-x-2 transform hover:scale-[1.01]"
              >
                <Video className="w-5 h-5" />
                <span>Watch: {message.videoTitle}</span>
              </button>
            </div>
          )}
          
          <p className={`text-xs mt-2 ${message.type === "user" ? "text-white/70" : "text-gray-500/80"}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    ))}
    
    {isProcessing && (
      // Enhanced Processing/Typing Indicator
      <div className="flex justify-start">
        <div className="bg-white shadow-xl border border-pink-200 px-4 py-3 rounded-2xl">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: "0s", animationDuration: "1.5s" }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: "0.2s", animationDuration: "1.5s" }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: "0.4s", animationDuration: "1.5s" }}></div>
            </div>
            <span className="text-sm font-medium text-purple-600">Sakhi is consulting her knowledge base...</span>
          </div>
        </div>
      </div>
    )}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatWindow;