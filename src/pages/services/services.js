import React from "react";
import ServiceCard from "../../components/serviceCard/serviceCard";
const Services = () => {
    return (
        <div>
            <div className=" relative flex flex-col justify-center items-center px-24 ">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primaryColor">Services</p>
                <p className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute top-4">Services</p>
                <p className="text-grayColor text-center text-base font-light mb-16">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <ServiceCard />

        </div>
    );
}

export default Services;