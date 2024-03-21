import React from "react";
import images from "../../assets/images/images";
import Button from "../../components/button/button";
const Intro = () => {
    return(
        <div className="flex gap-20 mt-28 mb-28">
        <div className="flex flex-col">
        <span className="text-orange uppercase text-sm font-normal tracking-widest pb-5">hello!</span>
        <div className="text-7xl font-extrabold">
        <span className="text-white ">I'm </span>
        <span className="text-orange ">Clark Thompson</span>
        </div>
        <span className="text-white text-3xl font-medium pt-9 pb-10">A Freelance Web Designer</span>
        <div className="flex flex-row gap-1">
        <Button 
        name = "hire me"
        px = "px-7"
        py = "py-4"
        color = "orange"
        textColor = "black"
        
        />
        <Button 
        name = "my works"
        px = "px-7"
        py = "py-4"
        color = "transparent"
        textColor = "white"
        ringColor = "ring-ringColor"
        />
        </div>
        </div>
        <div className="">
        <img src= {images.background_1} alt="" />
        </div>
        </div>
    )
}
export default Intro;