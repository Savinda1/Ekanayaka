import React from "react";
import { MapPin, Star } from "lucide-react";

// Import images
import img1 from "../assets/video/4.jpg";
import img2 from "../assets/video/5.jpg";
import img3 from "../assets/video/12.jpg";
import img4 from "../assets/video/13.jpg";
import img5 from "../assets/video/14.jpg";
import img6 from "../assets/video/15.jpg";

const hotels = [
  {
    _id: "1",
    name: "Montmartre Majesty Hotel",
    image: img4,
    description:
      "Stay in the heart of Paris, France, at the Montmartre Majesty Hotel...",
  },
  {
    _id: "2",
    name: "Loire Luxury Lodge",
    image: img5,
    description:
      "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views...",
  },
   {
    _id: "2",
    name: "Loire Luxury Lodge",
    image: img3,
    description:
      "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views...",
  },
   {
    _id: "2", 
    name: "Loire Luxury Lodge",   
    image: img1,
    description:
      "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views...",
  },
   {
    _id: "2",
    name: "Loire Luxury Lodge",
    image: img2,
    description:
      "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views...",
  },
   {
    _id: "2",
    name: "Loire Luxury Lodge",
    image: img6,
    description:
      "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views...",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">{hotel.name}</h3>


            <p className="text-sm text-gray-600 line-clamp-3">
              {hotel.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
