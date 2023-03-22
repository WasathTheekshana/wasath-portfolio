import React, { useState } from "react";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute flex flex-col justify-center top-0 left-0 h-screen w-screen bg-black/20 backdrop-blur-xl transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col justify-center items-center gap-7 text-2xl ">
        {/* <Link href={'/'}>
            <h1>Home</h1>
          </Link> */}
        <Link href={"/"}>
          <h1>aboutMe</h1>
        </Link>
        <Link href={"/"}>
          <h1>blog</h1>
        </Link>
        <Link href={"/"}>
          <h1>myWork</h1>
        </Link>
        <Link href={"/"}>
          <h1>contactMe</h1>
        </Link>
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      
      <nav className="hidden md:flex md:justify-center">

      <h1 className="text-3xl font-bold">.WT</h1>
      </nav>
      <nav className="md:hidden">
        <MobileNav open={open} setOpen={setOpen} />

        <div className="px-5 flex justify-between items-center pt-5">
          <h1 className="text-3xl font-bold">.WT</h1>

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
                open ? "w-0" : "w-full"
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
