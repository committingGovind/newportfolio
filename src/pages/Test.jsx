import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { Education } from "../components/Education";
import { Forms } from "../renders/Forms";
import { Projects } from "../renders/Projects";
import { Skills } from "../renders/Skills";
import { WorkExp } from "../renders/WorkExp";
import { navbaratom } from "../store/atoms/navbar";
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
    "Binge Watcher",
  ];

  const superpower = useTypedSuperPower(typingWords);

  const setNavbarHover = useSetRecoilState(navbaratom);

  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: false });

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: false });

  const ref4 = useRef(null);
  const inView4 = useInView(ref4, { once: false });

  const ref5 = useRef(null);
  const inView5 = useInView(ref5, { once: false });

  useEffect(() => {
    if (inView1) {
      setNavbarHover({
        ref: ref1,
        id: "intro",
      });
    } else if (inView2) {
      setNavbarHover({
        ref: ref2,
        id: "education",
      });
    } else if (inView3) {
      setNavbarHover({
        ref: ref3,
        id: "workexp",
      });
    } else if (inView5) {
      setNavbarHover({
        ref: ref5,
        id: "projects",
      });
    } else {
      setNavbarHover({
        ref: ref4,
        id: "skills",
      });
    }
  }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <div className="flex justify-center">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex justify-center">
        <div>
          <section id="intro" ref={ref1}>
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
                <div id="education" className="row-auto h-auto" ref={ref2}>
                  <Education />
                </div>
                <div id="workexp" className="row-auto h-auto" ref={ref3}>
                  <WorkExp />
                </div>
                <div
                  id="workexp"
                  className="row-auto h-auto md:mt-40"
                  ref={ref4}
                >
                  <Skills />
                </div>
                <div
                  className="row-auto h-auto hidden sm:block"
                  id="projects"
                  ref={ref5}
                >
                  <Projects />
                </div>
                <div className="mt-32">
                  <Forms />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
