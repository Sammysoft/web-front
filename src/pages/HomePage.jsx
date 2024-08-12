/* eslint-disable */

import React from "react";
import styled from "styled-components";
import NavBar from "../components/Nabar";
import BackgroundImage from "../assets/Icons/svg/background-white.jpg";
import Header from "../components/Home/Header";
import ProductListing from "../components/Home/ProductListing";
import HomeBlogs from "../components/Home/Blogs";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${BackgroundImage});
`;


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Header />
      </Wrapper>
      <ProductListing />
      <HomeBlogs />
      <Footer />
    </>
  );
};

export default HomePage;
