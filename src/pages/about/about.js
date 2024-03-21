import React from "react";
import images from "../../assets/images/images";

const About = () => {
    return(
        <div  className="flex">
        <div className="w-2/5">
        <img src={images.image_about} alt=""/>
        </div>
        <div className="flex-1">
         <span>about me</span>
         <span>
         A small river named Duden flows by their place and supplies it with the necessary regelialia.
         </span>

        </div>
        </div>
    );
}


export default About;