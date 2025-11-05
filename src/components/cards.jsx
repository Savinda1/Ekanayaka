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
  name: "Black Pepper Powder",
  image: img4,
  description:
    "Ekanayaka Spices manufacture black pepper powder using locally sourced, high-grade peppercorns, often from the Kandy and Matale districts.",
},
{
  _id: "2",
  name: "Garlic Powder",
  image: img5,
  description:
    "Ekanayaka Spices produce pure garlic powder made from freshly harvested Sri Lankan garlic, carefully dried and ground to preserve its natural aroma and flavor.",
},
{
  _id: "3",
  name: "Turmeric Powder",
  image: img3,
  description:
    "Ekanayaka Spices craft turmeric powder using premium rhizomes grown in the fertile soils of Kurunegala and Matale, ensuring a rich golden color and strong earthy taste.",
},
{
  _id: "4",
  name: "Red Chili Powder",
  image: img1,
  description:
    "Ekanayaka Spices produce vibrant red chili powder from sun-dried local chilies, offering a perfect balance of heat and flavor ideal for authentic Sri Lankan dishes.",
},
{
  _id: "5",
  name: "Coriander Powder",
  image: img2,
  description:
    "Ekanayaka Spices prepare coriander powder using freshly ground seeds sourced from trusted Sri Lankan farmers, delivering a warm, citrusy aroma to every meal.",
},
{
  _id: "6",
  name: "Curry Powder",
  image: img6,
  description:
    "Ekanayaka Spices blend a variety of locally grown spices to create rich, aromatic curry powder — a signature mix that brings traditional Sri Lankan flavor to your kitchen.",
},

];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg bg-white transition transform hover:-translate-y-1"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg text-gray-800">{hotel.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{hotel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
