import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';
import { Input } from '../../components/ui/input';
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"


const mainPanel = document.createElement('div');
mainPanel.id = 'mainPanel';
document.body.appendChild(mainPanel);
mainPanel.className = 'p-4';

const cardData = [
  { title: "Upload an Image", description: "Try uploading a picture of your passport." },
  { title: "Ask a Question", description: "What does legal correspondant mean?" },
  { title: "Fill in on Website", description: "Autofill the provided information." },
  { title: "Learn about Forms", description: "What does this form I'm on do?" },
];

const App = () => (
  <div className="fixed top-5 right-5 w-[420px] max-h-[calc(100vh-40px)] bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden flex flex-col">
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
      <h1 className="text-2xl font-bold mb-2">Immigration Assistant</h1>
      <p className="text-sm opacity-90 leading-snug">
        Your trusted companion for immigration forms. Secure, private, and efficient.
      </p>
    </div>

    <div className="p-6 overflow-y-auto flex-grow">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {cardData.map((item, index) => (
          <Card key={index} className="border border-gray-100 shadow-sm">
            <CardHeader className="p-2 space-y-1">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <CardDescription className="text-xs text-gray-500">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 mb-2">
        <div className="flex-1 flex flex-col gap-2">
          <Input className="w-full h-8" placeholder="Enter your question here..." />
          <div className="flex justify-between gap-2">
            <Button variant="outline" className="flex-1 text-sm bg-gray-50 hover:bg-gray-100 h-8">
              Upload Image
            </Button>
            <Button variant="outline" className="flex-1 text-sm bg-gray-50 hover:bg-gray-100 h-8">
              Autofill
            </Button>
          </div>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white w-8 flex items-center justify-center" style={{ height: 'calc(64px + 0.5rem)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

      <div className="px-6 py-2 bg-gray-50 text-xs text-center text-gray-500">
        We use on-device processing. Your data stays private and is never shared.
      </div>
    </div>

  </div>
);


// Render the React component to the main panel
ReactDOM.render(<App />, mainPanel);