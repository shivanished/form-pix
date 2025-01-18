import React, { useState, useEffect } from 'react';

const useTypewriter = (textStream, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textStream.length) {
        setDisplayText((prevText) => prevText + textStream.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [textStream, speed]);

  return displayText;
};

const Typewriter = ({ textStream, speed }) => {
  const displayText = useTypewriter(textStream, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;