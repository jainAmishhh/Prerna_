import React from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

const ChatInput = ({ 
  inputText, 
  setInputText, 
  handleSendMessage, 
  handleVoiceInput, 
  isRecording, 
  selectedLanguage 
}) => {
  const placeholderText = selectedLanguage === "hi" ? "अपना सवाल लिखें..." : "Type your question...";

  return (
    <div className="p-6 bg-white border-t-2 border-pink-100">
      <div className="flex items-center space-x-3">
        {/* Voice Input Button - Enhanced Hover Effect */}
        <button
          onClick={handleVoiceInput}
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording
              ? "bg-red-600 text-white shadow-xl animate-pulse ring-4 ring-red-300" // More dramatic pulsing for recording
              : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-xl hover:scale-[1.05] hover:rotate-2" // Subtle rotation/scale on hover
          }`}
        >
          {isRecording ? <Volume2 className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </button>

        {/* Text Input - Enhanced Focus State */}
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder={placeholderText}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-pink-200 text-gray-700 
                     focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200/50 
                     placeholder:text-gray-400 placeholder:italic" // Added subtle glow on focus
          style={{ 
            // Subtle gradient effect on placeholder text when input is empty
            '--placeholder-color': inputText.length === 0 ? 'var(--pink-500)' : 'var(--gray-400)' 
          }}
        />

        {/* Send Button - Enhanced Hover Effect */}
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim()}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center 
                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-xl hover:scale-[1.05] hover:-rotate-2" // Subtle opposite rotation/scale on hover
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      
      {isRecording && (
        <p className="text-sm text-red-600 font-semibold mt-2 flex items-center space-x-2 p-2 bg-red-50 rounded-lg border border-red-200">
          <Volume2 className="w-4 h-4 text-red-700 animate-pulse" />
          <span>Sakhi is listening... Speak your question in **{selectedLanguage === "hi" ? "हिंदी" : "English"}**</span>
        </p>
      )}
    </div>
  );
};

export default ChatInput;