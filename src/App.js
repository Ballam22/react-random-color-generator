import './App.css';
import randomColor from 'randomcolor'; // Import the randomcolor library
import React, { useState } from 'react';

const App = () => {
  // Initialize state with a default color (e.g., white)
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  // Function to handle color generation
  const handleGenerateColor = () => {
    const newColor = randomColor(); // Generate a random color
    setCurrentColor(newColor.toUpperCase()); // Ensure the color is always uppercase
  };

  return (
    <div className="app">
      <h1>Random Color Generator</h1>
      <button className="generate-button" onClick={handleGenerateColor}>
        Generate
      </button>
      <div className="color-display" style={{ backgroundColor: currentColor }}>
        Generated Color: {currentColor} {/* Display the color in uppercase */}
      </div>
    </div>
  );
};

export default App;
