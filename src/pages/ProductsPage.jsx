import React, { useState } from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import Listings from "../components/Product/Listing";
import AdvertCard from "../components/Cards/Index";
import styled from "styled-components";

const DesktopSpacer = styled.div`
height: 15vh;
width: 100%;

@media (max-width: 900px){
  display: none;
}
`

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <NavBar />
      <Header
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Listings
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <DesktopSpacer />
      <AdvertCard />
      <Footer />
    </>
  );
};

export default ProductsPage;
