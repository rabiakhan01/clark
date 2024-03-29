import React from "react";
import ResumeCard from "../../../components/resumeCard/resumeCard";
import Button from "../../../components/button/button";
const Resume = () => {
    return (
        <div className="flex pt-28 flex-col h-1vh w-full justify-center items-center" id="Resume">

            <div className=" relative flex flex-col justify-center items-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold pb-10 sm:pb-16 text-primaryColor">Resume</p>
                <p className="text-5xl md:text-6xl lg:text-7xl text-semiTransparent font-extrabold absolute top-4">Resume</p>
                <p className="text-grayColor text-center text-sm sm:text-base font-light mb-16 sm:w-8/12 w-4/5">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </div>
            <ResumeCard />
            <div className="text-blackColor sm:mt-20 mt-10">
                <Button
                    name="Download cv"
                    px="sm:px-7"
                    py="sm:py-4"
                    sm_px="px-4"
                    sm_py="py-4"
                    md_bg="bg-secondaryColor"
                    color="lg:bg-secondaryColor"
                    ringColor="ring-secondaryColor"
                />
            </div>
        </div>
    );
}

export default Resume;