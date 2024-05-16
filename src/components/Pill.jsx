export function Pill({ skill, backColor = "#2F3C7E", textColor = "#FBEAEB" }) {
  console.log("backColor: " + backColor);
  console.log("textColor: " + textColor);

  return (
    <li>
      <button
        className={`bg-[${backColor}] rounded-xl text-[${textColor}] text-xs lg:text-lg lg:p-4 py-2 px-2 hover:cursor-default mr-2 lg:mr-4 sm:mt-0 mt-0.5 lg:font-sans`}
      >
        {skill}
      </button>
    </li>
  );
}
