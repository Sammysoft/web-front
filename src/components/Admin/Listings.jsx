/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";
import ActiveIcon from "../../assets/Icons/svg/active_icon.svg";
import InActiveIcon from "../../assets/Icons/svg/inactive_icon.svg";

import Prod1 from "../../assets/Images/prod1.svg";
import Prod2 from "../../assets/Images/prod2.svg";
import Prod3 from "../../assets/Images/prod3.svg";
import Prod4 from "../../assets/Images/prod4.svg";
import Prod5 from "../../assets/Images/prod5.svg";
import Prod6 from "../../assets/Images/prod6.svg";
import Prod7 from "../../assets/Images/prod7.svg";
import Prod8 from "../../assets/Images/prod8.svg";
import ProductForm from "./AddProduct";
import Orders from "./Orders";

import Blog1 from "../../assets/Images/blog1.svg";
import Blog2 from "../../assets/Images/blog2.svg";
import Blog3 from "../../assets/Images/blog3.svg";
import Blog4 from "../../assets/Images/blog4.svg";
import Blog from "./Blogs";
import AddBlog from "./AddBlog";

const Wrapper = styled.div`
  width: 70%;
  margin: 5% 15% 5% 15%;
  height: fit-content;
  padding: 20px 20px 20% 20px;
  background-color: #f8f8f8;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;

  @media (max-width: 1400px) {
    width: 95%;
    margin: 2.5%;
    padding: 0px;
  }
`;

const Products = [
  {
    image: Prod1,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod2,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod3,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod4,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod5,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod6,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod7,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
  {
    image: Prod8,
    name: "Jacquard Wine Kaftan",
    category: "Kaftan | White",
    price: "$125.00",
  },
];

const Blogs = [
  {
    head: "Choosing the right corporate style: A modern noob’s approach",
    body: "Enim dictum mauris amet eget nunc in. In massa proin urna nulla sed purus ultricies cras elementum. Amet mattis porta sit tortor tempor et. Auctor mauris aenean at quis sagittis. Viverra eget mauris mattis sit elementum donec aliquet odio. Arcu est enim eget at. Sit leo ipsum consectetur sit volutpat bibendum rhoncus facilisi. Volutpat purus viver ante vel fermentum amet turpis in lacus.........",
    image: Blog1,
  },
  {
    head: "Choosing the right corporate style: A modern noob’s approach",
    body: "Enim dictum mauris amet eget nunc in. In massa proin urna nulla sed purus ultricies cras elementum. Amet mattis porta sit tortor tempor et. Auctor mauris aenean at quis sagittis. Viverra eget mauris mattis sit elementum donec aliquet odio. Arcu est enim eget at. Sit leo ipsum consectetur sit volutpat bibendum rhoncus facilisi. Volutpat purus viver ante vel fermentum amet turpis in lacus.........",
    image: Blog2,
  },
  {
    head: "Choosing the right corporate style: A modern noob’s approach",
    body: "Enim dictum mauris amet eget nunc in. In massa proin urna nulla sed purus ultricies cras elementum. Amet mattis porta sit tortor tempor et. Auctor mauris aenean at quis sagittis. Viverra eget mauris mattis sit elementum donec aliquet odio. Arcu est enim eget at. Sit leo ipsum consectetur sit volutpat bibendum rhoncus facilisi. Volutpat purus viver ante vel fermentum amet turpis in lacus.........",
    image: Blog3,
  },
  {
    head: "Choosing the right corporate style: A modern noob’s approach",
    body: "Enim dictum mauris amet eget nunc in. In massa proin urna nulla sed purus ultricies cras elementum. Amet mattis porta sit tortor tempor et. Auctor mauris aenean at quis sagittis. Viverra eget mauris mattis sit elementum donec aliquet odio. Arcu est enim eget at. Sit leo ipsum consectetur sit volutpat bibendum rhoncus facilisi. Volutpat purus viver ante vel fermentum amet turpis in lacus.........",
    image: Blog4,
  },
];

const AdminListings = () => {
  const [tab, setTab] = useState("products");
  console.log(tab);

  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"95%"}
          elements={
            <>
              <HorizontalFlexedWrapper
                width={"50%"}
                smallWidth={"60%"}
                elements={
                  <>
                    <Text
                      onClick={() => setTab("products")}
                      weight={tab === "products" ? "900" : ""}
                      size={tab === "products" ? "30px" : "18px"}
                      fontSmall={"14px"}
                    >
                      Products(6)
                    </Text>
                    <Text
                      weight={tab === "orders" ? "900" : ""}
                      size={tab === "orders" ? "30px" : "18px"}
                      onClick={() => setTab("orders")}
                      fontSmall={"14px"}
                    >
                      Orders(6)
                    </Text>
                    <Text
                      weight={tab === "blogs" ? "900" : ""}
                      size={tab === "blogs" || tab === "showBlogForm" ? "30px" : "18px"}
                      onClick={() => setTab("blogs")}
                      fontSmall={"14px"}
                    >
                      Blogs(6)
                    </Text>
                  </>
                }
              />
              {tab === "products" && (
                <BoxedButton
                  text={"Add new Product"}
                  width={"25%"}
                  smallWidth={"20%"}
                  fontSmall={"12px"}
                  onPress={() => {
                    setTab("showProductForm");
                  }}
                />
              )}

              {tab === "blogs" && (
                <BoxedButton
                  text={"Add new Blog Post"}
                  width={"25%"}
                  smallWidth={"20%"}
                  fontSmall={"12px"}
                  onPress={() => {
                    setTab("showBlogForm");
                  }}
                />
              )}
            </>
          }
        />
        {tab === "products" && (
          <ProductCardWrapper
            ProductItems={Products.map((prod, index) => (
              <ProductCard key={index} prod={prod} />
            ))}
          />
        )}
        {tab === "showProductForm" && <ProductForm />}
        {tab === "orders" &&
          Products.map((prod, index) => <Orders key={index} prod={prod} />)}

        {tab === "blogs" &&
          Blogs.map((blog, index) => <Blog key={index} Blog={blog} />)}

        {tab === "showBlogForm" && <AddBlog />}
      </Wrapper>
    </>
  );
};

