import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onAddItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  };

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="py-10 bg-orange-700 rounded-lg px-4 m-auto w-full max-w-xl">
      <p className="text-xl text-center mb-4">What do yo need for your trip?</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 px-2 py-4" 
      >
        <select
          className="text-orange-900 rounded-md w-full sm:w-auto" 
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item" // Added placeholder
          className="rounded-md px-1 text-orange-900 w-full sm:w-auto"  
        />
        <button className="rounded-md bg-orange-500 w-full sm:w-auto">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;