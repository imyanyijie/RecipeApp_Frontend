import React, { useEffect, useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "../../style/RecipeForm.css";
import { Item } from "../../model/Item";
import { abortRequest, getAllItem } from "../../service/ItemService";
import { IngredientForm } from "./IngredientForm";
export const RecipeForm: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    async function getItems() {
      console.log("get items");
      const items: Item[] = await getAllItem();
      setItems(items);
    }
    getItems();

    return () => {
      isMounted = false;
      isMounted && abortRequest();
    };
  }, []);
  const handleAddClick = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {};
  function handleCancelClick(): void {
    navigate("/recipes");
  }

  return (
    <>
      <Form className="create" onSubmit={handleSubmit}>
        <h1>Create New Recipe</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" pattern="^[A-Za-z0-9]{2,16}$" />
        <span>Should be 2-16 character and no special charater!</span>
        <label htmlFor="prepTime">Preperation Time: </label>
        <input type="text" name="prepDuration" pattern="[0-9]*[.,]?[0-9]*" />
        <span>Prep Time should be numbers</span>
        <label htmlFor="cookTime">Cooking Time: </label>
        <input type="text" name="cookDuration" pattern="[0-9]*[.,]?[0-9]*" />
        <span>Cook Time should be numbers</span>
        <label htmlFor="ingredients">ingredients</label>
        <button onClick={handleAddClick}>Add ingredients</button>
        <label htmlFor="instruction">Instruction: </label>
        <textarea name="instruction" id="instruction"></textarea>
        <div className="form-button">
          <button type="submit">Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </Form>
      {isOpen && <IngredientForm />}
    </>
  );
};
