import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

const App = () => {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const handleGenerateColor = () => {
    const newColor = randomColor();
    const uppercaseColor = newColor.toUpperCase();
    console.log('Generated color:', newColor);
    setCurrentColor(uppercaseColor);
  };
  const textClass = currentColor === '#FFFFFF' ? 'white-text' : 'dark-text';

  return (
    <div className="app">
      <h1>Random Color Generator</h1>
      {/* The button with exact text 'Generate' */}
      <button className="generate-button" onClick={handleGenerateColor}>
        Generate
      </button>
      {/* Color display with background color matching the hex code */}
      <div
        key={`color-${currentColor}`}
        className={`color-display ${textClass}`}
        style={{
          backgroundColor: currentColor,
        }}
        aria-label={`generated color: ${currentColor}`}
      >
        Generated color: {currentColor} {/* Display hex code */}
      </div>
      <style>
        {`
            .white-text {
              color: black;
            }
            .dark-text {
              color: white;
            }
          `}
      </style>
    </div>
  );
};

export default App;
