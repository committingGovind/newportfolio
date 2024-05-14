import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { skills } from "../store/atoms/skills";
import { Variant } from "../components/Variant";
import { TextReveal } from "../components/TextReveal";

export function Skills() {
  const skill = useRecoilValue(skills);

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
        <TextReveal
          children={
            <div>
              <div className="flex items-end">
                <span className="text-6xl ml-6 text-left font-light text-green-200">
                  SKILLS{"  "}
                </span>

                <div className="w-[10px] h-[10px] bg-green-500 mb-2"></div>
              </div>
              <hr className="bg-green-500" />
            </div>
          }
        />
      </div>
      <div className="mt-20">
        <ol>
          <li className="">
            <TextReveal
              children={
                <h1 className="text-2xl ml-6 text-left italic font-light text-green-500">
                  1. <span className="underline">Languages:</span>
                </h1>
              }
            />
          </li>
          <li className="mt-4 ml-8 p-4 text-white font-thin text-2xl italic">
            JavaScript, C++, Java, TypeScript, SQL, Python, HTML, Bash
          </li>
          <li>
            <TextReveal
              children={
                <h1 className="text-2xl ml-6 text-left italic font-light text-green-500">
                  2. <span className="underline">Framerworks:</span>
                </h1>
              }
            />
          </li>
          <li className="mt-4 ml-8 p-4 text-white font-thin text-2xl italic">
            ReactJS, Node.js, Spring boot, Next.js, Tailwind, CSS
          </li>
          <li>
            <TextReveal
              children={
                <h1 className="text-2xl ml-6 text-left italic font-light text-green-500">
                  3. <span className="underline">Tools:</span>
                </h1>
              }
            />
          </li>
          <li className="mt-4 ml-8 p-4 text-white font-thin text-2xl italic">
            MongoDB, Prisma, Docker, MySQL, GIT, JIRA
          </li>
          <li>
            <TextReveal
              children={
                <h1 className="text-2xl ml-6 text-left italic font-light text-green-500">
                  4. <span className="underline">Soft Skills:</span>
                </h1>
              }
            />
          </li>
          <li className="mt-4 ml-8 p-4 text-white font-thin text-2xl italic">
            Leadership, Collaboration, Ownership, Agile Framework, Writing,
            Public Speaking, Time Management
          </li>
        </ol>
      </div>
    </motion.div>
  );
}
