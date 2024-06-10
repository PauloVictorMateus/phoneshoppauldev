import create from "zustand";

type ThemeProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeProps>((set) => ({
  theme: "light",
  setTheme: (theme) =>
    set(() => ({
      theme: theme,
    })),
}));
