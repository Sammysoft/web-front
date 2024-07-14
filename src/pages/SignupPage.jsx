import React from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import { SignUpHeader } from "../components/Auth/Header";
import { SignupForm } from "../components/Auth/Form";


const SignupPage = () => {
  return (
    <>
      <NavBar />
      <SignUpHeader />
      <SignupForm />
      <Footer />
    </>
  );
};

export default SignupPage;
