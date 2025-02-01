"use client";

import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Diseño UI/UX y Desarrollo",
    title: "Proyecto 4",
    description:
      "Diseñé y desarrollé mi portafolio, un portafolio digital que refleja mi enfoque profesional como Front-end Developer & UI/UX Designer. El diseño de la interfaz y la experiencia de usuario están cuidadosamente elaborados para ofrecer una presentación moderna y elegante de mis habilidades y proyectos.",
    stack: ["Next.js, Tailwind CSS y Framer Motion"],
    image: "/assets/work/thumb3.png",
    live: "https://daniel-portfolio-neon-zeta.vercel.app/",
    github: "https://github.com/itsDarkos/Daniel-Portfolio",
  },
  {
    num: "01",
    category: "Desarrollo Front End",
    title: "Proyecto 1",
    description:
      "Cuadro GYM es una app fitness donde desarrollé todo el front-end y los scripts para su funcionalidad. Permite crear rutinas personalizadas, realizar seguimiento de composición corporal y acceder a videos de ejercicios, ofreciendo una experiencia adaptada al usuario.",
    stack: ["Unity", "C#"],
    image: "/assets/work/thumb1.jpg",
    live: "https://cuadrogym.com/",
    github: "",
  },
  {
    num: "02",
    category: "Diseño UI/UX",
    title: "Proyecto 2",
    description:
      "Este proyecto consistió en el diseño completo de la interfaz y experiencia de usuario (UI/UX) utilizando Figma. Creé un sistema visual moderno, intuitivo y enfocado en mejorar la interacción del usuario con la aplicación.",
    stack: ["Figma"],
    image: "/assets/work/thumb2.png",
    live: "https://www.figma.com/design/6UJvQkGptDQ2wmJj7SzRW9/Web-Site-MeritumDev?node-id=0-1&t=m0InbO5OJuvnokvu-1",
    github: "",
  },
  {
    num: "03",
    category: "Diseño UI/UX y Desarrollo",
    title: "Proyecto 3",
    description:
      "Diseñé y desarrollé el nuevo sitio web de Meritum Dev, una empresa especializada en desarrollo de software. Me encargué de la UI/UX para lograr una experiencia moderna, profesional y atractiva, alineada con la identidad de la marca.",
    stack: ["Framer"],
    image: "/assets/work/thumb3.png",
    live: "https://www.meritumdev.com",
    github: "",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = useCallback((swiper) => {
    setProject(projects[swiper.activeIndex]);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 text-xl text-accent">
                {project.stack.join(", ")}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Proyecto en Vivo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Repositorio de GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
