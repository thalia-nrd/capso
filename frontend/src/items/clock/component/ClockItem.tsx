import React, { useEffect, useState } from "react";
import { getClockTime } from "../service/ClockService";
import "../styles/clock.css";

interface ClockItemProps {
  frameId: any;
}

const ClockItem: React.FC<ClockItemProps> = ({ frameId }) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let interval: any;

    const loadTime = async () => {
      try {
        const t = await getClockTime();
        setTime({
          hours: t.hours,
          minutes: t.minutes,
          seconds: t.seconds,
        });
      } catch (err) {
        console.error("Clock load error", err);
      }
    };

    loadTime();
    interval = setInterval(loadTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Pointer rotation angles
  const hourRotation = (time.hours % 12) * 30 + time.minutes * 0.5;
  const minuteRotation = time.minutes * 6;
  const secondRotation = time.seconds * 6;

  return (
    <div className="clock-container">
      <img
        src="/content/clock.png"
        alt="clock"
        className="clock-face"
      />

      <div
        className="clock-hand hour-hand"
        style={{ transform: `rotate(${hourRotation}deg)` }}
      />
      <div
        className="clock-hand minute-hand"
        style={{ transform: `rotate(${minuteRotation}deg)` }}
      />
      <div
        className="clock-hand second-hand"
        style={{ transform: `rotate(${secondRotation}deg)` }}
      />
    </div>
  );
};

export default ClockItem;