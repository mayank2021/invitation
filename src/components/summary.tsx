"use client";

import React from "react";
import { Clock, MapPin, CalendarDays } from "lucide-react";
interface FunctionProps {
  name: string;
  tagline: string;
  date: string;
  time: string;
  place: string;
}

const WeddingFunctions = () => {
  const functions = [
    // {
    //   name: "Haldi",
    //   tagline: "Phoolon Ki Holi",
    //   date: "15th November 2024",
    //   time: "10:00 AM onwards",
    //   place: "Shiv Puram, Budaun (243601)",
    // },
    // {
    //   name: "Mehendi",
    //   tagline: "Glam and Gifts",
    //   date: "15th November 2024",
    //   time: "05:00 PM onwards",
    //   place: "Shiv Puram, Budaun (243601)",
    // },
    {
      name: "Wedding",
      tagline: "Roses and Poses",
      date: "18th November 2024",
      time: "08:00 AM onwards",
      place: "Green Lawn, Wazirpur Ring Road, Delhi-110052",
    },
  ];

  const FunctionCard = ({
    func,
    isLast,
  }: {
    func: FunctionProps;
    isLast: boolean;
  }) => (
    <div className={`relative ${!isLast ? "pb-8" : ""}`}>
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-px bg-rose-200 z-0"></div>
      )}

      <div className="relative z-10 bg-white rounded-xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow p-6">
        {/* Function Name and Tagline */}
        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-800">{func.name}</h3>
          <p className="text-rose-500 italic mt-1">
            &quot;{func.tagline}&quot;
          </p>
        </div>

        {/* Date & Time */}
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-rose-400" />
            <span>{func.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-rose-400" />
            <span>{func.time}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-rose-400 mt-1" />
            <span>{func.place}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Need Your Attention
          </h2>
          <div className="w-20 h-1 bg-rose-300 mx-auto rounded-full"></div>
        </div>

        {/* Functions List */}
        <div className="space-y-6">
          {functions.map((func, index) => (
            <FunctionCard
              key={index}
              func={func}
              isLast={index === functions.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingFunctions;
