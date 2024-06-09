import { Link } from "react-router-dom";
import banner from "../assets/KABUKICHOR2-darken.jpg";

import alien from "../assets/alien.gif";
import logo from "../assets/keebslogowh.png";

function NotFound() {
  return (
    <>
      <div className="w-full relative ">
        <img src={banner} className="h-full" />
      

      
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
        <div>
          <img src={alien} className=" w-64 " />
        </div>

        <div className="  flex items-center justify-center">
          <img src={logo} className="  w-[480px]  " />
        </div>

        <div className="text-white flex items-center justify-center gap-20 mb-6">
          <Link to="/">
            {" "}
            <p className=" hover:underline"> HOME </p>{" "}
          </Link>
          <Link to="/">
            {" "}
            <p className=" hover:underline"> PRODUCT </p>{" "}
          </Link>
        </div>
        
      </div>

      </div> 
      </div>
    </>
  );
}

export default NotFound;
