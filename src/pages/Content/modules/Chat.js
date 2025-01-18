// filepath: /Users/shivanshsoni/Desktop/form-pix/src/pages/Content/modules/Chat.js
import React, { useState, useEffect } from 'react';
import '../../../styles/tailwind.css';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/ui/avatar';
import Typewriter from './Typewriter';

const Chat = ({ prompt }) => {
  const [messages, setMessages] = useState([{ role: 'user', content: prompt }]);
  const [responseStream, setResponseStream] = useState('');

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(
        'https://formpixocr-production.up.railway.app/api/openai',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        setResponseStream((prev) => prev + chunk);
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === 'assistant') {
            return [
              ...prev.slice(0, -1),
              { ...lastMessage, content: lastMessage.content + chunk },
            ];
          } else {
            return [...prev, { role: 'assistant', content: chunk }];
          }
        });
      }
    };

    fetchResponse();
  }, [prompt]);

  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          {message.role === 'assistant' && (
            <Avatar className="mr-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
          <div className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
            {message.role === 'assistant' ? <Typewriter textStream={message.content} speed={50} /> : message.content}
          </div>
          {message.role === 'user' && (
            <Avatar className="ml-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
    </div>
  );
};
export default Chat;
