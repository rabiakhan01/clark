import React from "react";
import images from "../../assets/images/images";
import Button from "../../components/button/button";
import aboutData from "../../utils/aboutData";
const About = () => {
    const data = aboutData.map((items) => {

        return (
            <div className="flex gap-x-16 sm:text-base font-light text-sm">
                <div className="w-12 text-nowrap text-primaryColor font-bold ">
                    <p>{items.heading}</p>
                </div>
                <div className="text-grayColor text-wrap">
                    <p>{items.para}</p>
                </div>
            </div>
        );
    })
    return (
        <div className="flex mt-40 md:mt-28 h-full w-full" id="About">
            <div className="hidden md:flex lg:w-5/12 w-2/4 ">
                <img src={images.person} alt="" className="lg:w-full lg:h-full max-w-sm 2xl:max-w-lg" />
            </div>
            <div className="relative flex w-full md:w-2/5 lg:w-3/6 flex-col md:justify-start md:items-start justify-center items-center  text-primaryColor 2xl:left-40">
                <span className="md:text-5xl text-4xl font-extrabold pb-16 ">About Me</span>
                <span className="md:text-7xl text-6xl text-semiTransparent font-extrabold absolute md:-left-6 top-2">About</span>
                <span className="text-sm sm:text-base font-light  text-grayColor pb-10 md:text-start text-center sm:w-8/12 md:w-full">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </span>
                <div>
                    {data}
                </div>
                <div className="text-xl font-medium mb-10 mt-10">
                    <span className="text-secondaryColor">120 </span>
                    <span className="text-primaryColor">Project complete</span>
                </div>
                <div className=" flex md:justify-start md:items-start justify-center items-center">
                    <Button
                        name="Download cv"
                        px="px-7"
                        py="py-4"
                        color="bg-secondaryColor"
                        ringColor="ring-secondaryColor"
                        textColor="text-blackColor"
                    />
                </div>

            </div>
        </div>
    );
}


export default About;