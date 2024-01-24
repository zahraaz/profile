"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";

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
    // <nav className="fixed top-0 left-0 right-0 z-10 bg-[##fae8ff] bg-opacity-100">
    <nav
      className="fixed mx-auto border bg-indigo-100 top-0 left-0 right-0 z-10 bg-opacity-100
    dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-3">
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
              title="menu"
              id="nav-toggle-open"
              className="flex items-center px-3 py-2 border rounded text-sky-900 border-sky-900 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          ) : (
            <button
              title="x"
              id="nav-toggle-x"
              className="flex items-center px-3 py-2 border rounded text-sky-900 border-ky-900 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-lg flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => {
              return (
                <li key={link.title}>
                  <NavLink title={link.title} href={link.path} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
