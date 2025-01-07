"use client";

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
          {stats}
        </div>
      </div>
    </section>
  )
}

export default Stats