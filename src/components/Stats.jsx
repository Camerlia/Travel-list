/* eslint-disable react/prop-types */

const Stats = ({ items }) => {
  const numLength = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numLength) * 100);
  return (
    <div className={`py-4`}>
      <em>
        {percentage === 100
          ? "Congrats you have completed your tasks"
          : `you have ${
              numPacked.length === 0 ? "0" : numPacked
            } items on your list and already packed ${numLength}`}
      </em>
    </div>
  );
};

export default Stats;
