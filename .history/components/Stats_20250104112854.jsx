"use client";

import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats =[
  { 
    num: 12,
    text: "Years of Experience" 
  },
  { 
    num: 26,
    text: "Projects Completed" 
  },
  { 
    num: 8,
    text: "Technologies mastered" 
  },
  { 
    num: 500,
    text: "code commits" 
  },
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((Item, index ))}
        </div>
      </div>
    </section>
  )
}

export default Stats