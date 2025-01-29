/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItem }) => {
  const [inputValue, setInputValue] = useState("input");

  if (items.length === 0) return <p className="text-center mt-4">Your list is empty. Add items!</p>; 

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
    <div className="mt-4 max-w-2xl px-4 sm:px-8 m-auto">
      <ul className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start items-center"> 
        {sortedItem.map((item) => ( 
          <Items
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
            quantity={item.quantity}
            description={item.description}
            id={item.id}
            packed={item.packed}
          />
        ))}
      </ul>
      <div className="py-10 flex flex-col sm:flex-row items-center justify-center gap-4"> 
        <select
          className="text-orange-900 p-2 rounded-lg w-full sm:w-auto" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by Description</option> 
          <option value="packed">Sort by Packed order</option> 
        </select>
        <button
          className="px-4 py-2 bg-white text-orange-900 rounded-3xl w-full sm:w-auto" 
          onClick={onClearItem}
        >
          Clear
        </button> 
      </div>
    </div>
  );
};

export default PackingList;