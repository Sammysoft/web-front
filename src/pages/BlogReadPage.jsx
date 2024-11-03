/* eslint-disable */

import React from "react";
import NavBar from "../components/Nabar";
import Header from "../components/Blog/Header";
import BlogBody from "../components/Blog";
import Footer from "../components/Footer";
import ReadBlog from "../components/Blog/ReadBlog";

const BlogReadPage = () => {
  return (
    <>
      <NavBar />
      <ReadBlog />
      <BlogBody />
      <Footer />
    </>
  );
};

export default BlogReadPage;
