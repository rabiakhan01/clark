import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="mx-5 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto overflow-hidden">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;