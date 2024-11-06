/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import {
  DropDownButton,
  VerticalFlexedWrapper,
  ImageWrapper,
  HorizontalFlexedWrapper,
} from "../../Elements";
import { Text } from "../../Home/Blogs";
import Prod1 from "../../../assets/Images/prodM1.svg";
import Prod2 from "../../../assets/Images/prodM2.svg";
import Prod3 from "../../../assets/Images/prodM3.svg";
import Prod4 from "../../../assets/Images/prodM4.svg";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10%;

  @media (max-width: 900px) {
    margin-top: 10vh;
  }
`;

const CategoryMenu = [
  {
    name: "Athleisure",
    image: Prod1,
  },
  {
    name: "Kaftan",
    image: Prod2,
  },
  {
    name: "Suits",
    image: Prod3,
  },
  {
    name: "Agbada",
    image: Prod4,
  },
];

const Header = ({ selectedProduct, setSelectedProduct }) => {
  const [currency, setCurrency] = useState("Change Currency");

  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / PRODUCTS
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                fontSmall={"30px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                {selectedProduct === null && " Our Product Lineup"}
                {selectedProduct &&
                  `928 ${selectedProduct?.name } Collection` }
              </Text>

              <DropDownButton
                width={"14%"}
                text={"Change Currency"}
                bgColor={"#D9D9D9"}
                smallWidth={"65%"}
                change={currency}
                list={[{ name: "Dollar" }, { name: "Naira" }]}
                onSelect={(option, index) => {
                  setCurrency(option.name);
                }}
              />
            </>
          }
          width={"100%"}
          height={"fit-content"}
        />
        <br />

        <HorizontalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          invert={true}
          elements={
            <>
              {selectedProduct === null && (
                <CategoryCards setSelectedProduct={setSelectedProduct} />
              )}
            </>
          }
        />
        {selectedProduct === null && <Line />}
      </Wrapper>
    </>
  );
};

const CategoryCards = ({ setSelectedProduct }) => {
  return (
    <>
      {CategoryMenu &&
        CategoryMenu.map((menu, index) => (
          <VerticalFlexedWrapper
            onClick={() => setSelectedProduct(menu)}
            height={"40vh"}
            width={"25%"}
            mobileWidth={"100%"}
            elements={
              <>
                <ImageWrapper
                  height={"80%"}
                  width={"100%"}
                  image={menu.image}
                  key={index}
                />
                <Text
                  width={"100%"}
                  size={"20px"}
                  style={{ textTransform: "uppercase" }}
                >
                  {menu.name}
                </Text>
              </>
            }
          />
        ))}
    </>
  );
};

const Line = styled.p`
  height: 1px;
  width: 100%;
  margin: 10% 0px 10% 0px;
  background-color: #000000;
`;

export default Header;
