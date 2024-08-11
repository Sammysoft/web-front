import React, { useState } from "react";
import styled from "styled-components";
import ProductHeader from "./Header";
import { BoxedButton, HorizontalFlexedWrapper } from "../../Elements";

import Prod1 from "../../../assets/Images/prod1.svg";
import Prod2 from "../../../assets/Images/prod2.svg";
import Prod3 from "../../../assets/Images/prod3.svg";
import Prod4 from "../../../assets/Images/prod4.svg";
import Prod5 from "../../../assets/Images/prod5.svg";
import Prod6 from "../../../assets/Images/prod6.svg";
import Prod7 from "../../../assets/Images/prod7.svg";
import Prod8 from "../../../assets/Images/prod8.svg";
import Prod9 from "../../../assets/Images/prod9.svg";

const Wrapper = styled.div`
  width: 90%;
  height: fit-content;
  padding: 5%;

  @media (max-width: 1400px){
    margin-bottom: 10vh;
  }
`;

const Menu = [
  "All Products",
  "best sellers",
  "kaftan",
  "athleisure",
  "agbada",
  "suits",
  "art",
];

const ProductMenu = [
  Prod1,
  Prod2,
  Prod3,
  Prod4,
  Prod5,
  Prod6,
  Prod7,
  Prod8,
  Prod9,
];

const ProductListing = () => {
  return (
    <>
      <Wrapper>
        <ProductHeader />
        <ListingMenu />
        <ProductCatalogue />
      </Wrapper>
    </>
  );
};

const ListingMenuWrapper = styled.div`
  width: 80%;
  margin-left: 20%;
  margin-top: 15vh;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  margin-right: 20px;
  padding: 10px;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-family: Josefin Sans;
  border-bottom: ${(props) => (props.border ? "2px solid #fd9017" : "")};
  text-transform: capitalize;
  cursor: pointer;
`;


const Text = styled.p`
font-weight: bolder;
font-family: Josefin Sans;
color: #efefef;
font-size: 2rem;
text-transform: uppercase;


@media (min-width: 1400px){
  display: none;
}
`


const ListingMenu = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <ListingMenuWrapper>
        <HorizontalFlexedWrapper
          elements={
            <>
              {Menu.map((item, index) => (
                <MenuWrapper
                  key={index}
                  onClick={() => {
                    setClicked(index);
                  }}
                  border={index === clicked}
                >
                  {item}
                </MenuWrapper>
              ))}
            </>
          }
          width={"100%"}
          height={"100%"}
        />
      </ListingMenuWrapper>
    </>
  );
};

const ProductCatalogue = () => {
  return (
    <>
    <Text>Product Listings</Text>
      <HorizontalFlexedWrapper
        align={"flex-start"}
        width={"100%"}
        height={"80vh"}
        elements={
          <>
            <LeftText>
              <LongName>Product listings</LongName>
            </LeftText>
            <ProductWrapper>
              {ProductMenu.map((prod, index) => (
                <ProductWrapping background={prod} key={index}>
                  <ProductBadge>New</ProductBadge>
                </ProductWrapping>
              ))}
              <ButtonWrappings>
                <BoxedButton width={"10%"} text={"See More"} />
              </ButtonWrappings>
            </ProductWrapper>
          </>
        }
      />
    </>
  );
};

const ButtonWrappings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh 0px 5vh 0px;
`;

const ProductWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1400px) {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 2.5%;
    row-gap: 2.5%;
  }
`;

const ProductWrapping = styled.div`
  position: relative;
  width: 30%;
  height: 350px;
  object-fit: contain;
  background: url(${(props) => props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin: 20px;

  @media (max-width: 1400px) {
    background-position: cover;
    background-size: 200%;
    height: 200px;
    width: 100%;
    margin: 0px;
  }
`;

const ProductBadge = styled.div`
  position: absolute;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  font-family: Josefin Sans;
  background-color: red;
  top: 10px;
  right: 10px;
`;

const LeftText = styled.div`
  width: 10%;
  height: 60vh;
  margin-top: 20vh;
  position: relative;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const LongName = styled.p`
  width: 80vh;
  color: #efefef;
  font-weight: bolder;
  font-size: 100px;
  display: inline-block;
  transform: rotate(270deg);
  font-family: Josefin Sans;
  height: 100%;
  text-align: center;
  position: absolute;
`;

export default ProductListing;
