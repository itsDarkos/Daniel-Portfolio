import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Daniel Lazaro</span>
            </h1>
            <p>I excel at crafting elegant digital experiences and I am 
              proficient in various programming languages and technologies.</p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home