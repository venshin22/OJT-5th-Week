import { MessageSquareMore } from 'lucide-react';
import React, {useState} from 'react';

export default function TeslaAssist () {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className="fixed bottom-4 right-4 z-50 anim">
      <button 
        onClick={handleToggle}
        className="bg-gray-500 text-white bg-invert animate-pulse px-4 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
      >
        <MessageSquareMore color='white'/>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-4 w-64 border">
          <h3 className="text-lg font-semibold mb-2">Chat Options</h3>
          <ul>
            <li className="py-1 hover:bg-gray-100 cursor-pointer">Start New Chat</li>
            <li className="py-1 hover:bg-gray-100 cursor-pointer">View Chats</li>
            <li className="py-1 hover:bg-gray-100 cursor-pointer">Settings</li>
          </ul>
        </div>
      )}
    </div>
    )
}