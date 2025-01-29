/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItem }) => {
  const [inputValue, setInputValue] = useState("input");
  if (items.length === 0) return;
  let sortedItem;
  if (inputValue === "input") sortedItem = items;
  if (inputValue === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (inputValue === "packed")
    sortedItem = items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  return (
    <div className={`mt-4 max-w-2xl px-8 m-auto`}>
      <ul className={` flex rex-row gap-4 justify-start items-center `}>
        {sortedItem.map((items) => (
          <Items
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={items.id}
            quantity={items.quantity}
            description={items.description}
            id={items.id}
            packed={items.packed}
          />
        ))}
      </ul>
      <div className={`py-10`}>
        <select
          className={`text-orange-900 p-2 rounded-lg`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        >
          <option value={`input`}>Sort by input order</option>
          <option value={`description`}>Sort by input Description</option>
          <option value={`packed`}>Sort by input Packed order</option>
        </select>
      </div>
      <button className={`px-4 py-2 bg-white text-orange-900 rounded-3xl`} onClick={onClearItem}>Clear Item</button>
    </div>
  );
};

export default PackingList;
