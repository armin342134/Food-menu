import { createContext, useReducer } from "react";
export const Themecontex = createContext();
const themReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themReducer, {
    color: "#0fed0f",
    mode: "light",
    alt: "img",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <Themecontex.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </Themecontex.Provider>
  );
}
