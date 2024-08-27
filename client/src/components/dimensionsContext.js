import React, { createContext, useState, useEffect, useCallback } from 'react';

// This bit of code is to have a single set of event listeners for window resizing.
// The game window is broken into multiple components - player display, game canvas, game log - plus there are the main menu and title screens, all of which 
// need to know when the user resizes the window.

// So rather than have event listeners in all files, this is a way to have a central listener that all files can use.


export const DimensionsContext = createContext();

// Create the screen width & height dimension objects that other files will  use.
export const DimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // When the listeners detect a screen size change, set the width & height to the new screen size
  const updateDimensions = useCallback(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const aspectRatioWidth = windowHeight * (16 / 9);
    const aspectRatioHeight = windowWidth * (9 / 16);

    const width = Math.min(windowWidth, aspectRatioWidth);
    const height = Math.min(windowHeight, aspectRatioHeight);

    setDimensions({ width, height });
  }, []);

  // Listeners to detect when the user has changed the screen size.
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    document.addEventListener('fullscreenchange', updateDimensions);
    // Run update dimensions on first render
    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
      document.removeEventListener('fullscreenchange', updateDimensions);
    };
  }, [updateDimensions]);

  // Export.
  return (
    <DimensionsContext.Provider value={dimensions}>
      {children}
    </DimensionsContext.Provider>
  );
};