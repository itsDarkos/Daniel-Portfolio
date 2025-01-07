"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";


const PageTransition = ({children}) => {
  return <AnimatePresence>{children}</AnimatePresence>
  
}

export default PageTransition