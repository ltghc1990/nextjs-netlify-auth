import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center relative mb-6">
      {/* use absolute positioning to center text */}
      <div className="absolute top-1/4 left-0 z-10 text-yellow-300 font-bold text-3xl border-2 border-red-300">
        <p className="bg-white">Premium</p> <br />
        <p className="bg-white">Gaming Guides</p>
      </div>
      <Image
        src="/images/Halo.jpg"
        alt="hero Image"
        width="800px"
        height="300px"
      />
    </div>
  );
};

export default Hero;
