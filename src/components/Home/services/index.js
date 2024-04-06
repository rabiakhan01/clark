import React from "react";
import { ServiceCard, CommonSection } from "../../shared";
import { servicesData } from "../../../utils/staticData";

const Services = () => {
    return (
        <div className=" pt-16 sm:pt-20 md:pt-28" id="Services">
            <CommonSection
                heading="Services"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="flex flex-wrap w-full gap-4 lg:gap-6  justify-center items-center">
                {
                    servicesData.map((item) => {
                        return (

                            <ServiceCard
                                key={item.id}
                                icon={item.icon}
                                white_icon={item.white_icon}
                                desc={item.content}
                            />

                        );
                    })
                }
            </div>
        </div>
    );
}

export default Services;