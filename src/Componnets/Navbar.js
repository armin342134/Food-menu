import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("red")}>
        <Link to="/" className="brand">
          <h1>Foods</h1>
        </Link>
        <Searchbar />
        <Link to="/Create">ایجاد دستور العمل</Link>
      </nav>
    </div>
  );
}
