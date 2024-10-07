import React, { useState, useEffect } from 'react';

function OtherTimes({ timeZones }) {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      timeZones.forEach(({ name, timeZone }) => {
        const currentTime = new Date().toLocaleTimeString('en-US', { timeZone });
        newTimes[name] = currentTime;
      });
      setTimes(newTimes);
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000); 

    return () => clearInterval(intervalId); 
  }, [timeZones]);

  return (
    <div className="time-box">
      {timeZones.map(({ name }) => (
        <div key={name} className="time-item">
          <h2>{name}</h2>
          <p>{times[name]}</p>
        </div>
      ))}
    </div>
  );
}

export default OtherTimes;
