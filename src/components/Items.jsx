import { MdDelete } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const Items = ({ description, quantity, onDeleteItem, id, onToggleItem , packed}) => {
  function deleteItem(){
    onDeleteItem(id)
  }
  return (
    <li className={`py-2 my-4 px-3 bg-orange-500 hover:bg-orange-600 flex gap-3 items-center rounded-xl`}>
    <input type={`checkbox`} checked={packed} onChange={()=>onToggleItem(id)}/>
      <span className={`${packed ? "line-through" : ""}`}>
        {quantity} {description}{" "}
      </span>
      <button onClick={deleteItem}>
        <MdDelete className={`text-orange-900`} />
      </button>
    </li>
  );
};

export default Items;
