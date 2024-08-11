import React from "react";
import Header from "../components/Admin/Header";
import NavBar from "../components/Nabar";
import Footer from "../components/Footer";
import AdminListings from "../components/Admin/Listings";

const AdminDashboard = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AdminListings />
      <Footer />
    </>
  );
};

export default AdminDashboard;
