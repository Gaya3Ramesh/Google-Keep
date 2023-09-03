import React from 'react';

function ColorPicker({ selectedColor, onSelectColor }) {
  const colors = ['#FFFFFF', '#F28B82', '#FBBC04', '#FFF475', '#CCFF90', '#A7FFEB', '#CBF0F8', '#AECBFA'];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-option ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
