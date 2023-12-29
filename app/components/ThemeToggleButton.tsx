"use client";

import { Tooltip } from "flowbite-react";
import Icon from "./Icon";
//import sun and moon icons from react-icons/fa
import { FaSun, FaMoon } from "react-icons/fa";
import { useGlobalContext } from "@/app/lib/useAppContext";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string>("light");
  const { toggleTheme, setToggleTheme } = useGlobalContext() || {
    toggleTheme: false,
    setToggleTheme: () => {},
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "" : "dark");
    setToggleTheme(!toggleTheme);
  };

  return (
    <div className="mr-[1.5rem] w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem] text-[1.2rem] flex items-center justify-center rounded-full outline-2 outline-white hover:cursor-pointer">
      {toggleTheme ? (
        <Tooltip content="Light Theme" placement="bottom">
          <Icon icon={FaSun} handleClick={handleClick} className="text-white" />
        </Tooltip>
      ) : (
        <Tooltip
          content="Dark Theme"
          placement="bottom"
          className="bg-gray-900"
        >
          <Icon
            icon={FaMoon}
            handleClick={handleClick}
            className="text-gray-700"
          />
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeToggleButton;
