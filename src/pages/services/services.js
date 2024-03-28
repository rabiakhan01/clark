import React from "react";
import ServiceCard from "../../components/serviceCard/serviceCard";
const Services = () => {
    return (
        <div className="mt-28" id="Services">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold pb-10 sm:pb-16 text-primaryColor">Services</p>
                <p className="text-5xl md:text-6xl lg:text-7xl text-semiTransparent font-extrabold absolute top-4">Services</p>
                <p className="text-grayColor text-center text-sm sm:text-base font-light mb-16 sm:w-8/12 w-4/5">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <ServiceCard />

        </div>
    );
}

export default Services;