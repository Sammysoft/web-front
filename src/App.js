/* eslint-disable */

import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductsDetailsPage";
import Blogs from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminDashboard from "./pages/AdminPages";
import { Toaster } from "react-hot-toast";
import { Fonts } from "./assets/Res/fonts";
import VerificationPage from "./pages/VerificationPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";
import BlogReadPage from "./pages/BlogReadPage";
import ScrollToTop from "./utils/Utils";

function App() {
  return (
    <>
      <Toaster
        // position="top-right"
        toastOptions={{ style: { fontFamily: Fonts.PRIMARY } }}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products/*" exact element={<ProductsDetails />} />
        <Route path="/product" exact element={<ProductsPage />} />
        <Route path="/blog" exact element={<Blogs />} />
        <Route path="/blog/*" exact element={<BlogReadPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
        <Route path="/checkout-success" exact element={<SuccessPage />} />
        <Route path="/checkout-failed" exact element={<FailurePage />} />
        <Route path="/admin" exact element={<AdminDashboard />} />
        <Route path="/verify/*" exact element={<VerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
