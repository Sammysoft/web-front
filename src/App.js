import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductsDetailsPage";
import Blogs from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product" exact element={<ProductsPage />} />
        <Route path="/product/*" exact element={<ProductsDetails />} />
        <Route path="/blog" exact element={<Blogs />} />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
