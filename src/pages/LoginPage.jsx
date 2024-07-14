import React from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import { LoginHeader } from "../components/Auth/Header";
import { LoginForm } from "../components/Auth/Form";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <LoginHeader />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
