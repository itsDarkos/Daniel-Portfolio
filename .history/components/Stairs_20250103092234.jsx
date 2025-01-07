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
  return totalSteps - index;
}

const Stairs = () => { 
  return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs.
     */}
    </>
  )
}

export default Stairs