const ProductCardWrapper = ({ ProductItems }) => {
  return (
    <>
      <GridWrapper>{ProductItems}</GridWrapper>
    </>
  );
};

const GridWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 10%;
  row-gap: 10%;
  margin: 5%;
  //   background: red;
  height: fit-content;

  @media (max-width: 1400px) {
    display: block;
    margin: 10px;
    width: 90%;
  }
`;

const ProductCard = ({ prod }) => {
  return (
    <>
      <VerticalFlexedWrapper
        height={"35vh"}
        width={"100%"}
        mobileHeight={"fit-content"}
        elements={
          <>
            <ProductWrapping background={prod.image}></ProductWrapping>
            <VerticalFlexedWrapper
              elements={
                <>
                  <HorizontalFlexedWrapper
                    width={"100%"}
                    elements={
                      <>
                        <Text
                          align={"left"}
                          line={"16px"}
                          size={"16px"}
                          style={{ padding: "0px" }}
                        >
                          New Product
                        </Text>
                        <ImageWrapper
                          image={ActiveIcon}
                          width={"30px"}
                          height={"30px"}
                        />
                      </>
                    }
                  />
                  <Text
                    align={"left"}
                    line={"16px"}
                    size={"16px"}
                    style={{ padding: "5px" }}
                  >
                    {prod.name}
                  </Text>
                  <Text
                    align={"left"}
                    line={"16px"}
                    size={"14px"}
                    style={{ padding: "5px" }}
                  >
                    {prod.category}
                  </Text>
                  <Text
                    align={"left"}
                    line={"16px"}
                    size={"20px"}
                    style={{ padding: "5px" }}
                  >
                    {prod.price}
                  </Text>
                  <HorizontalFlexedWrapper
                    width={"100%"}
                    height={"fit-content"}
                    elements={
                      <>
                        <Text
                          align={"left"}
                          width={"40%"}
                          size={"14px"}
                          color={"#FD9017"}
                          style={{ padding: "0px" }}
                        >
                          Edit Listing
                        </Text>
                        <Text
                          align={"left"}
                          width={"55%"}
                          size={"14px"}
                          color={"#FF0D26"}
                          style={{ padding: "0px" }}
                        >
                          Delete
                        </Text>
                      </>
                    }
                  />
                </>
              }
              width={"100%"}
              height={"30%"}
            />
          </>
        }
      />
    </>
  );
};

const ProductWrapping = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  object-fit: contain;
  background: url(${(props) =>
    props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (max-width: 1400px) {
    background-position: cover;
    background-size: 200%;
    height: 40vh;
    width: 100%;
    margin: 0px;
  }
`;

export default AdminListings;
