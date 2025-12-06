// store
import { themeStore } from "../store/themeStore";
import { calculatorStore } from "../store/calculatorStore";

const CalculatorKeys = () => {
  const isDark = themeStore((state) => state.isDark);
  const {
    getNumber,
    setStringCondition,
    delFunction,
    clearFunction,
    computationFunction,
  } = calculatorStore();

  return (
    // keys
    <div className="grid grid-cos-4 grid-rows-5 gap-3 font-semibold select-none">
      <button
        className={`col-start-1 row-start-3 shadow-lg rounded-sm p-2 active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("1")}
      >
        1
      </button>
      <button
        className={`col-start-2 row-start-3 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("2")}
      >
        2
      </button>
      <button
        className={`col-start-3 row-start-3 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("3")}
      >
        3
      </button>

      <button
        className={`col-start-1 row-start-2 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("4")}
      >
        4
      </button>
      <button
        className={`col-start-2 row-start-2 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("5")}
      >
        5
      </button>
      <button
        className={`col-start-3 row-start-2 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("6")}
      >
        6
      </button>

      <button
        className={`col-start-1 row-start-1 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("7")}
      >
        7
      </button>
      <button
        className={`col-start-2 row-start-1 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("8")}
      >
        8
      </button>
      <button
        className={`col-start-3 row-start-1 shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("9")}
      >
        9
      </button>

      <button
        className={`col-start-2 row-start-4 rounded-sm shadow-lg p-2 active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber("0")}
      >
        0
      </button>

      <button
        className={`col-start-4 row-start-1 uppercase shadow-lg rounded-sm p-2 active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={delFunction}
      >
        del
      </button>
      <button
        className={`col-start-4 row-start-2 font-bold p-2 shadow-lg rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => setStringCondition("+")}
      >
        +
      </button>
      <button
        className={`col-start-4 row-start-3 font-bold shadow-lg rounded-sm p-2 active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => setStringCondition("-")}
      >
        -
      </button>
      <button
        className={`col-start-4 row-start-4 font-bold shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => setStringCondition("x")}
      >
        x
      </button>

      <button
        className={`col-start-1 row-start-4 font-bold shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => getNumber(".")}
      >
        .
      </button>
      <button
        className={`col-start-3 row-start-4 font-bold rounded-sm p-2 shadow-lg active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={() => setStringCondition("/")}
      >
        /
      </button>
      <button
        className={`col-start-1 col-span-2 row-start-5 uppercase font-bold text-1xl shadow-lg p-2 rounded-sm active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={clearFunction}
      >
        reset
      </button>
      <button
        className={`col-start-3 col-span-2 row-start-5 font-bold text-2xl rounded-sm p-2 shadow-lg active:scale-95 ${
          isDark
            ? "text-yellow-300 border-yellow-300 border"
            : "text-black border-navy-850 border"
        }`}
        onClick={computationFunction}
      >
        =
      </button>
    </div>
  );
};

export default CalculatorKeys;
