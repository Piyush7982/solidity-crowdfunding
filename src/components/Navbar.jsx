import { GhostIcon } from "lucide-react";
import { ThemeToggle } from "./themetoggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sm:px-5 px-1 bg-background/50 h-14 border border-b-[1px] backdrop-blur-lg transition-all   py-1  z-20   text-foreground w-full sticky    top-0 left-0 right-0 items-center  grid grid-cols-12 ">
      <h1 className="col-span-3 col-start-1 flex text-center ">Logo</h1>
      <div className="flex mx-auto  items-center gap-10 max-sm:gap-5 col-span-6 col-start-4  ">
        <p>Home</p>
        <p>Home2</p>
        <p>Home3</p>
      </div>
      <div className=" col-span-3 col-start-10 gap-2 flex justify-end  items-center">
        <GhostIcon />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
