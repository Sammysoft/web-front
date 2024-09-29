/* eslint-disable */

import React, { useEffect, useState } from "react";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import Header from "../components/Product/Details/Header";
import ProductDetail from "../components/Product/Details";
import { useLocation } from "react-router-dom";

const ProductsDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const location = useLocation();
  const queryString = new URLSearchParams(location.search);

  const product = {
    name: queryString.get("name"),
    category: queryString.get("category"),
    price: queryString.get("price"),
    details: queryString.get("details"),
  };

  useEffect(() => {
    setSelectedProduct(product);
  }, []);

  return (
    <>
      <NavBar />
      <Header
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <ProductDetail
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {/* <Footer /> */}
    </>
  );
};

export default ProductsDetails;
