import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { abortRequest, getAllItem } from "../service/ItemService";
import { ItemCard } from "./ItemCard";
import "../style/Items.css";
import { FaPlus } from "react-icons/fa6";
import { Item } from "../model/Item.ts";
import { ItemForm } from "./ItemForm.tsx";

const Items: React.FC = () => {
  console.log("render Items");
  const [items, setItems] = useState<Item[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [updateItem, setUpdateItem] = useState<Item>();

  useEffect(() => {
    async function getItems() {
      console.log("get items");
      const items: Item[] = await getAllItem();
      setItems(items);
    }
    getItems();
    return () => {
      console.log("run clean up");
      abortRequest();
    };
  }, [items]);
  const handleCreateClick = () => {
    setIsOpen(true);
  };
  let num = 0;
  return (
    <>
      <div className="item-section">
        <div className="create-card" onClick={handleCreateClick}>
          <FaPlus />
        </div>
        {items.map((item) => (
          <ItemCard
            item={item}
            items={items}
            setItems={setItems}
            setIsOpen={setIsOpen}
            setUpdateItem={setUpdateItem}
            key={item.id}
          />
        ))}
      </div>
      {isOpen && (
        <ItemForm item={updateItem} setIsOpen={setIsOpen} setItems={setItems} />
      )}
    </>
  );
};

export default Items;
