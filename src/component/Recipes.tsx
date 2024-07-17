import React from "react";
import { useState, useEffect, useRef } from "react";
import { RecipeShort } from "../model/Recipes";
import { FaPlus } from "react-icons/fa6";
import { RecipeCard } from "./RecipeCard";
import "../style/Recipes.css";
import { getAllRecipesShort, abortRequest } from "../service/RecipeService";

const Recipes: React.FC = () => {
  const [shortRecipes, setShortRecipes] = useState<RecipeShort[]>([]);
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  useEffect(() => {
    let isMounted = true;
    async function getRecipesShort() {
      const shortRecipes: RecipeShort[] = await getAllRecipesShort();
      setShortRecipes(shortRecipes);
    }
    getRecipesShort();

    return () => {
      isMounted = false;
      isMounted && abortRequest();
    };
  }, []);
  const handleRecipeCreate = () => {
    setCreateOpen(true);
  };
  return (
    <>
      <div className="recipe-section">
        <div className="create-card">
          <FaPlus />
        </div>
        {shortRecipes.map((shortRecipe, index) => (
          <RecipeCard
            shortRecipes={shortRecipes}
            shortRecipe={shortRecipe}
            setCreateOpen={setCreateOpen}
            setShortRecipes={setShortRecipes}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
