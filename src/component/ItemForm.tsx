import React from "react";
import "../style/ItemForm.css";
import { Item } from "../model/Item";
import { createItem } from "../service/ItemService";

interface Prop {
  item?: Item;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const ItemForm: React.FC<Prop> = ({ item, setIsOpen, setItems }) => {
  console.log("the item description " + item?.description);
  //handle create event
  const handleCreateClick = async (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target & Item;
    const name: string = target.name.value;
    const description: string = target.description.value;
    const price: number = target.price.value;
    const item: Item = {
      name: name,
      description: description,
      unitCost: price,
    };
    const newItems: Item[] = await createItem(item);
    setItems(newItems);

    //close the form window on sucess
    setIsOpen(false);
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log("cancel click");
    setIsOpen(false);
  };
  return (
    <form onSubmit={handleCreateClick} className="creat-form">
      <div>
        <h2>Create Item</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          pattern="^[A-Za-z0-9]{2,16}$"
          value={item?.name || ""}
        />
        <span>Should be 2-16 character and no special charater!</span>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={item?.description || ""} />
      </div>
      <div>
        <label htmlFor="price">Unit Cost:</label>
        <input
          type="text"
          name="price"
          pattern="[0-9]*[.,]?[0-9]*"
          value={item?.unitCost || ""}
        />
        <span>Price should only be numbers !</span>
      </div>
      <div className="form-button">
        <button type="submit">Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  );
};

export { ItemForm };
