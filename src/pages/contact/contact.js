import React from "react";
import ContactCard from "../../components/contactSectionCard/contactCard";
import images from "../../assets/images/images";
import Button from "../../components/button/button";
export default function Contact() {
    return (
        <div className="mt-28">
            <div className=" relative flex flex-col justify-center items-center px-24 ">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primaryColor">Contact</p>
                <p className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute top-4">Contact</p>
                <p className="text-grayColor text-center text-base font-light mb-16 w-8/12">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia                </p>
            </div>
            <ContactCard />
            <div className="flex md:flex-row flex-col justify-center items-center  w-full md:h-120 h-full">
                <div className="flex justify-center items-center bg-semiTransparent w-5/6 md:w-2/4 md:pt-20 h-full overflow-hidden">
                    <img src={images.person} alt="" className="object-cover sm:max-w-md md:max-w-sm h-full md:h-auto lg:max-w-md xl:max-w-lg" />
                </div>
                <div className="flex justify-center items-center bg-formBackground w-5/6 md:w-2/4 h-full md:pb-0 pb-10 md:pt-0 pt-10">
                    <form className="flex flex-col gap-10 justify-center items-center w-full">
                        <input type="text" placeholder="Your Name" name="yourName" className="w-5/6 h-14" />
                        <input type="email" placeholder="Your Email" name="yourEmail" className="w-5/6 h-14" />
                        <input type="text" placeholder="Subject" name="yourSubject" className="w-5/6 h-14" />
                        <textarea placeholder="Message" name="message" className="w-5/6 h-14" />
                        <Button
                            name="send message"
                            px="px-12"
                            py="py-4"
                            color="bg-secondaryColor"
                            ringColor="ring-secondaryColor"
                            textColor="text-blackColor"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}