import React from "react";

const Button = ({ name, color, textColor }) => {
    return (
        <React.Fragment>
            <button className={`px-3 sm:px-5 md:px-6 py-5 uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest ${color ? color : 'bg-secondaryColor'} ${textColor ? textColor : 'text-blackColor'}`} >{name}</button>
        </React.Fragment>
    );
}

export default Button;