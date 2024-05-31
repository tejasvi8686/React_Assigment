import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const seconds = new Date().getSeconds();
    if (seconds === 0) {
      console.log('End of minute');
    }
  }, [time]);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      <h2>Digital Clock</h2>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
