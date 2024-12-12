import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTab } from "./restaurant-tab";
import { TabLink } from "../tab-link/tab-link";
import { useNavigate } from "react-router-dom";
//import { Tab } from "../tab/tab";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return (
    <TabLink
      title={restaurant.name + "aaa"}
      to={id}
      // id={id}
      //onClick={onClick}
      // isActive={isActive}
    />
  );
};
