import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorGenerator() {
  const [color, setColor] = useState(randomColor()); // Initialize with a random color

  const generateNewColor = () => {
    const newColor = randomColor(); // Generate a new random color
    setColor(newColor); // Update the color state
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Light background for contrast
        fontFamily: 'Arial, sans-serif',
        color: '#333', // Dark text color for better readability
      }}
    >
      <h1>Random Color Generator</h1>
      <h3>Click the "Generate" button to see a random color!</h3>

      <div
        style={{
          backgroundColor: color,
          width: '300px',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid #000',
          borderRadius: '8px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#fff', // Text color for contrast
          textAlign: 'center',
          marginTop: '20px',
          transition: 'background-color 0.5s ease, color 0.5s ease',
        }}
      >
        {`Generated Color: ${color}`}
      </div>

      <button
        onClick={generateNewColor}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4caf50')}
      >
        Generate
      </button>
    </div>
  );
}
