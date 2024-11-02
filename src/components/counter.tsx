"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-11-18T19:30:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    setIsLoaded(true);
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-200 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative bg-white/80 backdrop-blur rounded-2xl overflow-hidden border border-rose-100">
        <div className="px-6 py-8 text-center">
          <span className="block text-6xl font-light text-slate-800 mb-2">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="block text-sm uppercase tracking-widest text-rose-400">
            {label}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`py-[40px] bg-gradient-to-br from-rose-50 via-white to-rose-50 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative  flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6 text-center">
            {/* Header Section */}
            <div className="space-y-4">
              <h3 className="text-rose-400 uppercase tracking-[0.3em] text-sm font-light">
                The Wedding Of
              </h3>
              <h1 className="text-4xl md:text-7xl font-light text-slate-800 tracking-wide">
                Priyanka & Kamal
              </h1>

              {/* Date and Time */}
              <div className="flex justify-center gap-8 text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-rose-400" />
                  <span>November 18, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <span>7:30 PM</span>
                </div>
              </div>
            </div>

            {/* Countdown Section */}
            <div className="space-y-8">
              <h2 className="text-2xl text-slate-600 font-light">
                Celebrating Love in
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
