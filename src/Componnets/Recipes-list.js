import React from "react";
import "./Recipes-list.css";
import { Link } from "react-router-dom";

export default function Recipeslist({ recipes }) {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => (
        <div className="card">
          <h1>{recipe.title}</h1>
          <h4>{recipe.cookingtime} آماده میشود</h4>
          <div className="method">
            {typeof recipe.method === "string"
              ? recipe.method.substring(0, 100)
              : ""}
            ...
          </div>
          <Link to={`/Recipe/${recipe._id}`}>بیشتر</Link>
        </div>
      ))}
    </div>
  );
}
