import { TextReveal } from "../components/TextReveal";
import { motion } from "framer-motion";

export function WorkExp() {
  return (
    <div className="mt-24">
      <div id="experience">
        <div className="flex items-center justify-center">
          <div>
            <TextReveal
              children={
                <span className="sm:text-6xl text-5xl flex ml-6 font-mono text-left font-light text-white">
                  <span className="underline underline-offset-4 sm:no-underline">
                    Experience
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

        <p className="text-2xl mt-6 p-4 ml-3 text-slate-50 italic text-left font-thin">
          "The more that you read, the more things you will know. The more that
          you learn, the more places you'll go."
        </p>
        <span className="text-2xl text-slate-50 italic text-left font-thin ml-20">
          - Dr. Seuss
        </span>
      </div>
      <div className="flex justify-center items-center">
        {/* <div className="">
          {educationCards.map((card, index) => {
            return <Card key={index} i={index} props={card} />;
          })}
        </div> */}
      </div>
    </div>
  );
}
