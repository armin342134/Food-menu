import React from "react";
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import Recipeslist from "../../Componnets/Recipes-list";

export default function Home() {
  const { data, isloding, error } = useFetch("http://localhost:5000/");
  console.log(data);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isloding && <p className="loading">isLoading ...</p>}
      {data && <Recipeslist recipes={data} />}
    </div>
  );
}
