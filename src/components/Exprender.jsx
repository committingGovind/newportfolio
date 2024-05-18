import { Pill } from "./Pill";

export function Exprender({ props }) {
  const worksDone = props.works;
  const techstack = props.techstack;

  return (
    <div className="flex sm:justify-center justify-start">
      <div className="grid h-auto w-auto md:w-[70lvw] md:shadow-2xl md:shadow-black md:rounded-md p-10 md:bg-[#191919]">
        <div className="flex justify-between">
          <div className="bg-green-500 text-[#222] pl-1 pr-1 rounded-md md:text-3xl md:bg-inherit md:text-slate-200 md:font-mono md:font-thin">
            {props.name}
          </div>
          <div className="ml-20 bg-green-500 text-[#222] pl-1 pr-1 rounded-md md:text-2xl md:bg-inherit md:font-mono md:font-thin md:text-slate-200">
            {props.duration}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="bg-green-500 text-[#222] pl-1 pr-1 rounded-md text-sm md:text-xl md:bg-[#222] md:text-blue-400 md:font-mono md:font-thin">
            {props.title}
          </div>
          <div className="ml-32 bg-green-500 text-[#222] pl-1 pr-1 rounded-md text-sm md:text-xl md:bg-[#222] md:text-blue-400 md:font-mono md:font-thin">
            {props.location}
          </div>
        </div>
        <div className="flex justify-center h-auto w-[50lvh] md:w-[60lvw] mt-6">
          <div className="grid">
            {worksDone.map((work, index) => {
              const splitWork = work.split(":");

              return (
                <div className="flex justify-center mt-2 mb-2 flex-wrap">
                  <div className="text-left text-white">
                    <p className="font-thin md:text-xl md:font-thin md:text-slate-200">
                      <span className="md:text-xl md:font-thin md:text-slate-50">
                        {index + 1 + ".)"}{" "}
                      </span>
                      <span className="underline md:no-underline md:mb-4 font-medium md:text-xl md:font-mono md:text-thin md:text-blue-400">
                        {splitWork[0]}
                      </span>
                      {": "}
                      <br className="hidden md:block mt-4"></br>
                      {splitWork[1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-auto w-[40lvh] md:w-[60lvw] md:mt-5">
          <ul className="flex flex-wrap gap-2">
            {techstack.map((tech, index) => {
              return <Pill key={index} skill={tech} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
