import Link from "next/link";
import Search from "./Search";
import { Theme } from "react-daisyui";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="dark:bg-gray-800 text-gray-700 border-gray-200 bg-blue-300 w-full absolute z-[900] p-3 flex flex-col md:flex-row gap-8 items-center"
    >
      <nav className="max-w-8xl mx-auto w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <p className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Next Image Gallery
            </p>
          </Link>
        </div>
      </nav>
      <Search />
      <ThemeToggleButton />
    </header>
  );
};

export default Navbar;
