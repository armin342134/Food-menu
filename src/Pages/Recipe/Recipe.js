import React from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:5000/Recipe/" + id;
  const { data: recipe, isLoading, error } = useFetch(url);
  console.log(recipe);
  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>isLoading</h2>}
      {recipe && (
        <div className="container">
          <h1>{recipe.title}</h1>
          <ul className="ul-ing">
            {recipe.ingredients &&
              recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="p-method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
