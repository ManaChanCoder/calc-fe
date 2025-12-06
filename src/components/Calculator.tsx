import { useEffect } from "react";

// icons
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

// store
import { themeStore } from "../store/themeStore";
import { calculatorStore } from "../store/calculatorStore";

// components
import CalculatorKeys from "./CalculatorKeys";

const Calculator = () => {
  const { isDark, toggleTheme } = themeStore();
  const { stringNumber, stringCondition, string2ndNumber } = calculatorStore();

  useEffect(() => {
    // console.log(stringNumber);
  }, [stringNumber, stringCondition]);

  return (
    <div className="p-5 w-md ">
      {/* header */}
      <div
        className={`flex justify-between items-center mb-5 ${
          isDark ? "text-yellow-300" : "text-purple-950"
        }`}
      >
        <span className="text-3xl select-none">Calculator</span>

        <div className="flex gap-3 items-center">
          <span className="text-sm uppercase font-bold select-none">theme</span>
          {isDark ? (
            <CiLight
              size={35}
              onClick={toggleTheme}
              className="active:scale-95"
            />
          ) : (
            <MdDarkMode
              size={35}
              onClick={toggleTheme}
              className="text-purple-950 active:scale-95"
            />
          )}
        </div>
      </div>

      {/* display */}
      <div
        className={`w-full h-23 shadow-lg rounded-md p-2 mb-5 text-5xl flex justify-end items-end ${
          isDark ? "bg-white text-black" : "bg-cyan-950 text-white"
        }`}
      >
        {`${stringNumber}${stringCondition}${string2ndNumber}`}
      </div>

      {/* keys */}
      <CalculatorKeys />
    </div>
  );
};

export default Calculator;
