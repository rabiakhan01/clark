import React from "react";
import { Button, ContactCard, CommonSection } from '../../shared';
import images from "../../../assets/images/images";
import { contactData } from "../../../utils/staticData";

export default function Contact() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-28" id="Contact">
            <CommonSection
                heading="Contact"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 sm:gap-x-2 sm:gap-y-6 md:gap-x-0 md:gap-y-8 lg:gap-14 mb-14">
                {
                    contactData.map((item) => {
                        return (

                            <ContactCard
                                content={item.content}
                                icon={item.icon}
                                name={item.name}
                            />

                        );
                    })
                }
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-center items-center w-full md:h-120 h-full">
                <div className="flex justify-center items-center bg-semiTransparent w-full md:pt-20 h-full overflow-hidden">
                    <img src={images.person} alt="" className="object-cover sm:max-w-md md:max-w-sm h-full md:h-auto lg:max-w-md xl:max-w-lg" />
                </div>
                <div className="flex justify-center items-center bg-formBackground w-full h-full md:pb-0 pb-6 md:pt-0 pt-6">
                    <form className="flex flex-col gap-6 justify-center items-center w-full">
                        <input type="text" placeholder="Your Name" name="yourName" className="w-5/6 h-14 border border-slate-500 focus:outline indent-4 rounded-md" />
                        <input type="email" placeholder="Your Email" name="yourEmail" className="w-5/6 h-14 border border-slate-500 focus:outline indent-4 rounded-md" />
                        <input type="text" placeholder="Subject" name="yourSubject" className="w-5/6 h-14 border border-slate-500 focus:outline indent-4 rounded-md" />
                        <textarea placeholder="Message" name="message" className="w-5/6 h-32 resize-none border border-slate-500 focus:outline indent-4 rounded-md pt-4" />
                        <Button
                            name="send message"
                            bgColor={true}
                            textColor={true}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}