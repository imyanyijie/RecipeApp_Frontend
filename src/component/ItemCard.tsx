import React from "react";
import { useState, useEffect } from "react";
import "../style/ItemCard.css";
import { Item } from "../model/Item";
import * as ItemService from "../service/ItemService";
import { ItemForm } from "./ItemForm";

interface Props {
  item: Item;
  items: Item[];
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const ItemCard: React.FC<Props> = ({ item, items, setItems, setIsOpen }) => {
  return (
    <div className="item-card" key={item.id}>
      <span className="name">Name: {item.name}</span>
      <span className="description">Description: {item.description}</span>
      <span className="unitCost">Cost: {item.unitCost}</span>
      <span className="createTime"></span>
      <div className="button-section">
        <button
          className="update"
          onClick={() =>
            handleUpdateClick({ item, items, setItems, setIsOpen })
          }
        >
          Update
        </button>
        <button
          className="delete"
          onClick={() => handleDeleteClick({ item, items, setItems })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const handleUpdateClick = (props: Props) => {
  console.log("Update button clicked");
  const { item, items, setItems, setIsOpen } = props;
  if (setIsOpen !== undefined) {
    ItemForm({ item, setIsOpen, setItems });
    setIsOpen(true);
  }
};

const handleDeleteClick = async (props: Props) => {
  const { item, items, setItems } = props;
  console.log("Delete button clicked" + item.id);
  const deleteItems: Item[] = await ItemService.deleteItem(item);
  setItems(deleteItems);
};

export { ItemCard };
