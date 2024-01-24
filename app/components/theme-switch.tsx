import { Sun } from "react-feather";

export default function ThemeSwitch() {
  return (
    <button
      className="fixed bottom-5 right-5  w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] shadow-xl
      rounded-full flex items-center justify-center
      border border-white border-opacity-40 bg-white
      hover:scale-[1.15] active:scale-105 transition-all"
    >
      <Sun />
    </button>
  );
}
