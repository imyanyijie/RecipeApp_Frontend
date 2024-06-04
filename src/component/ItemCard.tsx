import React from "react";
import { useState, useEffect } from "react";
import { Item } from "./Items";
import "../style/ItemCard.css";

interface props {
  item: Item;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const ItemCard: React.FC<props> = ({ item, items, setItems }) => {
  console.log("render item card");
  return (
    <div className="item-card" key={item.id}>
      <span className="name">Name: {item.name}</span>
      <span className="description">Description: {item.description}</span>
      <span className="unitCost">Cost: {item.unitCost}</span>
      <span className="createTime"></span>
      <div className="button-section">
        <button className="update" onClick={handleUpdateClick}>
          Update
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

const handleUpdateClick = (e) => {
  console.log("Update button clicked");
};

const handleDeleteClick = (e) => {
  console.log("Delete button clicked");
};

export { ItemCard };
