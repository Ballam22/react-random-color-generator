import './App.css';
import randomColor from 'randomcolor'; // Import the randomcolor library
import React, { useState } from 'react';

const App = () => {
  // Initialize state with a default color (e.g., white)
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  // Function to handle color generation
  const handleGenerateColor = () => {
    const newColor = randomColor(); // Generate a random color
    const uppercaseColor = newColor.toUpperCase(); // Convert to uppercase to ensure consistency

    // Set both the background and the text color as uppercase
    setCurrentColor(uppercaseColor); // Update state with uppercase color
  };

  return (
    <div className="app">
      <h1>Random Color Generator</h1>
      {/* The button with exact text 'Generate' */}
      <button className="generate-button" onClick={handleGenerateColor}>
        Generate
      </button>
      {/* Color display with background color matching the hex code */}
      <div
        className="color-display"
        style={{
          backgroundColor: currentColor, // Apply background color (in uppercase)
          color: '#ffffff', // Optional: To make the hex text more visible (adjustable as needed)
        }}
      >
        Generated Color: {currentColor} {/* Display hex code */}
      </div>
    </div>
  );
};

export default App;
