import React from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Failure from "../components/Status/Failure";


const FailurePage = ()=>{
    return (
        <>
            <NavBar />
            <Failure />
            <Footer />
        </>
    )
};

export default FailurePage;