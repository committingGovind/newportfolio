import { useRecoilValue } from "recoil";
import { Exprender } from "../components/Exprender";
import { TextReveal } from "../components/TextReveal";
import { workstack } from "../store/atoms/workstack";
import { useQuoteTypedSuperPower } from "../store/hooks/useQuoteTypedSuperPower";

export function WorkExp() {
  const expCards = useRecoilValue(workstack);

  const typingQuotes = [
    "The only source of knowledge is experience.",
    "Experience is the teacher of all things.",
    "Experience is the mother of wisdom.",
  ];

  const typingPerson = ["Albert Einstein", "Julius Caesar", "Proverb"];

  const quotesSuperpower = useQuoteTypedSuperPower(typingQuotes, 50, 500, 50);

  const peopleSuperpower = useQuoteTypedSuperPower(typingPerson, 60, 500, 50);

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

        <p className="text-2xl lg:text-6xl lg:text-opacity-60 lg:mt-16 mt-6 p-4 ml-3 text-slate-50 italic text-left font-thin">
          "{quotesSuperpower}"
        </p>
        <span className="text-2xl lg:text-5xl lg:text-opacity-40 text-slate-50 lg:ml-[65%] lg:mt-20 italic text-left font-thin ml-20">
          - {peopleSuperpower}{" "}
        </span>
      </div>
      <div className="flex justify-center mt-24">
        <div className="grid justify-center ">
          {expCards.map((card, index) => {
            return (
              <div>
                <div>
                  <Exprender key={index} props={card} />
                </div>
                <div className="md:mt-10 md:mb-10">
                  <div className="border-t border-green-500 flex-grow ml-4 mt-4 mb-4"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
