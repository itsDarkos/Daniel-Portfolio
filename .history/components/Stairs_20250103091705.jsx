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
    top: ["100%", "100%"],
  }, 
}


const Stairs = () => {
  return (
    <div>Stairs</div>
  )
}

export default Stairs