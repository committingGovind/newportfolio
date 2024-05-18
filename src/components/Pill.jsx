export function Pill({ skill, isTrue = true }) {
  var classname = ``;

  if (isTrue) {
    classname = `bg-[#2F3C7E] rounded-xl text-[#FBEAEB] text-xs lg:text-lg lg:p-2 py-2 px-2 hover:cursor-default mr-2 lg:mr-4 sm:mt-0 mt-0.5 lg:font-sans lg:font-thin`;
  } else {
    classname = `bg-[#2F3C7E] rounded-xl text-[#FBEAEB] text-xs lg:text-xs lg:p-2 py-2 px-2 hover:cursor-default mr-2 lg:mr-4 mt-2 lg:font-sans lg:font-thin`;
  }

  return (
    <li>
      <button className={classname}>{skill}</button>
    </li>
  );
}
