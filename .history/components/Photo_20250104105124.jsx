"use client";

import { motion } from "framer-motion"
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full h-full absolute top-0 left-0 z-10">
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image src="/assets/photo.png" priority quality={100} fill alt="" className="object-contain"/>
        </div>
      </motion.div>
    </div>
  )
}

export default Photo