import { useContext } from "react";
import { Themecontex } from "../Componnets/Themecontex";

export const useTheme = () => {
  const contex = useContext(Themecontex);

  if (contex === undefined) {
    throw new Error("useTheme () must be use inside a ThemeProvide ");
  }
  return contex;
};
