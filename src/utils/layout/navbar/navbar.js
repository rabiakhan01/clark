import React, { useState } from "react";
import navData from '../../navData';
import Bars from '@iconscout/react-unicons/icons/uil-bars';
import Cross from '@iconscout/react-unicons/icons/uil-times';
// import { Link } from "react-scroll";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(null);

    // handle Smooth Scroll
    const handleScroll = (index, item) => {
        let element = document.getElementById(item.itemID);
        element.scrollIntoView({ behavior: 'smooth' });

        setColor(index);
        setClick(!click)

    }
    const handleStart = () => {
        let scrollElement = document.getElementById("Home");
        scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
    const data = navData.map((item, index) => {

        return (
            <li key={item.id} className={`hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-secondaryColor hover:cursor-pointer ${color === index ? 'text-secondaryColor' : 'text-primaryColor'} `} onClick={() => handleScroll(index, item)}>
                {item.name}
            </li>

        );
    })
    return (
        <nav className="!-mt-2 sticky top-0 w-full h-24 lg:py-0 bg-navBackgroundColor flex justify-between items-center my-0 z-20 2xl:p-0 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto">
            <div className="lg:flex lg:flex-row justify-center items-center flex-col ">
                <span className="text-primaryColor font-black text-xl 2xl:text-2xl uppercase cursor-pointer pl-6 sm:pl-10 md:pl-10 lg:pl-16 xl:pl-20" onClick={handleStart}>Clark</span>
                {click &&
                    <div className="lg:hidden absolute bg-backgroundColor w-full">
                        <ul className=" text-primaryColor font-light text-base flex flex-col gap-4 lg:pt-0 pt-10 cursor-pointer pl-6 sm:pl-10 md:pl-10 lg:pl-16 xl:pl-20">
                            {data}
                        </ul>
                    </div>
                }
            </div>
            <div className="hidden lg:flex lg:flex-auto lg:flex-row lg:justify-end lg:items-center pr-6 sm:pr-10 md:pr-10 lg:pr-16 xl:pr-20" >
                <ul className="flex xl:space-x-10 space-x-8  text-primaryColor font-light text-base not-italic cursor-pointer" >
                    {data}
                </ul>
            </div>
            <div className="lg:hidden flex text-grayColor"
                onClick={() => {
                    setClick(!click);
                }} >
                {
                    click ? <Cross color="white" /> : <Bars color="white" />
                }
            </div>
        </nav>
    );
}
export default Navbar;