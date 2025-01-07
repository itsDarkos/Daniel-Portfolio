"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div>
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
