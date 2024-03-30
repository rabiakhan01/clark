import React from "react";
import Navbar from "./navbar";
const Layout = ({ children }) => {
    return (
        <div className="mx-10 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto">
            <Navbar />
            {children}

        </div>
    );
}

export default Layout;