import React from "react";
import images from "../../assets/images/images";
const Intro = () => {
    return(
        <div className="flex gap-20 mt-28 mb-28">
        <div className="text-white flex flex-col w-2/5">
        <span>hello!</span>
        <div>
        <span>I'm </span>
        <span>Clark Thompson</span>
        </div>
        <span>A Freelance Web Designer</span>
        </div>
        <div className="">
        <img src= {images.background_1} alt="" />
        </div>
        </div>
    )
}
export default Intro;