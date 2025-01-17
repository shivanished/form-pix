import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import Chat from './modules/chat';

const mainPanel = document.createElement('div');
mainPanel.id = 'mainPanel';
document.body.appendChild(mainPanel);
mainPanel.className = 'p-4';

const miniPanel = document.createElement('div');
miniPanel.id = 'miniPanel';
miniPanel.className = 'p-2';

const cardData = [
  {
    title: 'Upload an Image',
    description: 'Try uploading a picture of your passport.',
  },
  {
    title: 'Ask a Question',
    description: "'What does legal correspondant mean?'",
  },
  {
    title: 'Fill in on Website',
    description: 'Autofill the provided information.',
  },
  {
    title: 'Learn about Forms',
    description: "'What does this form I'm on do?'",
  },
];

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSubmit = () => {
    console.log('Submit Button Clicked.');
    setMessages([...messages, { role: 'user', content: prompt }]);
    setShowChat(true);
    setPrompt('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleClose = () => {
    const mainPanel = document.getElementById('mainPanel');
    const miniPanel = document.getElementById('miniPanel');
    if (mainPanel && mainPanel.parentNode) {
      mainPanel.parentNode.replaceChild(miniPanel, mainPanel);
    } else if (miniPanel && miniPanel.parentNode) {
      miniPanel.parentNode.replaceChild(mainPanel, miniPanel);
    }
  };

  return (
    <div className="fixed top-5 right-5 w-[420px] max-h-[calc(100vh-40px)] bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Immigration Assistant</h1>
        <p className="text-sm opacity-90 leading-snug">
          Your trusted companion for immigration forms. Secure, private, and
          efficient.
        </p>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-lg w-6 h-6 flex items-center justify-center transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="p-4 pl-6 pr-6 overflow-y-auto flex-grow">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {cardData.map((item, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm">
              <CardHeader className="p-2 space-y-1">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs text-gray-500">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="pb-3">
          {showChat && <Chat prompt={messages[messages.length - 1]?.content} />}
        </div>

        <div className="flex gap-2 mb-2">
          <div className="flex-1 flex flex-col gap-2">
            <Input
              className="w-full h-8"
              placeholder="Enter your question here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex justify-between gap-2">
              <Button
                variant="outline"
                className="flex-1 text-sm bg-gray-50 hover:bg-gray-100 h-8"
              >
                Upload Image
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-sm bg-gray-50 hover:bg-gray-100 h-8"
              >
                Autofill
              </Button>
            </div>
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white w-8 flex items-center justify-center"
            style={{ height: 'calc(64px + 0.5rem)' }}
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>

        <div className="px-6 py-2 bg-gray-50 text-xs text-center text-gray-500">
          We use on-device processing. Your data stays private and is never
          shared.
        </div>
      </div>
    </div>
  );
};

// Render the React component to the main panel
ReactDOM.render(<App />, mainPanel);
