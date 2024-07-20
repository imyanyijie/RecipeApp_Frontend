import React from "react";
import { useState, useEffect } from "react";
import "../../style/ItemCard.css";
import { Item } from "../../model/Item";
import * as ItemService from "../../service/ItemService";
import { ItemForm } from "./ItemForm";

interface Props {
  item: Item;
  items: Item[];
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  setUpdateItem: React.Dispatch<React.SetStateAction<Item | undefined>>;
}
const ItemCard: React.FC<Props> = ({
  item,
  items,
  setItems,
  setIsOpen,
  setUpdateItem,
}) => {
  console.log("Item card with id" + item.itemID);
  return (
    <div className="item-card" key={item.itemID}>
      <span className="name">Name: {item.name}</span>
      <span className="description">Description: {item.description}</span>
      <span className="unitCost">Cost: {item.unitCost}</span>
      <span className="createTime"></span>
      <div className="button-section">
        <button
          className="update"
          onClick={() =>
            handleUpdateClick({
              item,
              items,
              setItems,
              setIsOpen,
              setUpdateItem,
            })
          }
        >
          Update
        </button>
        <button
          className="delete"
          onClick={() => handleDeleteClick({ item, setItems })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const handleUpdateClick = (props: Props) => {
  const { item, items, setItems, setIsOpen, setUpdateItem } = props;
  console.log("update clicked " + item.name + " " + item.itemID);
  if (setIsOpen != undefined) setIsOpen(true);
  setUpdateItem(item);
};

const handleDeleteClick = async ({ item, setItems }) => {
  console.log("Delete button clicked" + item.itemID);
  const deleteItem: Item = await ItemService.deleteItem(item);
  if (deleteItem !== null) {
    const items = await ItemService.getAllItem();
    setItems(items);
  } else {
    throw "item not found!";
  }
};

export { ItemCard };
