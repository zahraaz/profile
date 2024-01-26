"use client";

import Link from "next/link";

type ProjectCard = {
  title: string;
  description: string;
  stack: Array<string>;
  gitUrl: string;
  previewUrl: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  gitUrl,
  previewUrl,
}: ProjectCard) {
  return (
    <>
      <div className="text-rose-800 rounded-b-xl mt-3 py-6 px-4">
        <h5
          className="text-xl font-semibold mb-2
          dark:text-rose-200 dark:text-opacity-90"
        >
          {title}
        </h5>
        <p
          className="text-[#082f49]
        dark:text-sky-50 dark:text-opacity-90"
        >
          {description}
        </p>
        <div>
          <ul className="flex flex-wrap mt-auto gap-2 sm:mt-auto">
            {stack.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] 
              px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="md:grid md:grid-cols-2 gap-16 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16
        "
        >
          <Link
            href={previewUrl}
            className=" text-sky-950 text-center bg-rose-300  px-6
              inline-block py-3 w-full sm:w-fit
              rounded-full mr-4 bg-gradient-to-br
              from-primary-500 to-secondary-500 
              hover:bg-slate-200 justify-center
              dark:text-sky-50 dark:text-opacity-90"
          >
            Demo
          </Link>
          <Link
            href={gitUrl}
            className="text-sky-950 text-center bg-rose-300  px-6
            inline-block py-3 w-full sm:w-fit
            rounded-full mr-4 bg-gradient-to-br
            from-primary-500 to-secondary-500 
            md:
            hover:bg-slate-200 justify-center
            dark:text-sky-50 dark:text-opacity-90"
          >
            Code
          </Link>
        </div>
      </div>
    </>
  );
}
