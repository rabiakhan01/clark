import React from "react";

const Button = ({ name, bgColor, textColor, ringColor }) => {


    return (
        <React.Fragment>
            <button className={`px-[3.5vw] sm:px-5  py-[3vw] sm:py-3 uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest ${bgColor ? 'bg-secondaryColor' : 'bg-backgroundColor'} ${textColor ? 'text-blackColor' : 'text-primaryColor'} ring-1 ${ringColor ? 'ring-primaryColor' : 'ring-secondaryColor'}`} >{name}</button>
        </React.Fragment>
    );
}

export default Button;