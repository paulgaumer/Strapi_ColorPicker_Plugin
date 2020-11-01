import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

const Title = styled.h5`
  margin-bottom: 1rem;
  color: #333740;
`;

const ColorWindow = styled.div`
  background-color: ${(props) => props.color};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: ${(props) => props.color === '#FFFFFF' && '1px solid #5B5F65'};
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
  top: 70px;
`;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPicker = (props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(props.value ? props.value : '#FFFFFF');

  /**
   * Makes the color value available to the document for database update
   * @param {string} colorValue - in hex format
   */
  const updateColorValue = (colorValue) => {
    props.onChange({ target: { name: 'color', value: colorValue } });
  };

  /**
   * Assign a default color value if the document doesn't have one yet
   */
  useEffect(() => {
    if (!props.value) {
      updateColorValue(color);
    }
  }, []);

  /**
   * Handle color change from the the color picker
   * @param {string} color - in hex format
   */
  const handleChangeComplete = (color) => {
    setColor(color.hex);
    updateColorValue(color.hex);
  };

  return (
    <div>
      <Title>Color Tag</Title>
      <ColorWindow color={color} onClick={() => setShowPicker(true)} />
      {showPicker ? (
        <PopOver>
          <Cover onClick={() => setShowPicker(false)} />
          <ChromePicker color={color} onChange={handleChangeComplete} />
        </PopOver>
      ) : null}
    </div>
  );
};

export default ColorPicker;
