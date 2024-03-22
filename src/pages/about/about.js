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
                <span className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute md:-left-6">About</span>
                <span className="text-xl  text-grayColor pb-10 md:text-start text-center">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </span>
                <div className="flex flex-col lg:gap-x-10 md:gap-x-4 mb-10">
                    <div>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Name:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">Clark Thompason</span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Date of birth:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">January 01, 1987</span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Address:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">San Francisco CA 97987 USA</span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Zip code:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">1000</span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Email:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">clarkthomp@gmail.com</span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="text-xl text-nowrap font-bold">Phone:</span>
                                <span className="flex flex-col gap-y-3 text-xl  text-grayColor">+1-2234-5678-0-0</span>
                            </li>
                        </ul>
                        <div className="text-2xl mb-10">
                            <span className="text-secondary">120 </span>
                            <span className="text-primary">Project complete</span>
                        </div>
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
        </div>
    );
}


export default About;