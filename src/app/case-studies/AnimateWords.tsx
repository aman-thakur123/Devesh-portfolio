// components/AnimatedWords.tsx
import React, { useState, useEffect } from 'react';
import styles from './Animated.word.module.css';

const AnimateWords: React.FC = () => {
  const words = ['Concept', 'Creativity', 'Creation'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1600); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`flex items-center justify-center pt-6 ${styles.container}`}>
      {words.map((word, index) => (
        <>
        <span
          key={index}
          className={`outfit text-center text-6xl font-bold uppercase ${index === activeIndex ? styles.active : styles.inactive}`}
        >
          {word}
        </span>
        {index < words.length - 1 && <span className={`dot ${index === activeIndex ? styles.activeDot : ""}`}></span>}
        </>
      ))}
    </div>
  );
};

export default AnimateWords;