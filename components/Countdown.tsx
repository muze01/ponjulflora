"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days,    label: "Days" },
    { value: timeLeft.hours,   label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-2 sm:gap-6 justify-center px-4">
      {blocks.map(({ value, label }) => (
        <div
          key={label}
          className="countdown-block rounded-lg px-3 py-3 sm:px-6 sm:py-4 text-center flex-1 sm:flex-none sm:min-w-[80px]"
        >
          <div className="font-display text-2xl sm:text-4xl text-gold font-bold leading-none">
            {String(value).padStart(2, "0")}
          </div>
          <div className="font-body text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-warm-brown mt-1 opacity-70">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
