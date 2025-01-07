"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  const pathname = usePathname();
  return <AnimatePresence>
    <div key={pathname}>
      <motion.div initial ={{opacity}}></motion.div>    
    {children}</div>

    
    </AnimatePresence>
}

export default PageTransition