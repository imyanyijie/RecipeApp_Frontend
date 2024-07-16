import React from "react";
import { useState, useEffect } from "react";
import { Recipe, RecipeShort } from "../model/Recipes";
import "../style/RecipeCard.css";

interface Props {
  shortRecipes: RecipeShort[];
  shortRecipe: RecipeShort;
  setCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShortRecipes: React.Dispatch<React.SetStateAction<RecipeShort[]>>;
}
export const RecipeCard: React.FC<Props> = ({
  shortRecipes,
  shortRecipe,
  setCreateOpen,
  setShortRecipes,
}) => {
  const [recipe, setRecipe] = useState<Recipe>();

  const handleOpenRecipe = (e) => {
    console.log("Opening the specifici recipe");
  };

  const handleDeleteRecipe = (e) => {
    console.log("delete the recipe" + e.target.recipeID);
  };

  return (
    <div
      className="recipe-card"
      key={shortRecipe.recipeID}
      onClick={handleOpenRecipe}
    >
      <span>
        <img src="" alt={shortRecipe.name} />
      </span>
      <span className="recipeName">Recipe Name: {shortRecipe.name}</span>
      <span className="recipePrepTime">
        Prep Time: {shortRecipe.prepDuration}
      </span>
      <span className="recipeName">Cook Time: {shortRecipe.cookDuration}</span>
      <button className="delete-recipe" onClick={handleDeleteRecipe}>
        Delete
      </button>
    </div>
  );
};
