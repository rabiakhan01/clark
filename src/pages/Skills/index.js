import React from "react";
import Slider from "../../components/slider/slider";
export default function Skills() {
    return (
        <div className="pt-28" id="Skills">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold pb-10 sm:pb-16 text-primaryColor">Skills</p>
                <p className="text-5xl md:text-6xl lg:text-7xl text-semiTransparent font-extrabold absolute top-4">Skills</p>
                <p className="text-grayColor text-center text-base font-light mb-16 sm:w-8/12 w-4/5 ">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <div className="grid md:grid-rows-3 grid-rows-6 lg:px-8 sm:px-6 px-4 grid-flow-col gap-8  w-full">
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