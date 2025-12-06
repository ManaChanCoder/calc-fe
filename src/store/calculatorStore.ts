import { create } from "zustand";

type calculatorState = {
  stringNumber: string | number;
  stringCondition: string;
  string2ndNumber: string | number;

  // function
  getNumber: (value: string | number) => void;
  setStringCondition: (value: string) => void;
  computationFunction: () => void;
  delFunction: () => void;
  clearFunction: () => void;
};

export const calculatorStore = create<calculatorState>((set) => ({
  stringNumber: "",
  string2ndNumber: "",
  stringCondition: "",

  // functions
  getNumber: (value: string | number) =>
    set((state) => {
      if (state.stringCondition === "") {
        return { stringNumber: state.stringNumber + String(value) };
      }
      return { string2ndNumber: state.string2ndNumber + String(value) };
    }),

  setStringCondition: (value: string) =>
    set(() => ({ stringCondition: value })),

  delFunction: () =>
    set((state) => {
      if (state.string2ndNumber !== "") {
        return {
          string2ndNumber: state.string2ndNumber.toString().slice(0, -1),
        };
      } else if (state.stringCondition !== "") {
        return {
          stringCondition: "",
        };
      }
      return { stringNumber: state.stringNumber.toString().slice(0, -1) };
    }),

  computationFunction: () => {
    set((state) => {
      switch (state.stringCondition) {
        case "+":
          return {
            stringNumber: (
              Number(state.stringNumber) + Number(state.string2ndNumber)
            ).toFixed(2),
            stringCondition: "",
            string2ndNumber: "",
          };
        case "-":
          return {
            stringNumber: (
              Number(state.stringNumber) - Number(state.string2ndNumber)
            ).toFixed(2),
            stringCondition: "",
            string2ndNumber: "",
          };
        case "x":
          return {
            stringNumber: (
              Number(state.stringNumber) * Number(state.string2ndNumber)
            ).toFixed(2),
            stringCondition: "",
            string2ndNumber: "",
          };
        case "/":
          return {
            stringNumber: (
              Number(state.stringNumber) / Number(state.string2ndNumber)
            ).toFixed(2),
            stringCondition: "",
            string2ndNumber: "",
          };
        default:
          return { stringNumber: state.stringNumber };
      }
    });
  },

  clearFunction: () =>
    set(() => ({ stringNumber: "", stringCondition: "", string2ndNumber: "" })),
}));
