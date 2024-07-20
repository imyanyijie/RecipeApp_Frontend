import React from "react";
import { useState, useEffect, useRef } from "react";
import { RecipeShort } from "../../model/Recipes";
import { FaPlus } from "react-icons/fa6";
import { RecipeCard } from "./RecipeCard";
import "../../style/Recipes.css";
import { getAllRecipesShort, abortRequest } from "../../service/RecipeService";
import { useNavigate } from "react-router-dom";

const Recipes: React.FC = () => {
  const [shortRecipes, setShortRecipes] = useState<RecipeShort[]>([]);
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const navegate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    async function getRecipesShort() {
      console.log("Fetch recipes");
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
    navegate(`/recipes/create`);
  };
  return (
    <>
      <div className="recipe-section">
        <div className="create-card" onClick={handleRecipeCreate}>
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
