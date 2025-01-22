import './App.css';
import React, { useState } from 'react';

// Utility function to generate a random color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color.toUpperCase();
};

// GenerateButton Component
const GenerateButton = ({ onClick }) => {
  return (
    <button className="generate-button" onClick={onClick}>
      Generate
    </button>
  );
};

// ColorDisplay Component
const ColorDisplay = ({ color }) => {
  return (
    <div className="color-display" style={{ backgroundColor: color }}>
      Generated Color: {color}
    </div>
  );
};

// App Component
const App = () => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const handleGenerateColor = () => {
    const newColor = generateRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <div className="app">
      <h1>Random Color Generator</h1>
      <GenerateButton onClick={handleGenerateColor} />
      <ColorDisplay color={currentColor} />
    </div>
  );
};

export default App;
