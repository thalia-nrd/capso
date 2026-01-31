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

  const [secondColor, setSecondColor] = useState("#FF0000");

  // generate a smooth 60-color rainbow gradient
  const colors = Array.from({ length: 60 }, (_, i) => {
    const hue = Math.floor((i / 60) * 360); // 0-360 degrees around color wheel
    return `hsl(${hue}, 90%, 50%)`; // bright, saturated rainbow
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

        // set color based on current minute (0-59)
        setSecondColor(colors[t.minutes % colors.length]);

      } catch (err) {
        console.error("Clock load error", err);
      }
    };

    loadTime();
    interval = setInterval(loadTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
        style={{
          transform: `rotate(${secondRotation}deg)`,
          background: secondColor,
        }}
      />

      <div className="clock-center" />
    </div>
  );
};

export default ClockItem;