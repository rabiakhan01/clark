import React, { useState } from "react";
import navData from "../../utils/navData";
import Bars from '@iconscout/react-unicons/icons/uil-bars';
import { gray, white } from "tailwindcss/colors";
import '../../assets/fonts/font.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [bars, setBars] = useState("relative");
    const data = navData.map((items) => {
        return(
            <li key={items.id}>
            {items.name}
            </li>
        );
    })
        const handelClick = () => {
           setClick(!click);
           if(bars === "relative"){
            setBars("absolute");
           }
            
        }
    return(
       <nav className="sticky flex justify-between lg:items-center my-0 py-4 gap-2 ">
       <div className="flex lg:flex-row justify-center items-center flex-col">
       <span className="text-white font-black text-2xl uppercase lg:pb-0 pb-10">Clark</span>
       {click && 
        <div>
        <ul className="lg:hidden text-white space-y-6 text-base">
        {data}
        </ul>
        </div>
       }
       </div>
       <div className="hidden lg:flex lg:flex-auto lg:flex-row lg:justify-end lg:items-center ">
       <ul className="flex xl:space-x-10 space-x-8  text-white font-normal text-xl not-italic"> 
       {data}
       </ul>
       </div>
       <div className="lg:hidden flex" onClick={handelClick}>
       <Bars color={white}/><span className="text-white pl-2 flex">Menu</span>
       
       </div>
       </nav>
    );
}
export default Navbar;