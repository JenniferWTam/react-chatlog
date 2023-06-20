
// ColorChoice.js
import React from 'react';

const ColorChoice = ({ setColorCallback }) => {
  const handleColorSelection = (color) => {
    setColorCallback(color);
  };

  return (
    <div className="color-choice">
      <button onClick={() => handleColorSelection('red')}>
        <span role="img" aria-label="Red">
          🔴
        </span>
      </button>
      <button onClick={() => handleColorSelection('orange')}>
        <span role="img" aria-label="Orange">
          🟠
        </span>
      </button>
      <button onClick={() => handleColorSelection('yellow')}>
        <span role="img" aria-label="Yellow">
          🟡
        </span>
      </button>
      <button onClick={() => handleColorSelection('green')}>
        <span role="img" aria-label="Green">
          🟢
        </span>
      </button>
      <button onClick={() => handleColorSelection('blue')}>
        <span role="img" aria-label="Blue">
          🔵
        </span>
      </button>
      <button onClick={() => handleColorSelection('purple')}>
        <span role="img" aria-label="Purple">
          🟣
        </span>
      </button>
    </div>
  );
};

export default ColorChoice;
