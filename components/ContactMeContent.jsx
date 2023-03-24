import React from "react";
import { motion as m } from "framer-motion";
import aboutMeImg2 from "@/images/aboutMe2.png";
import Image from "next/image";
import Link from "next/link";
import behance from "@/images/behance.png";
import facebook from "@/images/facebook.png";
import github from "@/images/github.png";
import linkedin from "@/images/linkedin.png";
import insta from "@/images/insta.png";

const ContactMeContent = () => {
  const style = {
    aboutMeHeading: "font-medium text-2xl mt-6 md:mt-20 md:text-5xl",
    aboutMePara: "font-RobotoMono glow font-light text-sm md:text-lg md:mt-5",
  };

  const mailBtn = () => {
    window.location.href = `mailto:wasath.vt@gmail.com`;
  }

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

      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[70%] flex flex-col md:flex-row justify-between mb-20 items-center">
          <div className="mx-7 md:max-w-[70vw]">
            <m.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              className="mt-20 md:flex"
            >
              <h1 className={style.aboutMeHeading}>
                Have a question or want to <br /> work together ?
              </h1>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="relative ">
                <button
                  onClick={() => {
                    mailBtn();
                  }}
                  className="hover:glow hover:bg-white hover:text-black transition duration-500 text-xs md:text-base font-medium font my-6 md:mt-10 bg-transparent border rounded-lg py-3 px-6"
                >
                  Drop a message
                </button>
              </div>
            </m.div>
          </div>

          <m.hr 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          className="w-[90%] rounded-lg md:hidden my-6 "  />

          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="flex gap-5 mt-6 justify-center items-center"
          >
            <Link href={"https://www.github.com/WasathTheekshana"}>
              <Image width={25} src={github} />
            </Link>

            <Link href={"https://www.behance.net/wasathvihanga"}>
              <Image width={30} src={behance} />
            </Link>

            <Link href={"https://www.facebook.com/wasaththeekshana2002"}>
              <Image width={25} src={facebook} />
            </Link>

            <Link href={"https://lk.linkedin.com/in/wasatht"}>
              <Image width={25} src={linkedin} />
            </Link>

            <Link href={"https://www.instagram.com/wasath.theekshana"}>
              <Image width={25} src={insta} />
            </Link>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeContent;
