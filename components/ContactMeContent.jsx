import React from "react";
import { motion as m } from "framer-motion";

import aboutMeImg2 from "@/images/aboutMe2.png";
import Image from "next/image";

const ContactMeContent = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 md:mt-32">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            className="relative -z-20 opacity-30 md:w-[15rem]"
            src={aboutMeImg2}
            width={200}
          />
        </m.div>
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="glow z-10 absolute font-semibold text-5xl md:text-8xl"
        >
          &lt;contactMe&#47;&gt;
        </m.h1>
      </div>

      

    </div>
  );
};

export default ContactMeContent;
