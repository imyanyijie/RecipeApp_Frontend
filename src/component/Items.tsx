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
  useEffect(() => {
    async function getItems() {
      console.log("get items");
      // const items: Item[] = await getAllItem();
      const items: Item[] = await getAllItem();
      setItems(items);
    }
    getItems();
    return () => {
      console.log("run clean up");
      abortRequest();
    };
  }, [items]);
  console.log(items.length);

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
            key={item.id}
          />
        ))}
      </div>
      {isOpen && <ItemForm setIsOpen={setIsOpen} setItems={setItems} />}
    </>
  );
};

export default Items;
