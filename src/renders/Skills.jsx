import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { TextReveal } from "../components/TextReveal";
import { skills } from "../store/atoms/skills";

export function Skills() {
  const skill = useRecoilValue(skills);

  return (
    <div className="mt-20 w-[100lvw] sm:w-[60lvw] p-2">
      <div className="flex items-center justify-center">
        <div>
          <TextReveal
            children={
              <span className="sm:text-6xl text-5xl flex ml-6 font-mono text-left font-light text-white">
                <span className="underline underline-offset-4 sm:no-underline">
                  SKILLS
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
    </div>
  );
}
