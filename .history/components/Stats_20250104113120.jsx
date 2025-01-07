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
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center gap-2">
                <CountUp end={item.num} duration={5} delay={} className="text-5xl text-accent" />
                <span className="text-white/80">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats