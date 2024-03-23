import React from "react";

const Button = ({name, px,py, color, textColor, ringColor}) => {
    return(
        <>
        <button className={`bg-${color} ${px}  ${py} text-${textColor} ring-1 ${ringColor}  uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest`}>{name}</button>
        </>
    );
}

export default Button;