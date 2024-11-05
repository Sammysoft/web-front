/* eslint-disable */

import React from "react";
import styled from "styled-components";
import NavBar from "../components/Nabar";
import BackgroundImage from "../assets/Icons/svg/background-white.jpg";
import Header from "../components/Home/Header";
import ProductListing from "../components/Home/ProductListing";
import HomeBlogs from "../components/Home/Blogs";
import Footer from "../components/Footer";
import { Colors } from "../assets/Res/fonts";
import AdvertCard from "../components/Cards/Index";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${Colors.PRIMARY};

  @media (max-width: 900px){
    height: 90vh;
  }

`;


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Header />
      </Wrapper>
      <ProductListing />
      <AdvertCard />
      <HomeBlogs />
      <Footer />
    </>
  );
};

export default HomePage;
