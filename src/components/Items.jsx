import { MdDelete } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const Items = ({ description, quantity }) => {
  return (
    <li className={`py-2 px-5 bg-orange-500 hover:bg-orange-600 flex gap-6 items-center rounded-xl `}>
      <span>
        {quantity} {description}{" "}
      </span>
      <button>
        <MdDelete className={`text-orange-900`} />
      </button>
    </li>
  );
};

export default Items;
