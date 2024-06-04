import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { getAllItem } from "../service/itemService";
import { ItemCard } from "./ItemCard";
import "../style/Items.css";

export type Item = {
  id?: number;
  name: string;
  description: string;
  unitCost: number;
};

//mock data for testing
const testItems: Item[] = [
  {
    id: 1,
    name: "Apple",
    description: "apple description",
    unitCost: 2.0,
  },
  {
    id: 2,
    name: "Cherry",
    description: "Cpple description",
    unitCost: 5.0,
  },
  {
    id: 3,
    name: "tomato",
    description: "tomato description",
    unitCost: 1.4,
  },
];

const Items: React.FC = () => {
  console.log("render Items");
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    async function getItems() {
      console.log("get items");
      // const items: Item[] = await getAllItem();
      const items: Item[] = testItems;
      setItems(items);
    }
    getItems();
  });
  console.log(testItems.length);

  return (
    <div className="item-section">
      {items.map((item) => (
        <ItemCard item={item} items={items} setItems={setItems} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
