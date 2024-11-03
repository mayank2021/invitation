"use client";
import React from "react";
import { Navigation, MapPin } from "lucide-react";

const LocationCard = () => {
  const location = {
    name: "Green Lounge North Banquet",
    type: "Banquet Hall",
    rating: 4.2,
    reviews: 3660,
    address: {
      street: "C93, Ring Road",
      area: "Block B, Wazirpur Industrial Area",
      locality: "Ashok Vihar",
      city: "Delhi 110052",
    },
    // Updated coordinates to match exact location of Green Lounge North Banquet
    coordinates: "28.702836,77.168398",
    placeId: "ChIJp13FyCI9DDkR1zQX8OXkrvo", // Actual Google Maps Place ID for Green Lounge North Banquet
    hours: "Open 24 hours",
    isOpen: true,
    // Embed URL using the correct coordinates and place ID
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5589890740075!2d77.16620917565747!3d28.70283608088435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02224c8d5da7%3A0xfaec4e713117347e!2sGreen%20Lounge%20North%20Banquet!5e0!3m2!1sen!2sin!4v1730647899417!5m2!1sen!2sin",
  };

  const handleGetDirections = () => {
    // Using place_id for more accurate navigation
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates}&destination_place_id=${location.placeId}&travelmode=driving`;
    window.open(googleMapsUrl, "_blank");
  };

  // const handleViewOnMap = () => {
  //   // Using place_id for direct map view
  //   const mapUrl = `https://www.google.com/maps/place/?q=place_id:${location.placeId}`;
  //   window.open(mapUrl, "_blank");
  // };

  return (
    <div className="bg-[#4DB6AC]/10 px-4 py-12 lg:p-12 ">
      <div className="max-w-2xl mx-auto bg-white rounded-xl  overflow-hidden">
        {/* Map Section */}
        <div className="relative h-64 bg-gray-100">
          <iframe
            src={location.mapUrl}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Lounge North Banquet Location"
          />
        </div>

        <div className="p-6 space-y-2">
          {/* Header with Rating */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {location.name?.split(" ").slice(0, 2).join(" ")}
            </h2>
          </div>

          {/* Address and Hours */}
          <div className="space-y-3">
            <div className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
              <div className="flex flex-col">
                <span>
                  {location.address.street}, {location.address.area},{" "}
                  {location.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleGetDirections}
              className="flex-1 flex items-center justify-center gap-2 bg-[#4DB6AC] hover:bg-[#4DB6AC]/80 text-white px-4 py-3 rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2  focus:ring-offset-2"
            >
              <Navigation className="h-5 w-5" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
