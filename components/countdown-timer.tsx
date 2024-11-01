"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const hackathonDate = new Date("2025-06-12T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <span className="text-4xl font-bold">{value}</span>
          <span className="text-sm text-muted-foreground capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
}