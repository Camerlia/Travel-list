import Items from "./Items";

const initialValue = [
  { quantity: 2, description: "Passport" },
  { quantity: 4, description: "Socks" },
];
const PackingList = () => {
  return (
    <div className={`mt-4 max-w-2xl px-8 m-auto`}>
      <ul className={` flex rex-row gap-4 justify-start items-center `}>
        {initialValue.map((items) => (
          <Items
            key={items.description}
            quantity={items.quantity}
            description={items.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
