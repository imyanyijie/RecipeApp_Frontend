import React from "react";
import { useState, useEffect, useRef } from "react";
import { Recipe, RecipeShort } from "../model/Recipes";
import { RecipeCard } from "./RecipeCard";
import { getRecipe, abortRequest } from "../service/RecipeService";
import { Params, useParams } from "react-router-dom";

export const RecipeDetail: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const param: Readonly<Params<string>> = useParams();
  useEffect(() => {
    let isMounted = true;
    async function getRecipeDetail() {
      if (param.recipeID) {
        const recipe: Recipe = await getRecipe(param.recipeID);
        setRecipe(recipe);
      }
    }
    getRecipeDetail();
    return () => {
      isMounted = false;
      isMounted && abortRequest();
    };
  }, []);

  return (
    <>
      <h1>{recipe?.name}</h1>
      <h2>Prep Time: {recipe?.prepDuration}</h2>
      <h2>Cooking Time: {recipe?.cookDuration}</h2>
      <p>Description: {recipe?.description}</p>
      <br />
      <h2>List of Ingrediants:</h2>
      {recipe?.ingrediant.map((ingred) => (
        <li>
          {ingred.item.name}: {ingred.itemAmount + "" + ingred.unit}
        </li>
      ))}
      <p></p>
      <p>Instructions: {recipe?.instruction}</p>
      <button>Edit</button>
    </>
  );
};
