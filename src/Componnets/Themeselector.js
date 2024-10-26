import React from "react";
import "./Themeselector.css";
import { useTheme } from "../hooks/useTheme";
import Icon from "../Icon/brightness_medium_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
const themecolors = ["blue", "red", "#0fed0f"];

export default function Themeselector() {
  const { changeColor, changeMode, mode } = useTheme();
  const togglemode = () => {
    changeMode("dark");
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={Icon}
          onClick={togglemode}
          style={{
            filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
          }}
        />
      </div>
      <div className="theme-btn">
        {themecolors.map((color) => (
          <div
            key={color}
            onClick={() => {
              changeColor(color);
            }}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
