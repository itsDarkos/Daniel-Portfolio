"use client";

import { AnimatePresence } from "framer-motion"
import {paht}


const PageTransition = ({children}) => {
  return <AnimatePresence>
      {children}
    </AnimatePresence>
  
}

export default PageTransition