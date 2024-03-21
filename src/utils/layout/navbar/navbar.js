import React, { useState } from "react";
import navData from '../../navData';
import Bars from '@iconscout/react-unicons/icons/uil-bars';
import '../../../assets/fonts/font.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    let [hover, setHover] = useState(false);

    //Handel the hamburger click event
    const handelClick = () => {
        setClick(!click);
        }
     
    // Handel the hover effect of ui items
    const handelItemClick= () => {
        setHover(!hover);
    }
    
    const data = navData.map((items) => {
        return(
            <li className={`hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-secondary hover:cursor-pointer ${hover ? `text-secondary` : `text-primary`} `} key={items.id} onClick={handelItemClick}>
            {items.name}
            </li>
        );
    })
    return(
       <nav className="sticky flex justify-between lg:items-center my-0 py-4 gap-2 z-10">
       <div className="flex lg:flex-row justify-center items-center flex-col">
       <span className="text-primary font-black text-2xl uppercase lg:pb-0 pb-10">Clark</span>
       {click && 
        <div className="bg-secondary">
        <ul className="lg:hidden text-primary space-y-6 text-base">
        {data}
        </ul>
        </div>
       }
       </div>
       <div className="hidden lg:flex lg:flex-auto lg:flex-row lg:justify-end lg:items-center ">
       <ul className="flex xl:space-x-10 space-x-8  text-primary font-normal text-xl not-italic"> 
       {data}
       </ul>
       </div>
       <div className="lg:hidden flex" onClick={handelClick}>
       <Bars className="text-grayColor"/><span className="text-grayColor pl-2 flex text-base uppercase ">Menu</span>
       
       </div>
       </nav>
    );
}
export default Navbar;