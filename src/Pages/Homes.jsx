import { Outlet, useLoaderData } from "react-router-dom";
import Bannder from "../Component/Bannder";
import Heading from "../Component/Heading";
import Catagories from "../Component/Catagories";




const Homes = () => {
 const categories = useLoaderData() ;
 // console.log(categories)
    return (
        <div>
            {/* banner */}
            <Bannder></Bannder>
            {/* Heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>
            {/* category section tabs */}
      <Catagories categories={categories}></Catagories>
            {/* Dynamic nasted Components */}
          <Outlet></Outlet>
        </div>
    );
};

export default Homes;