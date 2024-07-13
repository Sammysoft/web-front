import React from "react";
import styled from "styled-components";
import {
  DropDownButton,
  VerticalFlexedWrapper,
  ImageWrapper,
  HorizontalFlexedWrapper,
} from "../../Elements";
import { Text } from "../../Home/Blogs";

import DropDown from "../../../assets/Icons/svg/dropdown.svg";

import Prod1 from "../../../assets/Images/prodM1.svg";
import Prod2 from "../../../assets/Images/prodM2.svg";
import Prod3 from "../../../assets/Images/prodM3.svg";
import Prod4 from "../../../assets/Images/prodM4.svg";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10%;
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
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                {selectedProduct === null && " Our Product Lineup"}
                {selectedProduct && `928 ${selectedProduct?.name}`}
              </Text>
              <Text color={"#696969"} width={"60%"} size={"20px"}>
                Ornare nec placerat in elit convallis rutrum pellentesque. Ac
                dis volutpat pellentesque et tortor elementum consequat.
                Venenatis elit. Ac dis volutpat pellentesque et tortor elementum
                consequat. Venenatis elit.{" "}
              </Text>
              <DropDownButton
                width={"14%"}
                text={"Change Currency"}
                bgColor={"#D9D9D9"}
                Icon={
                  <ImageWrapper
                    image={DropDown}
                    width={"20%"}
                    height={"30px"}
                  />
                }
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
