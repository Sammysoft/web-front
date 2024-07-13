import React from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Header from "../components/Contact/Header";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = ()=>{
    return (
        <>
        <NavBar />
        <Header />
        <ContactForm />
        <Footer />
        </>
    )
}

export default ContactPage;