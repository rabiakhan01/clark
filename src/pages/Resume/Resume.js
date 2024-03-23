import React from "react";
import Card from "../../components/button/card/card";
const Resume = () => {
    return (
        <div className="flex mt-28 mb-28 flex-col h-1vh w-full">

            <div className=" relative flex flex-col justify-center items-center px-24 ">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primary">Resume</p>
                <p className="md:text-9xl text-7xl text-semiTransparent font-extrabold absolute -top-2">Resume</p>
                <p className="text-grayColor text-center text-xl mb-16">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </div>
            <Card />
        </div>
    );
}

export default Resume;