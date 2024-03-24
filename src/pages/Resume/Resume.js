import React from "react";
import Card from "../../components/card/card";
import Button from "../../components/button/button";
const Resume = () => {
    return (
        <div className="flex mt-28 mb-28 flex-col h-1vh w-full justify-center items-center">

            <div className=" relative flex flex-col justify-center items-center px-24 ">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primary">Resume</p>
                <p className="md:text-9xl text-7xl text-semiTransparent font-extrabold absolute -top-2">Resume</p>
                <p className="text-grayColor text-center text-xl mb-16">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </div>
            <Card />
            <div className="text-buttonText mt-20">
                <Button
                    name="Download cv"
                    px="px-12"
                    py="py-6"
                    color="secondary"
                    ringColor="ring-secondary"
                />
            </div>
        </div>
    );
}

export default Resume;