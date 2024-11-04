
// get all coffee from local storage 

import toast from "react-hot-toast"

const getAllFavoritttes = () =>{
    const all = localStorage.getItem('favorites')
//   bojar jonno(
  // const favorites = JSON.parse(all)
    // console.log(all)
   //  console.log(favorites)
   //   bojar jonno)
   if(all){
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites 
   } else{
    console.log([])
    return []
   }
}



// add a coffee to local storage

const addFavorite = coffee => {
    // console.log(coffee)
    const favorites =  getAllFavoritttes() ;
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist){
       return toast.error('Coffee already exists!');
    }
else{
    favorites.push(coffee) 
    localStorage.setItem('favorites' , JSON.stringify(favorites))
    toast.success('Successfully Added!');
}
}






// remove a coffee from local storage





export {addFavorite ,  getAllFavoritttes}