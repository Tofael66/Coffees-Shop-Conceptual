import { createBrowserRouter } from "react-router-dom";



import MainLayouts from "../Layouts/MainLayouts";
import Homes from "../Pages/Homes";
import Coffes from "../Pages/Coffes";
import DashBord from "../Pages/DashBord";
import CoffeeCard from "../Component/CoffeeCard";
import CoffeesDetails from "../Pages/CoffeesDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
      
        {
            path:"/" ,
            element:<Homes></Homes> ,
            loader:  () => fetch('../categories.json') ,
            children:[
                {
                    path:'/' ,
                    element:<CoffeeCard></CoffeeCard>,
                    loader:  () => fetch('../coffees.json') ,
                },
                {
                    path:'/category/:category' ,
                    element:<CoffeeCard></CoffeeCard>,
                    loader:  () => fetch('../coffees.json') ,
                }
            ] 
            
        } ,

        {
            path:"/coffes" ,
            element:<Coffes></Coffes> ,
            loader:  () => fetch('../coffees.json') ,
        } ,
        {
            path:"/dashbord" ,
            element:<DashBord></DashBord>
        } ,
        {
            path:"/coffee/:id" ,
            element:<CoffeesDetails></CoffeesDetails> ,
            loader:  () => fetch('../coffees.json') ,
        } 


      ]

      
    },
  ]);

  export default router 