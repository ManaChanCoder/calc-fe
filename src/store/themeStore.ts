import { create } from "zustand";

type themeState = {
  isDark: boolean;

  // funtion
  toggleTheme: () => void;
};

export const themeStore = create<themeState>((set) => ({
  isDark: true,

  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
