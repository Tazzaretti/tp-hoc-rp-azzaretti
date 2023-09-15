import React, { useState } from 'react';

const Toggle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return children({ isVisible, toggleVisibility });
};

export default Toggle;