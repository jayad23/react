import { createContext } from "react";

interface ColorContextSchema {
  toggleTheme: () => void;
};

export const ColorContext = createContext({} as ColorContextSchema);