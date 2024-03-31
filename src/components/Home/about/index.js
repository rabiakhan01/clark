import React from "react";
import images from "../../../assets/images/images";
import { Button } from "../../shared";
import { aboutData } from "../../../utils/staticData";
const About = () => {
    const data = aboutData.map((items) => {

        return (
            <div className="flex gap-x-[12vw] sm:gap-x-16 font-light">
                <div className="w-12 text-nowrap text-primaryColor font-medium ">
                    <p className="text-[3vw] sm:text-base">{items.heading}</p>
                </div>
                <div className="text-grayColor text-wrap">
                    <p className="text-[3vw] sm:text-base">{items.para}</p>
                </div>
            </div>
        );
    })
    return (
        <div className="flex justify-center items-center pt-10 sm:pt-20 md:pt-28 h-full w-full gap-2" id="About">
            <div className="hidden md:flex lg:w-5/12 w-2/4">
                <img src={images.person} alt="" className="lg:w-full lg:h-full max-w-sm 2xl:max-w-lg" />
            </div>
            <div className="relative flex w-full md:w-4/5 lg:w-3/7  flex-col md:justify-start md:items-start justify-center items-center  text-primaryColor ">
                <h1 className="text-[6.5vw] sm:text-[5.6vw] md:text-4xl font-bold pb-10 lg:pb-14">About Me</h1>
                <p className="text-[8.5vw] sm:text-[6.6vw] md:text-5xl  text-semiTransparent font-extrabold absolute top-2">About</p>
                <p className="text-[3vw] sm:text-base font-light  text-grayColor pb-6 md:text-start text-center w-full">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <div>
                    {data}
                </div>
                <div className="flex gap-2 text[5vw] sm:text-xl font-medium mb-5 mt-5 text-center">
                    <p className="text-secondaryColor">120</p>
                    <p className="text-primaryColor">Project complete</p>
                </div>
                <div className=" flex md:justify-start md:items-start justify-center items-center">
                    <Button
                        name="Download cv"
                        bgColor="secondaryColor"
                        ringColor="secondaryColor"
                        textColor="blackColor"
                    />
                </div>

            </div>
        </div>
    );
}


export default About;