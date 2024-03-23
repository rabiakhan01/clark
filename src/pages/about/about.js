import React from "react";
import images from "../../assets/images/images";
import Button from "../../components/button/button";
import aboutData from "../../utils/aboutData";
const About = () => {
    const data = aboutData.map((items) => {

        return (
            <div className="flex  gap-x-20 md:text-xl text-base">
                <div className="w-12 text-nowrap text-primary font-bold ">
                    <p>{items.heading}</p>
                </div>
                <div className="text-grayColor">
                    <p>{items.para}</p>
                </div>
            </div>
        );
    })
    return (
        <div className="flex mt-20 h-full w-full">
            <div className="hidden md:flex relative  w-3/6 lg:-left-12 md:-left-16">
                <img src={images.image_about} alt="" className="lg:w-full lg:h-full max-w-lg" />
            </div>
            <div className="relative flex w-full  flex-col md:justify-start md:items-start justify-center items-center lg:w-3/6 md:w-2/5 text-primary lg:ml-0 mt-6 lg:left-0 md:left-12">
                <span className="md:text-6xl text-5xl font-extrabold pb-16 ">About Me</span>
                <span className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute md:-left-6 -top-2 ">About</span>
                <span className="text-base sm:text-xl  text-grayColor pb-10 md:text-start text-center">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </span>
                <div>
                    {data}
                </div>
                <div className="text-2xl mb-10 mt-10">
                    <span className="text-secondary">120 </span>
                    <span className="text-primary">Project complete</span>
                </div>
                <div className="text-buttonText flex md:justify-start md:items-start justify-center items-center">
                    <Button
                        name="Download cv"
                        px="px-7"
                        py="py-4"
                        color="secondary"
                    />
                </div>

            </div>
        </div>
    );
}


export default About;