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
        <div className="flex flex-wrap gap-6 max-w-[">
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp 
                  end={item.num} 
                  duration={5} 
                  delay={2} 
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats