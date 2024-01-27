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
      <div
        className="flex bg-indigo-50 shadow-lg rounded-lg 
      hover:bg-indigo-100 hover:grow
      dark:bg-sky-900 dark:text-gray-50 dark:text-opacity-90"
      >
        <div className="flex items-start px-4 py-6">
          <div className="">
            <div className="flex items-center justify-between">
              <h2
                className="text-xl font-semibold text-sky-950 -mt-1
              hover:text-2xl hover:text-rose-950"
              >
                {title}{" "}
              </h2>
            </div>
            <p className="mt-3 mb-5 text-gray-700 text-sm">{description}</p>
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

            <div className="flex items-center justify-between mt-4 md:mt-6 sm:px-8 xl:px-16">
              <Link
                href={previewUrl}
                className="inline-block sm:w-fit
                items-center px-4 py-2 text-sm font-medium text-center
                 text-white bg-rose-400 rounded-xl hover:bg-sky-800 
                 focus:ring-4 focus:outline-none focus:ring-blue-300 
                 dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:ring-rose-800"
              >
                Demo
              </Link>
              <Link
                href={gitUrl}
                className="inline-block sm:w-fit
                items-center px-4 py-2 text-sm font-medium text-center
                 text-white bg-rose-400 rounded-xl hover:bg-sky-800 
                 focus:ring-4 focus:outline-none focus:ring-blue-300 
                 dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:ring-rose-800"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
