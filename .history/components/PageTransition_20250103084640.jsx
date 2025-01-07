"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  const pathname = usePathname();
  return <AnimatePresence>
    <div>
      
    </div>

    {children}
    
    </AnimatePresence>
}

export default PageTransition