"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    firstname: e.target.firstname.value,
    lastname: e.target.lastname.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    service: e.target.service.value,
    message: e.target.message.value,
  };

  const res = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await res.json();
  if (result.success) {
    alert('Mensaje enviado correctamente.');
  } else {
    alert('Hubo un error al enviar el mensaje.');
  }
};


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Celular",
    description: "(+57) 311 694 5420",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    description: "daniellazaro20@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Cra 4G #15-35, Planeta Rica, Cordoba, Colombia",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Trabajemos Juntos</h3>
              <p className="text-white/60">
                Estoy disponible para trabajar en proyectos de Desarrollo Web,
                Diseño de UI/UX y creación de Logos. Si necesitas soluciones
                creativas y funcionales, no dudes en ponerte en contacto
                conmigo. Juntos podemos dar vida a tus ideas.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 mb:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Nombres" />
                <Input name="lastname" type="text" placeholder="Apellidos" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Número de celular"
                />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un Servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un Servicio</SelectLabel>
                    <SelectItem value="est">Desarrollo Web</SelectItem>
                    <SelectItem value="cst">Diseño de UI/UX</SelectItem>
                    <SelectItem value="mst">Diseño de Logo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Escribe tu mensaje aquí."
              />
              <Button type="submit" className="max-w-40">
                Enviar mensaje
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
