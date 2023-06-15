import React from "react";
import Lottie from "lottie-react";
// import homeAnimation from "../../assets/animations/home__animation.json";
import handAnimation from "../../assets/animations/hand__animation.json";
import developer from "../../assets/animations/developer.json";
import { Introduction } from "..";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-around min-h-[80vh] m-auto md:flex-row  text-white">
      <div className=" flex flex-col mt-8  md:mt-0">
        <h2 className="text-xl font-extrabolde flex  items-end mb-4 md:mb-7 md:text-2xl">
          Hi There!
          <i className="w-14">
            <Lottie animationData={handAnimation} />
          </i>
        </h2>
        <h1 className=" text-4xl leading-1/2 mb-6  md:mb-8 md:text-5xl lg:w-96">
          I'M <b className="text-main">Uzair Zahoor </b>
          (un) popularly known as <b className="text-main">“Uzair Zahoor”</b>
        </h1>
        <div>
          <Introduction />
        </div>
      </div>
      <div className="flex -mt-4  min-w-2 md:mt-0 md:scale-130 lg:scale-75">
        <Lottie animationData={developer} />
      </div>
    </div>
  );
};

export default HeroSection;
