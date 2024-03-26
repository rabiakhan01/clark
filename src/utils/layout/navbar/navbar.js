import React, { useState } from "react";
import navData from '../../navData';
import Bars from '@iconscout/react-unicons/icons/uil-bars';
const Navbar = () => {
    const [click, setClick] = useState(false);
    let [hover, setHover] = useState(false);

    //Handel the hamburger click event
    const handelClick = () => {
        setClick(!click);
    }

    // Handel the hover effect of ui items
    const handelItemClick = () => {
        setHover(!hover);
    }

    const data = navData.map((items) => {
        return (
            <li className={`hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-secondaryColor hover:cursor-pointer ${hover ? `text-secondaryColor` : `text-primary`} `} key={items.id} onClick={handelItemClick}>
                {items.name}
            </li>
        );
    })
    return (
        <nav className="sticky top-0 w-full lg:h-20 lg:py-0 py-6  bg-backgroundColor flex justify-between lg:items-center my-0 z-20 px-6 md:px-10 lg:px-16 xl:px-20 2xl:p-0 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto">
            <div className="lg:flex lg:flex-row justify-center items-center flex-col">
                <span className="text-primaryColor font-black text-xl 2xl:text-2xl uppercase">Clark</span>
                {click &&
                    <div className="lg:hidden">
                        <ul className=" text-primaryColor font-light text-base flex flex-col gap-4 lg:mt-0 mt-10">
                            {data}
                        </ul>
                    </div>
                }
            </div>
            <div className="hidden lg:flex lg:flex-auto lg:flex-row lg:justify-end lg:items-center ">
                <ul className="flex xl:space-x-10 space-x-8  text-primaryColor font-light text-base not-italic">
                    {data}
                </ul>
            </div>
            <div className="lg:hidden flex" onClick={handelClick}>
                <Bars className="text-grayColor" /><span className="text-grayColor pl-2 flex font-light text-base uppercase ">Menu</span>

            </div>
        </nav>
    );
}
export default Navbar;