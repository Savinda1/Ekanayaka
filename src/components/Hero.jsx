import React from "react";
import bgImage from "../assets/video/2.jpeg"; // make sure this path is correct

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      

       

        

        <div className="mt-16 max-w-4xl mx-auto">
          

          <div className=" relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/videos/1.mp4"
              title="Student AI Homework Helper Demo"
              autoPlay
              controls
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-300 mt-4 text-sm">
            Watch how our AI solves math problems step-by-step
          </p>
        </div>
      </div>
  );
}
