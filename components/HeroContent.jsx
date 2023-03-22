import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";


function HeroContent() {
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer.", "UI/UX Designer.", "Cloud Enthusiastic."],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 80,
  });

  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <div className="w-fit">
        <div className="flex flex-col gap-2 text-5xl font-semibold font-sans md:text-8xl ">
          <h1>Wasath</h1>
          <h1>Theekshana</h1>
        </div>

        <div>
          <h1 className="glow text-base font-RobotoMono mt-5 md:text-2xl relative -z-10">
            <span>{text}</span>
            <Cursor cursorColor="#ffffff" />
          </h1>
        </div>

        <div className="">
         <a href="/pdf/Wasath Theekshana.pdf" download>
            <button className="hover:glow hover:bg-white hover:text-black transition duration-500 text-xs font-medium font mt-10 bg-transparent border rounded-lg py-3 px-6">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
