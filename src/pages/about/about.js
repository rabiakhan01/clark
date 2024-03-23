import React from "react";
import images from "../../assets/images/images";
import Button from "../../components/button/button";

const About = () => {
    return (
        <div className="flex mt-28 h-full w-full">
            <div className="hidden md:flex relative  w-3/6 lg:-left-12 md:-left-16">
                <img src={images.image_about} alt="" className="lg:w-full lg:h-full max-w-lg" />
            </div>
            <div className="relative flex w-full  flex-col md:justify-start md:items-start justify-center items-center lg:w-3/6 md:w-2/5 text-primary lg:ml-0 mt-6 lg:left-0 md:left-12">
                <span className="md:text-6xl text-5xl font-extrabold pb-16 ">About Me</span>
                <span className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute md:-left-6 -top-2 ">About</span>
                <span className="text-base sm:text-xl  text-grayColor pb-10 md:text-start text-center">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </span>
                <div className="flex sm:gap-x-12 gap-8 sm:text-xl text-base">
                <div className="text-primary font-bold text-nowrap">
                <p>Name:</p>
                <p>Date of birth:</p>
                <p className="p-auto">Address</p>
                <p>Zip code</p>
                <p>Email</p>
                <p>Phone</p>
                </div>
                <div className="text-grayColor text-wrap">
                <p>Clark Thompaso</p>
                <p>January 01, 1987</p>
                <p>San Francisco CA 97987 USA</p>
                <p>1000</p>
                <p>clarkthomp@gmail.com</p>
                <p>+1-2234-5678-0-0</p>
                </div>
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