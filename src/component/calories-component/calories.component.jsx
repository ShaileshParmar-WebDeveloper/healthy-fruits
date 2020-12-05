import { listItem } from "../../data/function";

const Calories = ({ data }) => {
  const [heading, value, dataList] = data;
  return (
    <>
      {listItem([heading])}
      <div className="listItem dailyValue">
        <p>{value.quantity}</p>
      </div>
      {listItem(dataList)}
    </>
  );
};

export default Calories;
