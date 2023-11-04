import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="h-full flex flex-col items-center bg-black text-white">
      <Image
        alt="hero"
        src="/hero.jpg"
        width={1200}
        height={500}
        objectFit="cover"
        className="rounded-2xl mt-5 mx-10"
      />
      <p className="mt-10 font-semibold text-xl text-center px-4 md:px-0 md:text-left md:w-3/4 lg:w-1/2">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.
      </p>
      <h1 className="text-4xl md:text-9xl font-black">KONTRATO</h1>
      <Button variant="outline" className="bg-bl">
        Get Started
      </Button>
    </div>
  );
};

export default Hero;
