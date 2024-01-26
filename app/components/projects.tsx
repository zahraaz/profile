"use client";
import { useRef } from "react";
import ProjectCard from "./projectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Child Vaccination Management",
    description:
      "An information system to track children's periodic vaccination schedules, coordinating with parents. Designed for Al-Quds Medical Centre, focusing on organized vaccination scheduling",
    stack: ["ReactJS", "MUI", "NodeJS", "ExpressJS", "MySQL", "TypeORM"],
    gitUrl: "https://github.com/zahraaz/Child_Vaccination_project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dilmun",
    description:
      "Dilmun allows people to sell, buy, and even donate products with a click of a button. With its availability in 3 different languages, you can sign up with either your email, Google, or Facebook",
    stack: [
      "ReactJS",
      "Redux Toolkit",
      "TailwindCSS",
      "Firebase",
      "Headless UI",
      "Farmer Motion",
    ],
    gitUrl: "https://github.com/ReCoded-Org/capstone-IQLBPS-Dilmun",
    previewUrl: "https://capstone-dilmun.netlify.app/",
  },
  {
    id: 3,
    title: "FashionEgo ",
    description:
      "An e-commerce website for women's clothing designers and customers.Enabled designers to showcase their work, and customers to reserve and order designs",
    stack: ["ReactJS", "MUI", "NodeJS", "ExpressJS", "MySQL", "TypeORM"],
    gitUrl: "https://github.com/zahraaz/newStar_fashion",
    previewUrl: "/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        className="text-center text-4xl font-bold text-sky-950 mt-4 mb-8 md:mb-12
      dark:bg-gray-900 dark:text-gray-300 dark:text-opacity-90"
      >
        My Projects
      </h2>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      >
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              stack={project.stack}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
