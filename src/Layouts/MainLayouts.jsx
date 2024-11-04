import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navber from "../Component/Navber";
import  { Toaster } from 'react-hot-toast';




const MainLayouts = () => {
    return (
        <div>
             <Toaster />
            {/* navber */}
  <div className="h-16">
  <Navber></Navber>
  </div>

     {/* daynamic section */}
 <div className="min-h-[calc(100vh-252px)] py-12 container mx-auto px-6 md:px-16 ">
    <Outlet></Outlet>
 </div>

     {/* footer */}
     <Footer></Footer>
            
        </div>
    );
};

export default MainLayouts;