"use client";

import { AnimatePresence } from "framer-motion"
import {usepa}


const PageTransition = ({children}) => {
  return <AnimatePresence>
      {children}
    </AnimatePresence>
  
}

export default PageTransition