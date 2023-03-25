import React from "react";
import { motion as m } from "framer-motion";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";



function MyWorkContent() {

  const [text, count] = useTypewriter({
    words: ["Wasath is still working.","Drop a message"],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 80,
  });

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <m.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className="text-base md:text-3xl font-RobotoMono glow"
      >
        {text}
        <Cursor
        cursorColor="#ffffff"      
        />
      </m.h1>

      <m.div
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}}
        transition={{ delay: 1.5, duration: 2.5, ease: "easeInOut" }}
        className="relative "
      >
        <Link href={'/ContactMe'}>
          <button className="hover:glow hover:bg-white hover:text-black transition duration-500 text-xs md:text-base font-medium font mt-6 md:mt-10 bg-transparent border rounded-lg py-3 px-6">
            Contact Me
          </button>
        </Link>
      </m.div>
    </div>
  );
}

export default MyWorkContent;
