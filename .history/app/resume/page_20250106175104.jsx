"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaUnity,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// about data
const about = {
  title: "Sobre mí",
  description:
    "Soy un desarrollador y diseñador full-stack con pasión por crear experiencias de usuario hermosas y funcionales. Tengo experiencia trabajando con una variedad de tecnologías, incluyendo HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, Framer Motion, Node.js, Python, C#, Unity y Figma. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer como desarrollador.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Daniel Lazaro Hernandez",
    },
    {
      fieldName: "Celular",
      fieldValue: "(+57) 311 694 5420",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "2 años",
    },
    {
      fieldName: "Discord",
      fieldValue: "darkos",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Colombiana",
    },
    {
      fieldName: "Email",
      fieldValue: "daniellazaro20@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español, Ingles",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experiencia",
  description:
    "He tenido la oportunidad de trabajar en varios roles, adquiriendo experiencia tanto en diseño como en desarrollo. Desde crear interfaces de usuario intuitivas como Diseñador UI/UX hasta desarrollar sitios web dinámicos y responsivos como Desarrollador Front-End, he mejorado mis habilidades en una variedad de tecnologías. Mi objetivo siempre es crear experiencias de usuario fluidas y impactantes, mientras continúo desafiándome y creciendo profesionalmente.",
  items: [
    {
      company: "MeritumDev",
      position: "Diseñador UI/UX",
      duration: "2023-2024",
    },
    {
      company: "MeritumDev",
      position: "Desarrollador Front-End",
      duration: "Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Educación",
  description:
    "He seguido un aprendizaje continuo a través de varios cursos en línea y bootcamps, centrándome en ampliar mis conocimientos y habilidades en desarrollo web. Estos programas me han ayudado a obtener una base sólida tanto en tecnologías front-end como back-end, preparándome para los desafíos de desarrollo en el mundo real. Estoy comprometido con continuar mi educación y mantenerme al día con las últimas tendencias de la industria.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
  ],
};

// skills data
const skills = {
  title: "Mis Habilidades",
  description:
    "Me especializo en crear interfaces de usuario atractivas y eficientes utilizando una amplia gama de tecnologías modernas. Mi experiencia abarca tanto el desarrollo front-end como back-end, lo que me permite construir aplicaciones interactivas y responsivas de principio a fin. Me apasiona seguir mejorando mis habilidades y explorar nuevas herramientas y frameworks para mantenerme al día en el siempre cambiante panorama tecnológico.",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
    },
    {
      icon: <SiFramer />,
      title: "Framer Motion",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <FaPython />,
      title: "Python",
    },
    {
      icon: <TbBrandCSharp />,
      title: "C#",
    },
    {
      icon: <FaUnity />,
      title: "Unity",
    },
    {
      icon: <FaFigma />,
      title: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      classnames="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
          </TabsList>

          {/* content*/}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
