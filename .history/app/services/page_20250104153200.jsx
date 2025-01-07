"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animete={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              div
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
