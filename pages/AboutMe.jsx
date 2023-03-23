import AboutMeLayout from "@/components/AboutMeLayout";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

import blue1 from "@/images/blue-1.png";
import blue2 from "@/images/blue-2.png";
import white1 from "@/images/white-1.png";
import white2 from "@/images/white-2.png";
import red1 from "@/images/red-1.png";

function AboutMe() {
  return (
    <div className="max-h-full">
      <Image src={blue1} className="-z-50 absolute top-0 opacity-30 md:opacity-100" loading="lazy" />
      <Image src={white1} className="-z-50 absolute top-[30rem] opacity-30 md:opacity-100" loading="lazy" />
      <Image src={red1} className="-z-50 absolute right-0 opacity-40 md:opacity-100" loading="lazy" />




      <AboutMeLayout />
      <Image src={blue2} className="-z-50 absolute right-0 top-[20rem] opacity-30 md:opacity-100" loading="lazy" />
    </div>
  );
}

export default AboutMe;
