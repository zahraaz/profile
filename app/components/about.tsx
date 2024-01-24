"use client";

import Image from "next/image";
import Link from "next/link";
import work from "@/public/work.gif";

export default function About() {
  return (
    <section
      className="text-white dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={work}
          width={500}
          height={500}
          quality={100}
          alt="laptop"
          priority={true}
        />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full justify-center">
          <h2
            className="text-4xl font-bold text-sky-950 mb-4
          dark:text-sky-300 dark:text-opacity-90 "
          >
            About Me
          </h2>
          <p
            className="text-sky-950 lg:text-lg
          dark:text-sky-50 dark:text-opacity-90 "
          >
            Starting from the first line of code “Hello World” that I wrote in
            C, going toward building a 2D game in Python using Pygame. I was
            passionate enough to get a computer engineering degree. And starting
            the journey of managing projects and becoming a Full Stack Web
            Developer. Interested in knowing more about me?
            <Link href="https://docs.google.com/document/d/1P1klVFnPLiEi4nPPAx69VXji0-ia3IHfUTwBMtvY6Xw/edit?usp=sharing">
              {" "}
              See my CV
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
