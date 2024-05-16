export function TestBar() {
  return (
    <nav
      className="no-scrollbar transform:none bg-zinc-950 h-screen sticky top-0 left-0 z-20 flex flex-col items-center overflow-y-scroll"
      style="transform: none;"
    >
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
        B<span className="text-indigo-500">.</span>
      </span>
      <a
        className="writing-vertical transform: none h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="/#about"
      >
        About
      </a>
      <a
        className="writing-vertical transform: none h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full bg-zinc-800 border-indigo-500 opacity-100"
        href="/#projects"
      >
        Projects
      </a>
      <a
        className="writing-vertical transform: none h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="/#experience"
      >
        Exp.
      </a>
      <a
        className="writing-vertical transform: none h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="/#contact"
      >
        Contact
      </a>
    </nav>
  );
}
