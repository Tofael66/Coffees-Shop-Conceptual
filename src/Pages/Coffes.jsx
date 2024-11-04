import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import { useState } from "react";



const Coffes = () => {

const data = useLoaderData() ;
const [coffees , setCoffees ] =useState(data) ;

const handleShort =(sortBy)=>{

if(sortBy =='popularity'){
    // sortby popular
    const sorted = [...data].sort((a, b) =>b.popularity - a.popularity)
    setCoffees(sorted)
} else if(sortBy == 'rating'){
    // sortby rating
    const sorted = [...data].sort((a, b) =>a.rating - b.rating)
    setCoffees(sorted)
}
  
  

}

    return (
<>
<div className="flex justify-between items-center my-6">
    <div className="">
        <h1 className="md:text-3xl font-thin ">Sort Coffee's by Popularity & Rating</h1></div>
    <div className="md:flex space-x-4 items-center  ">
<button onClick={() => handleShort('popularity')} className="btn btn-warning">Sort By Popularity(DSN)</button>
<button onClick={() => handleShort('rating')} className="btn btn-warning">Sort By Rating(ASC)</button>
    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ">
        {
            coffees.map(coffee =>(<Card key={coffee.id} coffee={coffee}></Card>))
        } 
    </div>

</>

   
    );
};

export default Coffes;