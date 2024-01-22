import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  stack,
  gitUrl,
  previewUrl,
}) {
  return (
    <>
      <div>
        <div
          className="container box-border items-center justify-center absolute 
        top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden 
        group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#082f49] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon
              className="h-10 w-10 text-[#082f49] absolute top-1/2 left-1/2 transform
             -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="text-rose-800 rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#082f49]">{description}</p>
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
          <button>
            <Link
              href={previewUrl}
              className=" text-sky-400 bg-rose-100 px-6 
              inline-block py-3 w-full sm:w-fit 
              rounded-full mr-4 bg-gradient-to-br 
              from-primary-500 to-secondary-500 hover:bg-slate-200 justify-center"
            >
              Demo
            </Link>
          </button>
          <button>
            <Link
              href={gitUrl}
              className="text-sky-400 bg-rose-100 px-6 
            inline-block py-3 w-full sm:w-fit 
            rounded-full mr-4 bg-gradient-to-br 
            from-primary-500 to-secondary-500 hover:bg-slate-200 justify-center"
            >
              Code
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
