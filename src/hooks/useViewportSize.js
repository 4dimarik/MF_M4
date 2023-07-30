import { useState, useCallback } from 'react';
import useWindowEvent from './useWindowEvent';

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  const handleResize = useCallback(() => {
    setViewportSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  }, []);

  useWindowEvent('resize', handleResize, {});

  return viewportSize;
}

export { useViewportSize };
