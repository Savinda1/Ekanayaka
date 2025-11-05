import React from "react";
import { CheckCircle } from "lucide-react";

export default function ceo() {
  return (
    <section className="w-full  bg-[#8b3d1c] text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20  shadow-lg overflow-hidden">
      
      {/* ✅ Left Section */}
      <div className="flex-1 max-w-xl text-center md:text-left">

        

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Ekanayaka Spices <br />
        </h1>

        {/* Features List */}
        <ul className="space-y-3 mb-8 text-base sm:text-lg">
          {[
            "Ekanayaka Spices is a proud Sri Lankan brand dedicated to bringing the purest, most authentic flavors from our spice gardens to your kitchen. We carefully source and process our spices using traditional methods, ensuring each packet captures the vibrant color, aroma, and taste that Sri Lankan cuisine is famous for.",
            "Our range includes Red Chili Powder (Miris Kudu), Turmeric Powder (Kahakudu), Curry Powder (Thunapaha), Garlic Powder (Sudulunu Kudu), Black Pepper Powder (Gammiris Kudu), and Coriander Powder (Koththamalli Kudu), all packaged in eco-friendly paper packets with love and care.",
            "At Ekanayaka Spices, we are committed to quality, sustainability, and authenticity — bringing you pure, natural, and wholesome Sri Lankan flavors in every sprinkle.",
          
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start gap-3 text-white/90"
            >
            
              <span className="max-w-[280px] sm:max-w-none">{text}</span>
            </li>
          ))}
        </ul>
       
      </div>

      {/* ✅ Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="src/assets/video/11.png"
          alt="Student using AI Summarizer"
          className=" sm:w-[600px]"
        />
      </div>
    </section>
  );
}
