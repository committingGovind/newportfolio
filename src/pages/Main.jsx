import { motion, useScroll, useTransform } from "framer-motion";
import { About } from "../components/About";
import { ParallaxText } from "../components/ParallaxText";
import { Slowpop } from "../components/SlowButtonPop";
import { Imagepop } from "../components/SlowImagepop";
import { Education } from "../components/Education";
import { Skills } from "../renders/Skills";

export function Main() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex justify-center">
        <div className="grid gap-4">
          <div class="grid">
            {/* <div className="overflow-hidden">
              <section className="mt-28">
                <ParallaxText baseVelocity={-15}>
                  Scroll -or - Click
                </ParallaxText>
                <ParallaxText baseVelocity={15}>start Here!</ParallaxText>
              </section>
            </div> */}

            <div className="flex items-center justify-center mt-36">
              <div>
                <div className="flex items-end">
                  <span className="md:text-9xl text-6xl ml-4 font-mono text-left font-light text-white">
                    Hi, I'm GOVIND
                  </span>
                  <div className="w-[20px] h-[20px] bg-green-500 mb-4 ml-2"></div>
                </div>
                <div className="mt-4">
                  <span className="text-7xl ml-4 font-mono text-left font-light text-white">
                    I'm a{" "}
                    <span className="text-blue-400">
                      {" "}
                      &lt; Full Stack Developer &gt;
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="overflow-hidden">
              <section className="mt-28">
                <ParallaxText baseVelocity={-15}>start here!</ParallaxText>
                <ParallaxText baseVelocity={15}>Scroll or Click</ParallaxText>
              </section>
            </div> */}
          </div>
          <div className="grid mt-32 items-center" id="mainsection">
            <div className="flex justify-center items-center">
              <div className="mt-32">
                <About />
                <Education />
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
