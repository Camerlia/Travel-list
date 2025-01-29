import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({onAddItems}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    if (!description || !quantity) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);
    onAddItems(newItems)
    setDescription("");
    setQuantity(1);
    
  };
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={`py-10 bg-orange-700 rounded-lg px-4 max-w-xl m-auto`}>
      <p className={`text-xl`}>What do yo need for your trip?</p>
      <form
        onSubmit={handleSubmit}
        className={`grid grid-col grid-cols-3 items-center gap-2 px-2 py-4`}
      >
        <select
          className={`text-orange-900 rounded-md`}
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
          placeholder=""
          className={`rounded-md px-1 text-orange-900`}
        />
        <button className={`px-4 max-w-20 py-[1px] rounded-md bg-orange-500`}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
