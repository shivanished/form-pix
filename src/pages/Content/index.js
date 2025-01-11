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
} from "../../components/ui/button";

// Create the main panel div
const mainPanel = document.createElement('div');
mainPanel.id = 'mainPanel';
document.body.appendChild(mainPanel);
mainPanel.className = 'p-4';

const cardData = [
  { title: "Upload an Image", description: "Try uploading your ID card" },
  { title: "Ask a Question", description: "What does legal correspondant mean?" },
  { title: "Fill in on Website", description: "Autofill provided information." },
  { title: "Learn about the Form", description: "What does this form I'm on do?" },
];

// Define a React component for better structure
const App = () => (
  <div className="fixed top-5 right-5 w-96 max-h-[calc(100vh-40px)] bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden flex flex-col p-4 overflow-y-auto flex-grow">
    <div className="mb-4">
      <h1 className="text-xl font-bold">Hi There, Let's get these form's filled!</h1>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <Input className="w-full" />
        <div className="flex justify-between mt-4 gap-2">
          <Button variant="outline" className="flex-1 text-sm">
            Upload An Image
          </Button>
          <Button variant="outline" className="flex-1 text-sm">
            Try Autofill
          </Button>
        </div>
      </div>
      <div className="flex items-stretch">
        <Button variant="outline" className="h-full">
          Submit
        </Button>
      </div>
    </div>
  </div>
);


// Render the React component to the main panel
ReactDOM.render(<App />, mainPanel);