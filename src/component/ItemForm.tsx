import React from "react";
import "../style/ItemForm.css";
import { Item } from "../model/Item";
import * as ItemService from "../service/ItemService";

interface Prop {
  item?: Item;
  items: Item[];
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const ItemForm: React.FC<Prop> = ({ item, items, setIsOpen, setItems }) => {
  console.log("the item description " + item?.description);
  //handle create event
  const handleCreateClick = async (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target & Item;
    const name: string = target.name.value;
    const description: string = target.description.value;
    const price: number = target.price.value;
    //update logic
    if (item) {
      item = { ...item, name: name, description: description, unitCost: price };
      console.log(
        `the updated item is ${item.itemID}, ${item.name}, ${item.description}, ${item.unitCost}`
      );
      const updatedItem = ItemService.updateItem(item);
      //if a item is created successfully, refetch all the items

      if (updatedItem !== null) {
        const updatedItemInd = items.findIndex(
          (obj) => (obj.itemID = item?.itemID)
        );
        items[updatedItemInd] = item;
        console.log("update re-fetch new data");
        // const updateList = await ItemService.getAllItem();
        const myJSON = JSON.stringify(items);
        console.log("full list after update is " + myJSON);
        setItems(items);
      }
    } else {
      const itemCreated: Item = {
        name: name,
        description: description,
        unitCost: price,
      };

      console.log(
        "item to be created is: " +
          itemCreated.name +
          ", " +
          itemCreated.description +
          ", " +
          itemCreated.unitCost
      );
      const createdItem: Item = await ItemService.createItem(itemCreated);
      //if a item is created successfully, refetch all the items
      if (createdItem !== null) {
        items = await ItemService.getAllItem();
      }
      setItems(items);
    }

    //close the form window on sucess
    if (setIsOpen != undefined) setIsOpen(false);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log("cancel click");
    if (setIsOpen != undefined) setIsOpen(false);
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
          defaultValue={item?.name || ""}
        />
        <span>Should be 2-16 character and no special charater!</span>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          defaultValue={item?.description || ""}
        />
      </div>
      <div>
        <label htmlFor="price">Unit Cost:</label>
        <input
          type="text"
          name="price"
          pattern="[0-9]*[.,]?[0-9]*"
          defaultValue={item?.unitCost || ""}
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
