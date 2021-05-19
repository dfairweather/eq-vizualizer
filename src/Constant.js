import React from "react";
import { useState, useEffect } from "react";

export const Constant = ({ onValueChange }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    onValueChange(e.target.value);
  };
  return (
    <input
      type="number"
      step=".125"
      onChange={handleChange}
  
      style={{
          fontSize: 40,
        
      }}
    />
  );
};
