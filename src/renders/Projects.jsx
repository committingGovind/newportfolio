import { Cards } from "../components/Cards";
import { TextReveal } from "../components/TextReveal";

export function Projects() {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <div>
          <TextReveal
            children={
              <span className="sm:text-6xl text-5xl flex ml-6 font-mono text-left font-light text-white">
                <span className="underline underline-offset-4 sm:no-underline">
                  PROJECTS
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
      <div className="mt-4">
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
