import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage=()=>{
    return(
        <div>
        <h1>Restaurants 10</h1>
        { restaurants.map((restaurant) =>(
            <Restaurant restaurant = {restaurant} key={restaurant.id}></Restaurant>
         ) ) }

        </div>
    );
};