import React from "react";
import Slider from "../../components/slider/slider";
export default function Skills() {
    return (
        <div className="mt-28" id="Skills">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primaryColor">Skills</p>
                <p className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute top-4">Skills</p>
                <p className="text-grayColor text-center text-base font-light mb-16">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <div className="grid md:grid-rows-3 grid-rows-6 lg:px-8 sm:px-12 grid-flow-col gap-8  w-full">
                <Slider width="w-[90%]" name="Photoshope" percentage="90%" />
                <Slider width="w-[95%]" name="HTML5" percentage="95%" />
                <Slider width="w-[70%]" name="Wordpress" percentage="70%" />
                <Slider width="w-[85%]" name="jQuery" percentage="85%" />
                <Slider width="w-[90%]" name="CSS3" percentage="90%" />
                <Slider width="w-[80%]" name="SEO" percentage="80%" />
            </div>
        </div>
    );
}