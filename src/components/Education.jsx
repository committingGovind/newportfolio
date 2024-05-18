import { motion } from "framer-motion";

import { useRecoilValue } from "recoil";
import { education } from "../store/atoms/education";
import { Card } from "./Card";
import { TextReveal } from "./TextReveal";

export function Education() {
  const educationCards = useRecoilValue(education);

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
      className="mt-20 grid"
    >
      <div>
        <div>
          <div className="flex items-center justify-center">
            <div>
              <TextReveal
                children={
                  <span className="sm:text-6xl text-5xl flex ml-6 font-mono text-left font-light text-white">
                    <span className="underline underline-offset-4 sm:no-underline">
                      EDUCATION
                    </span>
                    <span className="text-green-500 hidden sm:block">.</span>
                    <span className="text-green-500 block sm:hidden">:</span>
                  </span>
                }
              />
            </div>
            <div className="border-t border-blue-400 hidden sm:block flex-grow ml-4">
              {" "}
            </div>
          </div>

          <p className="sm:text-3xl text-xl mt-6 p-4 ml-12 text-slate-50 italic text-left font-thin h-auto w-[100lvw] sm:w-[60lvw]">
            "The more that you read, the more things you will know. The more
            that you learn, the more places you'll go."
          </p>
          <span className="sm:text-3xl text-2xl text-slate-200 italic text-left font-thin ml-32">
            - Dr. Seuss
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            {educationCards.map((card, index) => {
              return <Card key={index} i={index} props={card} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
