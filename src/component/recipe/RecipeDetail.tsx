import React from "react";
import { useState, useEffect } from "react";
import { Recipe } from "../../model/Recipes";
import { Params, useParams } from "react-router-dom";
import Collapsible from "../util/Collapsible";
import "../../style/RecipeDetail.css";
import * as RecipeService from "../../service/RecipeService";

export const RecipeDetail: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const param: Readonly<Params<string>> = useParams();
  useEffect(() => {
    let isMounted = true;
    async function getRecipeDetail() {
      if (param.recipeID) {
        const recipe: Recipe = await RecipeService.getRecipe(param.recipeID);
        setRecipe(recipe);
      }
    }
    getRecipeDetail();
    return () => {
      isMounted = false;
      isMounted && RecipeService.abortRequest();
    };
  }, []);

  const handleEditClick = (e) => {
    console.log("Edit button is clicked");
  };
  const handleDeleteClick = (e) => {
    console.log("delete the recipe" + e.target.recipeID);
    if (recipe) RecipeService.deleteRecipe(recipe);
  };

  return (
    <div className="recipe-detail">
      <div className="title-section">
        <h1>{recipe?.name}</h1>
        <h2>Preperation Time: {recipe?.prepDuration} minutes</h2>
        <h2>Cooking Time: {recipe?.cookDuration} minutes</h2>
      </div>
      <Collapsible label="Description">
        <p> {recipe?.description}</p>
      </Collapsible>
      <Collapsible label="ingredients">
        {recipe?.ingredient.map((ingred) => (
          <li>
            {ingred.item.name}: {ingred.itemAmount + "" + ingred.unit}
          </li>
        ))}
      </Collapsible>
      <Collapsible label="Instruction">
        <p>{recipe?.instruction}</p>
      </Collapsible>
      <button className="eddit_button" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete_button" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};
