import { motion, useScroll, useTransform } from "framer-motion";
import { Education } from "../components/Education";
import { Skills } from "../renders/Skills";
import { WorkExp } from "../renders/WorkExp";
import { useTypedSuperPower } from "../store/hooks/useTypedSuperPower";

export function Test() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const typingWords = [
    "Full Stack Developer",
    "IITian",
    "Swimmer",
    "Badminton LOVER!",
    "Otaku",
    "Binge Watching",
  ];

  const superpower = useTypedSuperPower(typingWords);

  return (
    <div className="flex justify-center">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex justify-center">
        <div>
          <section id="intro">
            <div className="h-lvh w-full flex justify-center items-center">
              <div className="grid grid-rows-2 gap-4">
                <div className="row-span-1">
                  <span className="lg:text-9xl xs:text-5xl text-3xl  font-mono text-left font-light text-white">
                    Hi, I'm GOVIND
                    <span className="text-green-500">.</span>
                  </span>
                </div>
                <div className="row-span-1">
                  <span className="lg:text-7xl xs:text-3xl text-2xl font-mono text-left font-light text-white">
                    I'm a/an <span>&lt; </span>
                    <span id="typewriter" className="text-blue-400">
                      {" "}
                      {superpower}
                    </span>
                    <span id="typewriterCursor" className="typewriterCursor">
                      |
                    </span>
                    <span>&gt;</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center">
              <div className="grid">
                <div className="row-auto h-auto">
                  <Education id="education" />
                </div>
                <div className="row-auto h-auto">
                  <Skills />
                </div>
                <div className="row-auto h-auto">
                  <WorkExp />
                </div>
                {/* <div>
                  <Skills />
                </div> */}
                {/* <div>
                  <p>Hi there!</p>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
