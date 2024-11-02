"use client";

import React from "react";
import { Phone } from "lucide-react";

const ContactCard = () => {
  const contacts = [
    {
      name: "Manish",
      phone: "+91 9999030271",
    },
    {
      name: "Amit",
      phone: "+91 9760275867",
    },
    {
      name: "Mayank",
      phone: "+91 8859167328",
    },
  ];

  const ContactPerson = ({ name, phone }: { name: string; phone: string }) => (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-rose-50/50 transition-colors">
      <span className="text-gray-800 font-medium">{name}</span>
      <div className="flex items-center gap-2 text-gray-700">
        <Phone className="w-4 h-4 text-[#335C72]" />
        <span>{phone}</span>
      </div>
    </div>
  );

  return (
    <div className="p-0">
      <div className="bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-[#335C72]/15 px-6 py-6 text-center space-y-2">
          <h2 className="text-2xl font-light text-gray-800">Have Questions?</h2>
          <p className="text-gray-600 text-sm">We are here to help you</p>
        </div>

        {/* Contact Info */}
        <div className="divide-y divide-gray-100 max-w-[500px] mx-auto">
          {contacts.map((contact, index) => (
            <ContactPerson key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
