import { useState, useEffect } from 'react';
import { useClient } from './useClient';

export const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const isClient = useClient();
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return { ...screenSize, isMobile: screenSize.width < 768 };
};
