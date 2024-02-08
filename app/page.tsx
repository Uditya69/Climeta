"use client"
import Weather from "@/components/Weather/page";
import Lottie,{LottiePlayer} from "lottie-react";
import def from "@/assets/hazebg.json"
export default function Home() {
  return (
    <div className="flex justify-center items-center m-auto mt-[25%]">
  <div className=" fixed h-[100vh] w-[100vw]"><Lottie animationData={def}/></div>
    <div className="lg:fixed md:relative">
      <Weather/>
      </div>
    </div>
  );
}
