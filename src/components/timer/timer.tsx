import React, { useState, useEffect } from "react";

type Props = {
  onStop: () => void;
  onExpiration: () => void;
};

const Timer = ({ onStop, onExpiration }: Props) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      onExpiration();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleStop = () => {
    onStop();
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{timeLeft}</p>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
