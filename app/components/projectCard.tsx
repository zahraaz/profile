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
          {/* <span
            className="inline-flex items-center rounded-md
        bg-green-50 px-2 py-1 text-xs font-medium text-green-700
        ring-1 ring-inset ring-green-600/20"
          >
            {stack}
          </span> */}
        </div>

        <div className="m-10 grid gap-4 grid-cols-2 text-[#082f49]">
          <Link
            href={previewUrl}
            className=" text-sky-950 bg-rose-300  px-6
              inline-block py-3 w-full sm:w-fit
              rounded-full mr-4 bg-gradient-to-br
              from-primary-500 to-secondary-500 
              hover:bg-slate-200 justify-center
              dark:text-sky-50 dark:text-opacity-90"
          >
            Demo
          </Link>
          <button>
            <Link
              href={gitUrl}
              className="text-sky-950 bg-rose-300  px-6
            inline-block py-3 w-full sm:w-fit
            rounded-full mr-4 bg-gradient-to-br
            from-primary-500 to-secondary-500 
            hover:bg-slate-200 justify-center
            dark:text-sky-50 dark:text-opacity-90"
            >
              Code
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
