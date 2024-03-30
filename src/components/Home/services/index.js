import React from "react";
import { ServiceCard, CommonSection } from "../../shared";
import { servicesData } from "../../../utils/staticData";

const Services = () => {
    return (
        <div className="pt-28" id="Services">
            <CommonSection
                heading="Services"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            {
                servicesData.map((item) => {
                    return (
                        <div className="flex flex-wrap w-full md:gap-8 lg:gap-3  justify-center items-center">
                            <ServiceCard
                                icon={item.icon}
                                white_icon={item.white_icon}
                                desc={item.content}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Services;