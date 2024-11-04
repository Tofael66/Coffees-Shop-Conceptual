import { NavLink, useParams,  } from "react-router-dom";



const Catagories = ({categories}) => {
    // console.log(categories)
const obj =useParams() ;
 // console.log(obj)
    return (

        <div role="tablist" className="tabs tabs-lifted">

        {categories.map (category => (<NavLink key={category.category} to={`/category/${category.category}`} role="tab"
         className={({isActive}) => `tab md:text-xl lg:text-2xl font-thin ${isActive? 'tab-active' : ''}`}> 
         {category.category}</NavLink>))}
        
   
      </div>
    );
};

export default Catagories;