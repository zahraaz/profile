"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import photo from "@/public/photo.jpg";

import MenuOverlay from "./menuOverlay";
import NavLink from "./navLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/">
          <Image
            src={photo}
            alt="personal image"
            quality={100}
            width={300}
            height={300}
            className="inline-block h-12 w-12 rounded-full ring-2"
          />
        </Link>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            <li>
              {" "}
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-sky-900 sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-sky-900 sm:text-xl rounded md:p-0 hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-sky-900 sm:text-xl rounded md:p-0 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
