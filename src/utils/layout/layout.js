import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const Layout = ({children}) => {
    return (
        <div className="mr-10 ml-10 xl:mx-36 2xl:max-w-[1500px] 2xl:my-0 2xl:mx-auto overflow-hidden">
        <Navbar />
        {children}
        <Footer />
        </div>
    );
}

export default Layout;