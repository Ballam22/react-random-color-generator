import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

const App = () => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const handleGenerateColor = () => {
    const newColor = randomColor(); // Generate a random color
    const uppercaseColor = newColor.toUpperCase();
    console.log('Generated color:', newColor); // Convert to uppercase
    setCurrentColor(uppercaseColor); // Update state with the uppercase hex code
  };

  return (
    <div className="app">
      <h1>Random Color Generator</h1>
      {/* Button with the exact text "Generate" */}
      <button className="generate-button" onClick={handleGenerateColor}>
        Generate
      </button>
      {/* Div displaying the generated color with matching background */}
      <div
        className="color-display"
        style={{
          backgroundColor: currentColor,
        }}
      >
        Generated Color: {currentColor}
      </div>
    </div>
  );
};

export default App;
