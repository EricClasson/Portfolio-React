import { useState, useEffect } from "react";

// skapar en function som gör att en del av en text printas ut med den delay. så varje bokstav kommer eftervarndra
const Typewrite = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        // sätter delay
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>; // i span är det vad som ska skrivas ut med delay
};
export default Typewrite;
