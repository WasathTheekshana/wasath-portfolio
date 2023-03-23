import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import { motion as m } from "framer-motion";

import aboutMeImg from "@/images/aboutMe-img.png";
import Link from "next/link";

import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

const PDF_FILE_URL = "/Wasath Theekshana.pdf";

function AboutMeLayout() {
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const style = {
    aboutMeHeading: "font-medium text-2xl mt-6 md:mt-20 md:text-5xl",
    aboutMePara: "font-RobotoMono glow font-light text-sm md:text-lg md:mt-5",
  };

  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center mt-20 md:mt-32">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut"}}
        >
          <Image
            className="relative -z-20 opacity-10 md:w-[15rem]"
            src={aboutMeImg}
            width={200}
          />
        </m.div>
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="glow z-10 absolute font-semibold text-5xl md:text-8xl"
        >
         &lt;aboutMe&#47;&gt;
         {/* <Cursor cursorColor="#ffffff" /> */}
        </m.h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="mx-7 md:max-w-[70vw]">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true}}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="mt-20 md:flex justify-between items-center"
          >
            <h1 className={style.aboutMeHeading}>
              Full stack developer, UI/UX <br /> engineer and problem <br />{" "}
              solver.
            </h1>
            <div className="relative ">
              <button
                onClick={() => {
                  downloadFile(PDF_FILE_URL);
                }}
                className="hover:glow hover:bg-white hover:text-black transition duration-500 text-xs md:text-base font-medium font my-6 md:mt-10 bg-transparent border rounded-lg py-3 px-6"
              >
                Download CV
              </button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true}}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          >
            <p className={`${style.aboutMePara}`}>
              I've been programming since I was in grade 6. I still remember the
              day I started watching Java videos. At that moment, I didn't know
              anything about programming. After giving up on Java, I started to
              learn Photoshop, which turned out to be a huge success. <br />
              <br /> Fast forward to 2022, which was a life-changing year for
              me. I began my university education and met a lot of people
              related to the path I wanted to master. I learned HTML/CSS/JS,
              React, and UI/UX. <br />
              <br /> After that, I started learning Data Structures &
              Algorithms, and I'm still struggling with it. But I know I can do
              it.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true}}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="md:flex gap-20"
          >
            <div>
              <h2 className={`${style.aboutMeHeading}`}>Experience</h2>
              <p className={style.aboutMePara}>
                Council member of Free & Open Source Software community in NSBM
                Green University.
              </p>
            </div>

            <div>
              <h2 className={`${style.aboutMeHeading}`}>Skills</h2>
              <p className={style.aboutMePara}>
                HTML / CSS / JS / React / NextJS / Figma / GIT / Python / C / C#
                / Firebase / MongoDB / SQL
              </p>
            </div>
          </m.div>

          <m.div
           initial={{ opacity: 0, y: -10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{once: true}}
           transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          >
            <m.div className="border rounded-lg mt-10 mb-10 px-4 py-6 md:max-w-[40%] md:py-10 md:px-10 md:mt-20  transition duration-500 hover:glow">
              <h1 className="font-medium text-3xl">
                Feel free to <br /> connect with me.
              </h1>
              <div className=" relative ">
                <Link href={"/ContactMe"}>
                  <button className="hover:bg-white hover:text-black transition duration-500 text-xs md:text-base font-medium font mt-6 md:mt-10 bg-transparent border rounded-lg py-3 px-6">
                    Contact Me
                  </button>
                </Link>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeLayout;
