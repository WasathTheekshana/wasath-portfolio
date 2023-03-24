import AboutMeLayout from "@/components/AboutMeLayout";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

import blue1 from "@/images/blue-1.png";
import blue2 from "@/images/blue-2.png";
import white1 from "@/images/white-1.png";
import white2 from "@/images/white-2.png";
import red1 from "@/images/red-1.png";

import { motion as m } from "framer-motion";

function AboutMe() {
  return (
    <div className="max-h-full">
      <m.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 1, duration: 1.5, ease: "easeInOut",}}
      >
        <Image
          src={blue1}
          className="-z-50 absolute top-0 opacity-30 md:opacity-100"
          loading="lazy"
        />
        <Image
          src={white1}
          className="-z-50 absolute top-[40rem] opacity-30 md:opacity-100"
          loading="lazy"
        />
        <Image
          src={white1}
          className="-z-50 absolute -top-[15rem] opacity-100 md:opacity-100"
          loading="lazy"
        />
        <Image
          src={red1}
          className="-z-50 absolute right-0 opacity-40 md:opacity-100"
          loading="lazy"
        />
        <Image
          src={blue2}
          className="-z-50 absolute right-0 top-[20rem] opacity-30 md:opacity-100"
          loading="lazy"
        />
      </m.div>

      <AboutMeLayout />
    </div>
  );
}

export default AboutMe;
