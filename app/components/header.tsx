"use client";

import Image from "next/image";
import worker from "@/public/worker.png";
import Link from "next/link";

export default function Header() {
  return (
    <section>
      <div
        className="grid grid-cols-1 lg:grid-cols-12
        dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90"
      >
        <div className="col-span-7 place-self-center">
          <h1
            className="text-sky-950 mb-4 text-4xl lg:text-6xl font-extrabold
          dark:text-sky-300 dark:text-opacity-90 "
          >
            Zahraa Mahmood
          </h1>
          <h4
            className="text-rose-800 mb-4 text-xl lg:text-2xl font-extrabold
          dark:text-rose-200 dark:text-opacity-90"
          >
            Full Stack Web Developer{" "}
          </h4>
          <p className="text-lg lg:text-xl mb-6">
            Hello, I&apos;m Zahraa! Welcome to my digital playground. I&apos;m
            passionate about software development, creating technology to
            elevate people, and building community. You can find me writing
            code, teaching soft skills to others as well as contributing to
            projects. Interested in collaborating?
            <Link
              href="/#contact"
              className="font-semibold mx-2 underline decoration-rose-200 decoration-4
              hover:decoration-rose-400
               "
            >
              Send me a message
            </Link>
          </p>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400] lg:h-[400px] relative">
            <Image
              src={worker}
              alt="personal image"
              quality={100}
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
