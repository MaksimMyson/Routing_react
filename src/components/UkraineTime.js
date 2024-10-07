import React, { useState, useEffect } from 'react';

function UkraineTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString('uk-UA', { timeZone: 'Europe/Kiev' });
      setTime(currentTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-item">
      <h2>Ukraine</h2>
      <p>{time}</p>
    </div>
  );
}

export default UkraineTime;
