import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductsDetailsPage";
import Blogs from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product" exact element={<ProductsPage />} />
        <Route path="/product/*" exact element={<ProductsDetails />} />
        <Route path="/blog" exact element={<Blogs />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
