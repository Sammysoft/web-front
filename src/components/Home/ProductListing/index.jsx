/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductHeader from "./Header";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
} from "../../Elements";

import Prod1 from "../../../assets/Images/prod1.svg";
import Prod2 from "../../../assets/Images/prod2.svg";
import Prod3 from "../../../assets/Images/prod3.svg";
import Prod4 from "../../../assets/Images/prod4.svg";
import Prod5 from "../../../assets/Images/prod5.svg";
import Prod6 from "../../../assets/Images/prod6.svg";
import Prod7 from "../../../assets/Images/prod7.svg";
import Prod8 from "../../../assets/Images/prod8.svg";
import Prod9 from "../../../assets/Images/prod9.svg";
import ProductDataService from "../../../Services/ProductDataService";
import { Loader } from "semantic-ui-react";
import { Colors } from "../../../assets/Res/fonts";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  // padding: 5%;

  @media (max-width: 1400px) {
    margin-bottom: 10vh;
    width: 100%;
    // padding: 20px;
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
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <ProductHeader />
        {/* <ListingMenu /> */}
        <ProductCatalogue />
      </Wrapper>
      <ButtonWrappings>
        <BoxedButton
          smallWdth={"30%"}
          text={"View More >"}
          width={"15%"}
          onPress={() => navigate("/product")}
        />
      </ButtonWrappings>
    </>
  );
};

const ListingMenuWrapper = styled.div`
  width: 80%;
  margin-left: 20%;
  margin-top: 15vh;
  overflow-x: auto;
  white-space: no-wrap;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  margin-right: 20px;
  padding: 5px 10px;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-family: Poppins;
  border-bottom: ${(props) => (props.border ? "2px solid #fd9017" : "")};
  text-transform: capitalize;
  cursor: pointer;
  white-space: no-wrap;
`;

const Text = styled.p`
  font-family: Poppins;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 5px 10px 5px 7.5%;

  @media (max-width: 1400px) {
    padding: 5px 10px 5px 10px;
  }
`;

const BoldText = styled.p`
  color: #003459;
  width: 85%;
  font-family: Poppins;
  font-size: 1.6rem;
  text-transform: capitalize;
  padding: 5px 10px 5px 7.5%;
  font-weight: 700;
  text-transform: capitalize;
  marigin-left: 7.5%;

  @media (max-width: 1400px) {
    margin-left: 0px;
    padding: 5px 10px 5px 10px;
    width: 100%;
  }
`;

const ListingMenu = () => {
  const [clicked, setClicked] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await ProductDataService.getCategory();
      if (response) {
        // console.log(response.data.data);
        setCategories([{ name: "All Products" }, ...response.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <ListingMenuWrapper>
        <HorizontalFlexedWrapper
          elements={
            <>
              {categories.length > 0 &&
                categories.map((item, index) => (
                  <MenuWrapper
                    key={index}
                    onClick={() => {
                      setClicked(index);
                    }}
                    border={index === clicked}
                  >
                    {item.name}
                  </MenuWrapper>
                ))}
            </>
          }
          width={"auto"}
          height={"100%"}
        />
      </ListingMenuWrapper>
    </>
  );
};

const ProductCatalogue = () => {
  const [ProductList, setProductList] = useState([]);
  const [loading, setLoading] = useState(Boolean);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getAllProduct();
      if (response) {
        console.log(response.data.data);
        setProductList(response.data.data);
        setLoading(false);
      } else {
        console.log("error has occured");
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Text>What's New?</Text>
      <BoldText>Take a look at other collections</BoldText>
      <HorizontalFlexedWrapper
        align={"flex-start"}
        width={"100%"}
        smallWidth={"100%"}
        height={"fit-content"}
        elements={
          <>
            <ProductWrapper>
              {loading ? (
                <Loader inline={"centered"} active={loading} />
              ) : (
                <>
                  {ProductList?.length > 0 &&
                    ProductList?.map((prod, index) => (
                      <ProductWrapping key={index}>
                        <VerticalFlexedWrapper
                          onClick={() =>
                            navigate(
                              `/products/${prod.name}?category=${prod.category}&name=${prod.name}&price=${prod.price}&details=${prod.description}&id=${prod.id}`
                            )
                          }
                          justify={"space-between"}
                          width={"100%"}
                          smallWidth={"100%"}
                          align={"flex-start"}
                          height={"100%"}
                          elements={
                            <>
                              <ProductBadge
                                background={`'${prod.images[0]}'`}
                              ></ProductBadge>
                              <LightText>{prod?.category}</LightText>
                              <SolidText>{prod?.name}</SolidText>
                              <SolidText>${prod?.price}</SolidText>
                              <AddToCartBtn>ADD TO CART {">"}</AddToCartBtn>
                            </>
                          }
                        />
                      </ProductWrapping>
                    ))}
                  {ProductList?.length <= 0 && (
                    <>
                      <Text>No Products yet!</Text>
                    </>
                  )}
                </>
              )}
            </ProductWrapper>
          </>
        }
      />
    </>
  );
};

const AddToCartBtn = styled.div`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.ORANGE};
  text-align: right;
  width: 100%;
`;

const LightText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  text-align: left;
  opacity: 0.7;
  font-weight: 600;
  // line-height: 0px;
`;

const SolidText = styled.p`
  font-family: Poppins;
  font-size: 1.2rem;
  text-align: left;
  font-weight: 700;
`;

const ButtonWrappings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh 0px 5vh 0px;
`;

const ProductWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: fit-content;
  row-gap: 20px;
  column-gap: 20px;
  margin-bottom: 10vh;
  margin-left: 7.5%;

  @media (max-width: 1400px) {
    width: 100%;
    display: grid;
    grid-template-columns: 48% 48%;
    column-gap: 2.5%;
    row-gap: 1%;
    margin-left: 0px;
  }
`;

const ProductWrapping = styled.div`
  width: 20%;
  height: 350px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px #8787871a, 0px 0px 40px 10px #87878717,
    0px 0px 60px 15px #8787870d, 0px 0px 80px 20px #87878703,
    0px 0px 100px 25px #87878700;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ProductBadge = styled.div`
  // object-fit: cover;
  background: url(${(props) =>
    props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  @media (max-width: 1400px) {
    background-position: contain;
    background-size: 100%;
    height: 55%;
    width: 100%;
    margin: 0px;
  }
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
