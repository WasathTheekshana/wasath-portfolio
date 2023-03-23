import React, { useState } from "react";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute z-50 flex flex-col justify-center top-0 left-0 h-screen w-screen bg-black/20 backdrop-blur-xl transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col justify-center items-center gap-7 text-2xl font-medium text-white">
        {/* <Link href={'/'}>
            <h1>Home</h1>
          </Link> */}
        <Link href={"/AboutMe"} onClick={() => {setOpen(!open)}}>
          <h1>aboutMe</h1>
        </Link>
        <Link href={"/Blog"} onClick={() => {setOpen(!open)}}>
          <h1>blog</h1>
        </Link>
        <Link href={"/MyWork"} onClick={() => {setOpen(!open)}}> 
          <h1>myWork</h1>
        </Link>
        <Link href={"/ContactMe"} onClick={() => {setOpen(!open)}}>
          <h1>contactMe</h1>
        </Link>
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  const style = {
    navMenuStyle: 'hover:glow transition duration-700 hover:glow',
  }

  return (
    <div>
      <nav className="hidden md:flex md:justify-center items-center gap-28 pt-10 text-white/70 font-medium">
        <Link href={"/AboutMe"} className={style.navMenuStyle}>
          aboutMe
        </Link>

        <Link className={style.navMenuStyle} href={"/Blog"}>
          blog
        </Link>
        <Link href={"/"}>
          <h1 className="text-3xl font-bold text-white">.WT</h1>
        </Link>

        <Link className={style.navMenuStyle} href={"/MyWork"}>
          myWork
        </Link>

        <Link className={style.navMenuStyle} href={"/ContactMe"}>
          contactMe
        </Link>
      </nav>

      <nav className="md:hidden">
        <MobileNav open={open} setOpen={setOpen} />

        <div className="px-7 flex justify-between items-center pt-8">
          <Link href={'/'}>
            <h1 onClick={() => {setOpen(!open)}} className="text-3xl font-bold relative z-10">.WT</h1>
          </Link>

          <div
            className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "hidden" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
