import './App.css';
import React, { useState } from 'react';

// Utility function to generate a random color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color.toUpperCase(); // Ensure the generated color is always uppercase
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
    <div
      className="color-display"
      style={{ backgroundColor: color }}
      aria-label={`Generated color: ${color}`} // Accessibility improvement
    >
      Generated Color: {color}
    </div>
  );
};

// App Component
const App = () => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const handleGenerateColor = () => {
    const newColor = generateRandomColor(); // Generate a new color in uppercase
    setCurrentColor(newColor); // Update the state with the normalized color
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
