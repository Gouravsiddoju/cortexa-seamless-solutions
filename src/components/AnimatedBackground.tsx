import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const AnimatedBackground: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Shared settings
    const settings = {
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    };

    // Theme-specific settings
    const lightThemeSettings = {
      ...settings,
      color: 0x005a5a, // electric-cyan/neural-blue (light mode)
      backgroundColor: 0xfafafa, // light background
      points: 10.0,
      maxDistance: 25.0,
      spacing: 18.0,
    };

    const darkThemeSettings = {
      ...settings,
      color: 0x00ffff, // electric-cyan
      backgroundColor: 0x0f141f, // dark background
      points: 12.0,
      maxDistance: 22.0,
      spacing: 16.0,
    };

    // Initialize or update Vanta effect
    if (vantaRef.current) {
      // Destroy the previous effect if it exists
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      
      // Create new effect based on theme
      const newEffect = NET(theme === 'light' ? lightThemeSettings : darkThemeSettings);
      setVantaEffect(newEffect);
    }

    // Cleanup function to destroy Vanta effect on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // Re-run this effect when the theme changes

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default AnimatedBackground;