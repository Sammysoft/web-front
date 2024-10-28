/* eslint-disable */

import React, { useEffect } from "react";
import Header from "../components/Admin/Header";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import AdminListings from "../components/Admin/Listings";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const {
    user: { isAdmin },
  } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log("from admin dashboard", isAdmin);

  useEffect(()=>{
    if(!isAdmin){
      navigate('/checkout')
    }
  })

  if (isAdmin) {
    return (
      <>
        <NavBar />
        <Header />
        <AdminListings />
        <Footer />
      </>
    );
  }
};

export default AdminDashboard;
