import React from "react";
import images from "../../assets/images/images";
import Button from "../../components/button/button";

const About = () => {
    return(
        <div  className="flex text-primary mt-28">
        <div className="">
        <img src={images.image_about} alt="" className="w-[550px] h-[650px]"/>
        </div>
        <div className="relative flex-1 flex flex-col">
         <span className="text-6xl font-extrabold pb-20">About Me</span>
         <span className="text-9xl text-semiTransparent font-extrabold absolute -top-2 -left-6">About</span>
         <span>
         A small river named Duden flows by their place and supplies it with the necessary regelialia.
         </span>
         <div className="flex">
         <div>
         <ul>
         <li>
         <span>Name: </span> 
         </li>
         <li>
         <span>Date of birth:</span>
         </li>
         <li>
         <span>Address:</span>
         </li>
         <li>
         <span>Zip Code:</span>
         </li>
         <li>
         <span>Email:</span>
         </li>
         <li>
         <span>Phone:</span>
         </li>
         </ul>
         </div>
         <div>
         <ul>
         <li>
         <span>Thompason:</span>
         </li>
         <li>
         <span>January 01, 1987</span>
         </li>
         <li>
         <span>San Francisco CA 97987 USA</span>
         </li>
         <li>
         <span>1000</span>
         </li>
         <li>
         <span>clarkthomp@gmail.com</span>
         </li>
         <li>
         <span>+1-2234-5678-9-0</span>
         </li>
         </ul>
         </div>
         </div>
         <span>120 Project complete</span>
         <Button 
         name = "Download cv"
        px = "px-7"
        py = "py-4"
        color = "secondary"
        textColor = "black"
         />
        </div>
        </div>
    );
}


export default About;