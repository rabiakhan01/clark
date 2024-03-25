import React from "react";

const Button = ({ name, px, py, color, textColor, ringColor }) => {
    return (
        <>
            <button className={`${color} ${px}  ${py} ${textColor} ring-1 ${ringColor}  uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest`}>{name}</button>
        </>
    );
}

export default Button;