import { useState, useEffect } from "react";

// Function to get window dimensions
const getWindowDimensions = () => {
  const { innerWidth, innerHeight } =
    typeof window !== "undefined" ? window : { innerWidth: 0, innerHeight: 0 };
  return { width: innerWidth, height: innerHeight };
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return windowDimensions;
}
