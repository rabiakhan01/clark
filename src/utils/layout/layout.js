import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto overflow-hidden">
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;