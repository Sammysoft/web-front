import React from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Header from "../components/Checkout/Header";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Checkout />
      <Footer />
    </>
  );
};

export default CheckoutPage;
