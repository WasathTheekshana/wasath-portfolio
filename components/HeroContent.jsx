import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

const PDF_FILE_URL = '/Wasath Theekshana.pdf'

function HeroContent() {
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer.", "UI/UX Designer.", "Cloud Enthusiastic."],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 80,
  });

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

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

        <div className="opacity-75 relative ">
            <button onClick={() => {downloadFile(PDF_FILE_URL)}} className="hover:glow hover:bg-white hover:text-black transition duration-500 text-xs md:text-base font-medium font mt-6 md:mt-10 bg-transparent border rounded-lg py-3 px-6">
              Download CV
            </button>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
