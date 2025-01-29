import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevVal) => [...prevVal, { ...item, packed: false }]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this"
    );
    if (confirmDelete) setItems([]);
  }
  return (
    <div className="bg-amber-600 min-h-screen p-4 sm:p-16 text-base text-white text-center flex flex-col justify-center items-center">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
