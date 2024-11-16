 import { restaurants } from "./mock";
import { Reviews } from "./compons/reviews/reviews";
 import { Menu } from "./compons/menu/menu";
//import { RestaurantsPage } from "./compons/restaurants-page/restaurants-page"
export const App =({title})=>{
    return (  <div>
    <h1>Restaurants {title}</h1>
{
 restaurants.map(({name, id, menu, reviews}) =>(
  <div key={id}>
      <h2>{name}</h2>
      <Menu menu={menu}/>
     
      <Reviews reviews={reviews}/>
      
    
      </div>
)

)
}

    </div>
    )
    //  <RestaurantsPage></RestaurantsPage>
     //()   
//         <div>
//         <h1>Restaurants {title}</h1>
// {
//      restaurants.map(({name, id, menu, reviews}) =>(
   
    //   <div key={id}>
    //       <h2>{name}</h2>
    //       <Menu menu={menu}/>
 
    //       <Reviews reviews={reviews}/>
    //       </div>
    //)
    
   // )
   // }

      //  </div>
    //)
}