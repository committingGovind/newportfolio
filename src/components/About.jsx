import { motion } from "framer-motion";
import { LoremIpsum } from "./Lorem";
import { TextReveal } from "./TextReveal";

export function About() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        margin: "-200px",
      }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onViewportEnter={() => console.log("Enter!")}
      onViewportLeave={() => console.log("exit!")}
    >
      <div>
        <div>
          <TextReveal
            children={
              <div>
                <div className="flex items-end">
                  <span className="text-6xl ml-4 text-left font-light font-mono text-slate-200">
                    &lt; ABOUT &gt;
                  </span>
                </div>
                <hr className="bg-green-500 text-right" />
              </div>
            }
          />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-white font-thin text-2xl italic p-2 ml-2 mt-5 text-balance">
              I'm Govind. I'm a graduate of{" "}
              <span className="underline">IIT Madras</span> and currently
              working as a software developer. I prefer to be a generalist
              trying to gather info diverse fields, be coding, general
              awareness, or sports!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
