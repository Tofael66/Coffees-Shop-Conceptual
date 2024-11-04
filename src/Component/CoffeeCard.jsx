import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";




const CoffeeCard = () => {
const navigate = useNavigate() 

   const [coffees , setCoffees] = useState([]) ;
    const data = useLoaderData() 
const {category} = useParams() 


 

 //console.log(coffees)

useEffect(() =>  {
if(category){
    const filteredByCategories = [...data].filter(coffee => coffee.category===category

    )
    setCoffees(filteredByCategories)
}
else{
    setCoffees(data.slice(0, 6))
}
// console.log(filteredByCategories)
},[category , data])

//console.log(coffeeCard)
//console.log(category) ;
    return (
   <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ">
            {
                coffees.map(coffee =>(<Card key={coffee.id} coffee={coffee}></Card>))
            } 
        </div>
<button className="btn bg-yellow-400" onClick={() => navigate('/coffes')}>View All</button>
{/* jodi ak page ba oi page dekate achas */}
{/* <button className="btn bg-yellow-400" onClick={() => setCoffees(data)}>View All</button> */}
   
   </>
    );
};

export default CoffeeCard;