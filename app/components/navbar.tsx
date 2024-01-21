import Link from "next/link";
import Image from "next/image";

import photo from "@/public/photo.jpg";

export default function Navbar() {
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
