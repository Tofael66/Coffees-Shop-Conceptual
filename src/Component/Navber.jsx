import {  NavLink } from "react-router-dom";




const Navber = () => {
    return (
        <div className="navbar backdrop-blur-xl bg-white/30 container mx-auto px-6 md:px-16 z-50 fixed">
        <div className="flex-1">
       <ul className="text-2xl font-bold">
   
       <NavLink to="/">Coffee Book </NavLink>
       </ul>
          
        </div>
        <div className="flex ">
          <ul className="menu menu-horizontal px-1 gap-8 md:gap-12 md:text-xl font-semibold">
       
       <NavLink  className={({isActive}) =>  ` font-bold  ${isActive? 'text-warning' : 'hover:text-warning'}`}  to="/">Home</NavLink>


       <NavLink  className={({isActive}) =>  ` font-bold  ${isActive? 'text-warning' : 'hover:text-warning'}`}  to="/coffes">Coffees</NavLink>

       <NavLink  className={({isActive}) =>  ` font-bold  ${isActive? 'text-warning' : 'hover:text-warning'}`}  to="/dashbord">Dashbord</NavLink>
   
       
        
          </ul>
        </div>
      </div>
    );
};

export default Navber;