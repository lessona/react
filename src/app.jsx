import { Layout } from "./compons/layout/layout"
import { RestaurantsPage } from "./compons/restaurants-page/restaurants-page"
export const App =()=>{
    return (
        <Layout sidebar={<div>sidebar</div>}>
            <RestaurantsPage/>
        </Layout>

    ) 
}