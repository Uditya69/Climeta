"use client";
import Weather from "@/components/Weather/page";
import Lottie, { LottiePlayer } from "lottie-react";
import Default from "@/assets/default.json";
import { useState } from "react";

export default function Home() {
  const [bg, setBg] = useState<any>(Default);



  return (
    <div className="flex justify-center items-center m-auto mt-[25%]">
      <div className="flex fixed h-screen w-screen m-auto mt-[2%] justify-center items-center">
        <Lottie animationData={bg} />
      </div>
      <div className="lg:fixed md:relative flex flex-col h-full justify-center">
      <div className=" self-center text-gray-700 text-2xl" >CLIMETA</div>

        <Weather />
      </div>
    </div>
  );
}
