"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false); // Estado para el botón

  const downloadPDF = async () => {
    setIsDownloading(true); // Cambiar el estado a "descargando"
    try {
      const response = await fetch("/api/generate-pdf");
      if (!response.ok) {
        throw new Error("No se pudo generar el PDF.");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "MiPortafolio.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
      alert("Hubo un problema al descargar el PDF. Inténtalo más tarde.");
    } finally {
      setIsDownloading(false); // Restaurar el estado del botón
    }
  };

  {{{
    
  }}}

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desarrollador de Software</span>
            <h1 className="h1 mb-6">
              Hola soy <br />{" "}
              <span className="text-accent">Daniel Lazaro Hernandez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Me destaco en el desarrollo front-end, creando experiencias
              digitales elegantes y funcionales con tecnologías web modernas.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={downloadPDF} // Llama a la función al hacer clic
                disabled={isDownloading} // Deshabilitar el botón mientras descarga
              >
                {isDownloading ? (
                  <span>Descargando...</span> // Mostrar "Descargando..." mientras descarga
                ) : (
                  <>
                    <span>Descargar CV</span>
                    <FiDownload className="text-xl" />
                  </>
                )}
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:trasition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
