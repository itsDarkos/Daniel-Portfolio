import { animate, motion } from "framer-motion"

//variants
const stairAimation = {
  initial:{
    top: "0%",
  },
  animate:{
    top: "100%",
  },
  exit:{
    top: ["100%", "0%"],
  }, 
}

//calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1;
}

const Stairs = () => { 
  return (
    <>
    {/* render & motion divs, each representing a step of the stairs. 
      Each div will have the same animation defined by the stoirsAnimation object. 
      The delay for each div is calculated sinomically based on it's reversed index, 
      creating a staggered effect with decreasing delay for each subsequent step.
     */}
     <></>
    </>
  )
}

export default Stairs