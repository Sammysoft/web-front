/* eslint-disable */

import React, { useState, useEffect } from "react";
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
import ProductDataService from "../../../Services/ProductDataService";
import { Loader } from "semantic-ui-react";
import { Colors } from "../../../assets/Res/fonts";
import { TruncateText } from "../../../utils";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 95%;
  margin: 2.5%;

  @media (min-width: 900px) {
    display: none;
  }
`;

const ListingMenuWrapper = styled.div`
  width: 80%;
  // margin-left: 20%;
  // margin-top: 15vh;
  overflow-x: auto;
  white-space: no-wrap;

  @media (max-width: 900px) {
    display: none;
  }
`;



const Listings = ({ selectedProduct, setSelectedProduct }) => {
  console.log(selectedProduct);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(Boolean);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getCategory();
      if (response) {
        console.log(response.data.data);
        setCategories([{ name: "All Products" }, ...response.data.data]);
      } else {
        console.log("Could not get categories");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              <ListingMenuWrapper>
                <HorizontalFlexedWrapper
                  width={"100%"}
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
              </ListingMenuWrapper>
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
                      text={"BONGEE"}
                      width={"70%"}
                      list={[{ name: "BONGEE" }]}
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
                      text={"AJERE"}
                      width={"70%"}
                      list={[{ name: "AJERE" }]}
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
                      text={"RENOUVELE"}
                      list={[{ name: "RENOUVELE" }]}
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

      <MobileWrapper>
        <DropDownButton
          bgColor={"#D9D9D9"}
          list={categories}
          change={selectedProduct?.name}
          text={"All Products"}
          onSelect={(option, index) => {
            setSelectedProduct(option);
            window.scrollTo(0, 0);
          }}
        />
        <ProductWrapper>
          <ProductCard
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </ProductWrapper>
      </MobileWrapper>
    </>
  );
};

const Menu = ({ selectedProduct, setSelectedProduct }) => {
  const [clicked, setClicked] = useState("all");

  const [loading, setLoading] = useState(Boolean);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getCategory();
      if (response) {
        console.log(response.data.data);
        setCategories(response.data.data);
      } else {
        console.log("Could not get categories");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Text
        width={"15%"}
        size={"15px"}
        onClick={() => {
          setClicked("all");
          setSelectedProduct({ name: "All Products" });
        }}
        style={
          clicked === "all"
            ? {
                fontWeight: "bolder",
                cursor: "pointer",
                textTransform: "capitalize",
              }
            : { cursor: "pointer", textTransform: "capitalize" }
        }
      >
        {"All Products"}
      </Text>
      {categories &&
        categories.map((item, index) => (
          <Text
            key={index}
            width={"20%"}
            size={"15px"}
            onClick={() => {
              setClicked(index);
              setSelectedProduct(item);
            }}
            style={
              index === clicked
                ? {
                    fontWeight: "bolder",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }
                : { cursor: "pointer", textTransform: "capitalize" }
            }
          >
            {item.name}
          </Text>
        ))}
    </>
  );
};

const ProductCard = ({ selectedProduct, setSelectedProduct }) => {
  const navigate = useNavigate();
  const [ProductList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(Boolean);
  // console.log(selectedProduct?.name);

  const ProductFilteredByCategory =
    selectedProduct?.name === "All Products" ||
    selectedProduct?.name === "Best Sellers"
      ? ProductList
      : ProductList.filter((prod) => prod.category === selectedProduct?.name);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getAllProduct();
      if (response) {
        // console.log(response.data.data);
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

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getCategory();
      if (response) {
        console.log(response.data.data);
        setCategories(response.data.data);
      } else {
        console.log("Could not get categories");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchCategories();
    // setSelectedProduct({ name: "All Products" });
  }, []);

  return (
    <>
      {selectedProduct === null && ProductList && loading ? (
        <Loader active={loading} inline="centered" />
      ) : selectedProduct?.name === undefined ||
        selectedProduct?.name === "All Products" ? (
        ProductList.map((prod, index) => (
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
        ))
      ) : (
        ProductFilteredByCategory.map((prod, index) => (
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
        ))
      )}
      {/* {selectedProduct !== null &&
} */}
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

  @media (max-width: 900px) {
    background-size: 150%;
    background-position: center;
  }
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    background-position: contain;
    background-size: 100%;
    height: 55%;
    width: 100%;
    margin: 0px;
  }
`;

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

export default Listings;
