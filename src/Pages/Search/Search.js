import React from "react";
import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Recipeslist from "../../Componnets/Recipes-list";
export default function Search() {
  const querystring = useLocation().search;
  const queryparams = new URLSearchParams(querystring);
  const query = queryparams.get("q");

  const url = "http://localhost:5000/Recipe?q=" + query;
  const { error, isloding, data } = useFetch(url);
  return (
    <div>
      <h2> " دستور پخت "{query}</h2>
      {error && <p>{error}</p>}
      {isloding && <p>isLoding ...</p>}
      {data && <Recipeslist recipes={data} />}
    </div>
  );
}
