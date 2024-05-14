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

      <div className="grid gap-4">
        <div class="grid">
          <div className="overflow-hidden">
            <section className="mt-28">
              <ParallaxText baseVelocity={-15}>Scroll -or - Click</ParallaxText>
              <ParallaxText baseVelocity={15}>start Here!</ParallaxText>
            </section>
          </div>

          <div className="flex items-center justify-center mt-36">
            <div>
              <Imagepop />
            </div>
            <div>
              <Slowpop />
            </div>
          </div>
          <div className="overflow-hidden">
            <section className="mt-28">
              <ParallaxText baseVelocity={-15}>start here!</ParallaxText>
              <ParallaxText baseVelocity={15}>Scroll or Click</ParallaxText>
            </section>
          </div>
        </div>
        <div className="grid mt-32" id="mainsection">
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
  );
}
