import React, { useState, useEffect } from 'react';

function Timer({ onStop }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      onStop();
    }
  }, [seconds]);

  return <div>{seconds}</div>;
}
