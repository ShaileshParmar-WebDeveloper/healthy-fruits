import "./nutrition.styles.css";

import { nutritionFact, caloriesList, vitamin } from "../../data/data";
import { listItem } from "../../data/function";
import Calories from "../calories-component/calories.component";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <div className="nutrition__menuList">
        <h3 className="top__heading">{nutritionFact[0]}</h3>
        {listItem([nutritionFact[1]])}
        <p className="bold fontSize">{nutritionFact[2]}</p>
        {/* --------------------------------- */}
        <Calories data={caloriesList} />
        {listItem(vitamin)}
        <p className="nutrition__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a,
          nihil et harum totam sequi odio quam, tenetur omnis voluptatibus sint
          porro placeat. Nesciunt rem ex consequatur consequuntur quos nulla vel
          id dolore nobis ipsum.
        </p>
      </div>
    </div>
  );
};

export default Nutrition;
