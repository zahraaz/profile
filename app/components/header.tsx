// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// import { links } from "../lib/data";

// export default function Header() {
//   return (
//     <header className=" z-[999] relative">
//       <motion.div
//         className="fixed top-0 left-1/2
//         h-[4.5rem] w-full
//         rounded-none border border-white border-opacity-40
//          bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
//          backdrop-blur-[0.5rem]
//     sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       ></motion.div>
//       <nav
//         className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem]
//       sm:h-[initial] sm:py-0"
//       >
//         <ul
//           className="flex w-[22rem] flex-wrap items-center justify-center
//         gap-y-1 text-[0.9rem] font-medium text-sky-500
//         sm:w-[initial] sm:flex-nowrap sm:gap-5"
//         >
//           {links.map((link) => {
//             <motion.li
//               className="h-3/4 flex items-center justify-center"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <Link
//                 className="flex w-full items-center justify-center px-3 py-3
//               hover:text-sky-950 transition"
//                 href={link.hash}
//               >
//                 {link.name}
//               </Link>
//             </motion.li>;
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// }

import Image from "next/image";

import worker from "@/public/worker.png";

export default function Header() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-sky-950 mb-4 text-4xl lg:text-6xl font-extrabold">
            Zahraa Mahmood
          </h1>
          <h4 className="text-rose-800 mb-4 text-xl lg:text-2xl font-extrabold">
            Full Stack Web Developer{" "}
          </h4>
          <p className="text-lg lg:text-xl mb-6">
            <p>
              Hello, I&apos;m Zahraa! Welcome to my digital playground. I&apos;m
              passionate about software development and making change and
              impact, creating technology to elevate people, and building
              community. You can find me writing code, teaching soft skills to
              others as well as contributing to projects and being part of the
              community.
            </p>
            <p>
              Interested in collaborating?
              <a href="/contact-me">Send me a message</a>
            </p>
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
