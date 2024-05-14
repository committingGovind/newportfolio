import { motion } from "framer-motion";

import { TextReveal } from "./TextReveal";
import { Pill } from "./Pill";
import { useRecoilValue } from "recoil";
import { education } from "../store/atoms/education";
import { Card } from "./Card";
import { useState } from "react";

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
      className="mt-20"
    >
      <div>
        <div>
          <TextReveal
            children={
              <div>
                <div className="flex items-end">
                  <span className="text-6xl ml-4 text-left font-light text-green-200">
                    EDUCATION
                  </span>
                  <div className="w-[10px] h-[10px] bg-green-500 mb-2"></div>
                </div>
                <hr className="bg-green-500" />
              </div>
            }
          />

          <p className="text-2xl mt-6 p-4 ml-3 text-slate-50 italic text-left font-thin">
            "The more that you read, the more things you will know. The more
            that you learn, the more places you'll go."
          </p>
          <span className="text-2xl text-slate-50 italic text-left font-thin">
            - Dr. Seuss
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-[5lvh]">
            {educationCards.map((card, index) => {
              return <Card key={index} props={card} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
