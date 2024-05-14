export function Pill({ skill }) {
  return (
    <li>
      <button className="bg-[#2F3C7E] rounded-xl text-[#FBEAEB] text-xs py-2 px-2 hover:cursor-default mr-2">
        {skill}
      </button>
    </li>
  );
}
