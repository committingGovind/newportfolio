export function Pill({ skill }) {
  return (
    <li>
      <button
        className={`bg-[#2F3C7E] rounded-xl text-[#FBEAEB] text-xs lg:text-lg lg:p-2 py-2 px-2 hover:cursor-default mr-2 lg:mr-4 sm:mt-0 mt-0.5 lg:font-sans lg:font-thin`}
      >
        {skill}
      </button>
    </li>
  );
}
