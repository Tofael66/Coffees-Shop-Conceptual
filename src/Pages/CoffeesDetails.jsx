import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import newtration from "../assets/nutrition.png"
import { addFavorite, getAllFavoritttes,  } from "../Uttlityes/Utilities";



const CoffeesDetails = () => {
const allCofeeDetails = useLoaderData() ;
const {id} = useParams() ;
 
const [coffee , setCoffee] = useState([]) ;

 //btn disable
 const [isFavorites , setisFavorites] = useState(false) ;

useEffect(  () =>{
    const singleData = allCofeeDetails.find(coffee => coffee.id === parseInt(id))
    setCoffee(singleData)

  //  btn disable 
  const favorite = getAllFavoritttes()
}, [allCofeeDetails , id]) ;


const {name ,image , ingredient, nutrition_info, description, making_process , rating ,popularity } = coffee ; 

// handle favirate Coffee bnt click

const handleAddFavarite =(coffee) =>{
    
    addFavorite(coffee)

}

    return (

        <div className="my-12">
            <h1 className="text-2xl md:text-4xl font-thin my-6">{description}</h1>

       <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl "  >
       <img  className="w-full h-full" src={image} alt="" />
       </div>

       <div className="btn mt-3 btn-warning" > 
        
        <button disabled={isFavorites} onClick={() => handleAddFavarite(coffee)}>Add Febarite</button>

       </div>

       <div className="flex justify-center items-center ">
        <div>
<h1 className="font-thin text-2xl md:text-3xl my-6">{name}</h1>
<p className="text-base">Popularity: {popularity}</p>
<p className="text-base"> {rating}</p>
        </div>
        <div className="">
            <img src={newtration} alt="" />
        </div>
       </div>
       
        </div>
    );
};

export default CoffeesDetails;