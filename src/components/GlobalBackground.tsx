import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

// Define the props type
interface GlobalBackgroundProps {
  theme: "light" | "dark";
}

const GlobalBackground = ({ theme }: GlobalBackgroundProps) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shared settings
    const settings = {
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: false, // Turn off mouse controls for a cleaner, non-interactive look
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 10.0,      // Fewer points
      maxDistance: 25.0, // More spread out
      spacing: 20.0,
    };

    // Theme-specific settings
    const lightThemeSettings = {
      ...settings,
      backgroundColor: 0xFAFAFA, // Your light bg color
      // NEW COLOR: A very subtle, light grey-blue
      color: 0xb0c0d0, 
    };

    const darkThemeSettings = {
      ...settings,
      backgroundColor: 0x0F141F, // Your dark bg color
      // NEW COLOR: A very dark, subtle teal. Barely visible.
      color: 0x003a3a, 
    };

    // Initialize or update Vanta effect
    if (vantaRef.current) {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      
      const newEffect = NET(theme === 'light' ? lightThemeSettings : darkThemeSettings);
      setVantaEffect(newEffect);
    }

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // Re-run this effect when the theme changes

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0" // Fixed, full-screen, behind content
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default GlobalBackground;