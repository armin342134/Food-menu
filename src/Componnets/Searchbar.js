import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handelsubmit = (e) => {
    e.preventDefault();
    navigate(`/Search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form className="searchform" onSubmit={handelsubmit}>
        <label>
          <span>جستجو : </span>
          <input
            type="text"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
