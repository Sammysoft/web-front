import React, { useState } from "react";
import styled from "styled-components";
import {
  DropDownButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../../Elements";
import { Text } from "../../Home/Blogs";

import Right from "../../../assets/Icons/svg/dropdown-right.svg";
import CartIcon from "../../../assets/Icons/svg/chart-black.svg";

import Prod1 from "../../../assets/Images/prod1.svg";
import Prod2 from "../../../assets/Images/prod2.svg";
import Prod3 from "../../../assets/Images/prod3.svg";
import Prod4 from "../../../assets/Images/prod4.svg";
import Prod5 from "../../../assets/Images/prod5.svg";
import Prod6 from "../../../assets/Images/prod6.svg";
import Prod7 from "../../../assets/Images/prod7.svg";
import Prod8 from "../../../assets/Images/prod8.svg";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;
`;

const MenuList = [
  { name: "All Products", text: "All Products" },
  { name: "Best Sellers", text: "Best Sellers" },
  { name: "Kaftan", text: "Kaftan" },
  { name: "Athleisure", text: "Athleisure" },
  { name: "Agbada", text: "Agbada" },
  { name: "Suits", text: "Suits" },
  { name: "Art", text: "Art" },
];

const ProductListing = [
  {
    name: "Jacquard wine kaftan",
    details: "Kaftan | Wine",
    price: "$125.00",
    image: Prod1,
    category: "Kaftan",
  },
  {
    name: "Coastline Jacket + Fedora",
    details: "Jackets | Brown",
    price: "$200.00",
    image: Prod2,
    category: "Athleisure",
  },
  {
    name: "White Double Breasted Suit",
    details: "Suits | White",
    price: "$450.00",
    image: Prod3,
    category: "Kaftan",
  },
  {
    name: "Jacquard wine kaftan",
    details: "Kaftan | Wine",
    price: "$120.00",
    image: Prod4,
    category: "Kaftan",
  },
  {
    name: "Coastline Jacket + Fedora",
    details: "Jackets | Brown",
    price: "$99.99",
    image: Prod5,
    category: "Kaftan",
  },
  {
    name: "White Double Breasted Suit",
    details: "Suits | White",
    price: "$45.09",
    image: Prod6,
    category: "Suits",
  },
  {
    name: "Jacquard wine kaftan",
    details: "Kaftan | Wine",
    price: "$100.09",
    image: Prod7,
    category: "Kaftan",
  },
  {
    name: "Coastline Jacket + Fedora",
    details: "Jackets | Brown",
    price: "$560.99",
    image: Prod8,
    category: "Agbada",
  },
];

const Listings = ({ selectedProduct, setSelectedProduct }) => {
  console.log(selectedProduct);

  // const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          elements={
            <>
              <Text width={"20%"}>
                {selectedProduct === null ? "My Cart (3)" : ""}
              </Text>
              <HorizontalFlexedWrapper
                width={"80%"}
                height={"fit-content"}
                elements={
                  <>
                    <Menu
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                    />
                  </>
                }
              />
            </>
          }
        />

        <HorizontalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          align={"flex-start"}
          justify={"left"}
          elements={
            <>
              <VerticalFlexedWrapper
                width={"20%"}
                height={"fit-content"}
                elements={
                  <>
                    <DropDownButton
                      text={"LATEST PIECES"}
                      width={"70%"}
                      bgColor={"#D9D9D9"}
                      Icon={
                        <>
                          <ImageWrapper
                            width={"15%"}
                            height={"25px"}
                            image={Right}
                          />
                        </>
                      }
                    />
                    <DropDownButton
                      text={"CATEGORY 1"}
                      width={"70%"}
                      bgColor={"#D9D9D9"}
                      Icon={
                        <>
                          <ImageWrapper
                            width={"15%"}
                            height={"25px"}
                            image={Right}
                          />
                        </>
                      }
                    />
                    <DropDownButton
                      text={"CATEGORY 2"}
                      width={"70%"}
                      bgColor={"#D9D9D9"}
                      Icon={
                        <>
                          <ImageWrapper
                            width={"15%"}
                            height={"25px"}
                            image={Right}
                          />
                        </>
                      }
                    />
                  </>
                }
              />

              <ProductWrapper>
                <ProductCard
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                />
              </ProductWrapper>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const Menu = ({ selectedProduct, setSelectedProduct }) => {
  const [clicked, setClicked] = useState(0);
  return (
    <>
      {MenuList &&
        MenuList.map((item, index) => (
          <Text
            key={index}
            width={"15%"}
            size={"20px"}
            onClick={() => {
              setClicked(index);
              setSelectedProduct(item);
            }}
            style={
              index === clicked
                ? { fontWeight: "bolder", cursor: "pointer" }
                : { cursor: "pointer" }
            }
          >
            {item.text}
          </Text>
        ))}
    </>
  );
};

const ProductCard = ({ selectedProduct, setSelectedProduct }) => {
  const navigate = useNavigate();
  const ProductFilteredByCategory =
    selectedProduct?.name === "All Products" ||
    selectedProduct?.name === "Best Sellers"
      ? ProductListing
      : ProductListing.filter(
          (prod) => prod.category === selectedProduct?.name
        );
  return (
    <>
      {selectedProduct === null &&
        ProductListing &&
        ProductListing.map((product, index) => (
          <VerticalFlexedWrapper
            onClick={() => setSelectedProduct(product)}
            width={"28%"}
            height={"45vh"}
            margin={"1%"}
            elements={
              <>
                <ProductImage
                  background={product.image}
                  key={index}
                  onClick={() =>
                    navigate(
                      `/product/${product.name}?category=${product.category}&name=${product.name}&price=${product.price}&details=${product.details}`
                    )
                  }
                >
                  <ProductBadge>New</ProductBadge>
                </ProductImage>
                <VerticalFlexedWrapper
                  height={"25%"}
                  width={"100%"}
                  justify={"center"}
                  elements={
                    <>
                      <Text
                        width={"100%"}
                        align={"left"}
                        style={{ fontWeight: "bold", lineHeight: "0px" }}
                      >
                        {product.name}
                      </Text>
                      <Text
                        style={{ lineHeight: "0px" }}
                        width={"100%"}
                        align={"left"}
                      >
                        {product.details}
                      </Text>

                      <HorizontalFlexedWrapper
                        width={"100%"}
                        height={"10%"}
                        justify={"flex-start"}
                        elements={
                          <>
                            <ImageWrapper
                              image={CartIcon}
                              width={"30px"}
                              height={"30px"}
                            />
                            <Text
                              width={"50%"}
                              align={"left"}
                              style={{ marginLeft: "10px" }}
                            >
                              {product.price}
                            </Text>
                          </>
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        ))}
      {selectedProduct !== null &&
        ProductFilteredByCategory.map((product, index) => (
          <VerticalFlexedWrapper
            width={"28%"}
            height={"45vh"}
            margin={"1%"}
            elements={
              <>
                <ProductImage
                  background={product?.image}
                  key={index}
                  onClick={() =>
                    navigate(
                      `/product/${product.name}?category=${product.category}&name=${product.name}&price=${product.price}&details=${product.details}`
                    )
                  }
                >
                  <ProductBadge>New</ProductBadge>
                </ProductImage>
                <VerticalFlexedWrapper
                  height={"25%"}
                  width={"100%"}
                  justify={"center"}
                  elements={
                    <>
                      <Text
                        width={"100%"}
                        align={"left"}
                        style={{ fontWeight: "bold", lineHeight: "0px" }}
                      >
                        {product?.name}
                      </Text>
                      <Text
                        style={{ lineHeight: "0px" }}
                        width={"100%"}
                        align={"left"}
                      >
                        {product?.details}
                      </Text>

                      <HorizontalFlexedWrapper
                        width={"100%"}
                        height={"10%"}
                        justify={"flex-start"}
                        elements={
                          <>
                            <ImageWrapper
                              image={CartIcon}
                              width={"30px"}
                              height={"30px"}
                            />
                            <Text
                              width={"50%"}
                              align={"left"}
                              style={{ marginLeft: "10px" }}
                            >
                              {product?.price}
                            </Text>
                          </>
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        ))}
    </>
  );
};

const ProductImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: contain;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 70%;
  width: 100%;
  position: relative;
`;

const ProductBadge = styled.div`
  position: absolute;
  background: red;
  color: #ffffff;
  font-family: Josefin Sans;
  text-transform: capitalize;
  top: 10px;
  right: 10px;
  padding: 8px;
`;

const ProductWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  height: fit-content;
`;

export default Listings;
