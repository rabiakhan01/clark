import React from "react";

const Button = ({ name, px, py, sm_px, sm_py, md_bg, color, textColor, ringColor, sm_textColor }) => {
    return (
        <>
            <button className={`${color} ${px}  ${py} ${sm_px} ${sm_py} ${md_bg} ${textColor} ${sm_textColor}  lg:ring-1  ${ringColor}  uppercase rounded-full text-xs text-nowrap hover:cursor-pointer font-semibold tracking-widest`}>{name}</button>
        </>
    );
}

export default Button;