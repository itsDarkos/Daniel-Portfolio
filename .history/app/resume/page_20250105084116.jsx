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
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiCsharp } from 'react-icons/si';

// about data
const about = {
  title: 'About Me',
  description: 'I am a full-stack developer and designer with a passion for creating beautiful and functional user experiences. I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  info:[
    {
      fieldName: 'Name',
      fieldValue: 'Daniel Lazaro'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+57)'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2 years'
    },
    {
      fieldName: 'Discord',
      fieldValue: 'darkos'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Colombian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'daniellazaro20@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish'
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
  items: [
    {
      company: "MeritumDev",
      position: "UI/UX Designer",
      duration: "2024",
    },
    {
      company: "MeritumDev",
      position: "Front-End Developer",
      duration: "Present",
    }
  ]
}
// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Python, and Unity. I am always looking for new challenges and opportunities to learn and grow as a developer.',
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
  ]
}

// skills data



const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume