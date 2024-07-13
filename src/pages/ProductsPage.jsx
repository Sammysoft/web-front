import React, { useState } from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import Listings from "../components/Product/Listing";

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
      <Footer />
    </>
  );
};

export default ProductsPage;
