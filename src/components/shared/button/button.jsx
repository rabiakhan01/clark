import React from "react";

const Button = ({ name, bgColor, textColor, ringColor }) => {


    return (
        <React.Fragment>
            <button className={`px-[4vw] sm:px-5  py-[4vw] sm:py-3 uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest bg-${bgColor ? bgColor : 'blackColor'} text-${textColor ? textColor : 'primaryColor'} ring-1 ring-${ringColor ? ringColor : 'primaryColor'}`} >{name}</button>
        </React.Fragment>
    );
}

export default Button;