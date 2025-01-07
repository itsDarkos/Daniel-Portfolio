"use client";

import { AnimatePresence, easeOut } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  const pathname = usePathname();
  return <AnimatePresence>
    <div key={pathname}>
      <motion.div 
        initial ={{opacity: 1}}
        animate={{
          opacity: 0, 
          transition:{delay: 1, duration: 0.4, ease: "easeinOut"},
        }}
        className="h-screen w-screen bg-black fixed top-0 left-0 z-50"
      />
      {children}
    </div>
    </AnimatePresence>
}

export default PageTransition