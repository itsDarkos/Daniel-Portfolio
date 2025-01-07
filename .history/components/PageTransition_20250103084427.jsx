"use client";

import { AnimatePresence } from "framer-motion"
import {pa}


const PageTransition = ({children}) => {
  return <AnimatePresence>
      {children}
    </AnimatePresence>
  
}

export default PageTransition