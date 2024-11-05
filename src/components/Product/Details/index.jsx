/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import {
  DropDownButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../../Elements";
import { Text } from "../../Home/Blogs";

import Right from "../../../assets/Icons/svg/dropdown-right.svg";
import BackIcon from "../../../assets/Icons/svg/back-icon.svg";

import { useNavigate } from "react-router-dom";
import { Fonts } from "../../../assets/Res/fonts";
import ProductDataService from "../../../Services/ProductDataService";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loadUser } from "../../../Redux/Slices/userSlice";
import { addItemToCart } from "../../../Redux/Slices/cartSlices";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 15% 10%;
  height: fit-content;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 90%;
  margin: 5%;
  height: fit-content;

  @media (min-width: 900px) {
    display: none;
  }
`;

const ListingMenuWrapper = styled.div`
  width: 100%;
  // margin-left: 20%;
  // margin-top: 15vh;
  overflow-x: auto;
  white-space: no-wrap;

  @media (max-width: 900px) {
    height: 25%;
  }
`;

const ProductDetail = ({ selectedProduct, setSelectedProduct }) => {
  const [ProductList, setProductList] = useState([]);
  const [loading, setLoading] = useState(Boolean);
  const [DisplayProduct, setDisplayProduct] = useState({});
  // console.log(selectedProduct, ProductList);

  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  // console.log(productId);

  const fetchAProducts = async () => {
    try {
      setLoading(true);
      const response = await ProductDataService.getAProduct(productId);
      if (response) {
        console.log("product", response.data.data);
        setDisplayProduct(response.data.data);
        // setProductList(response.data.data);
        // setDisplayProduct(response.data.data.find(
        //   (product) =>
        //     product?.description === selectedProduct?.details &&
        //     product?.price === selectedProduct?.price
        // ))
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
    fetchAProducts();
  }, [productId]);

  const navigate = useNavigate();

  let [count, setCount] = useState(1);

  const handleIncrease = () => {
    count = count + 1;
    setCount(count);
  };

  const handleDecrease = () => {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  };

  const [selectedSizes, setSelectedSizes] = useState();
  const [orderType, setOrderType] = useState("Retail Order");
  const [color, setColor] = useState();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    setLoading(true);
    console.log(orderType, color, selectedSizes);
    if (!orderType || !color || !selectedSizes) {
      toast.error("Please select all order choices");
      setLoading(false);
    } else {
      try {
        const payload = [
          {
            orderType,
            quantity: count,
            id: DisplayProduct.id,
            sizes: selectedSizes,
            color: color,
            selectedImage: DisplayProduct.images[0],
            price: Number(DisplayProduct.price),
          },
        ];
        const response = await ProductDataService.addProductToCart(payload);
        if (response) {
          // console.log(response.data.data.cart_items);
          dispatch(addItemToCart(response.data.data.cart_items));
          dispatch(loadUser());
          toast.success(response.data.message);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          justify={"flex-start"}
          elements={
            <>
              <Text width={"20%"}>
                {selectedProduct === null ? "My Cart (3)" : ""}
              </Text>
              <HorizontalFlexedWrapper
                onClick={() => navigate("/product")}
                width={"5%"}
                height={"fit-content"}
                justify={"flex-start"}
                elements={
                  <>
                    <ImageWrapper
                      image={BackIcon}
                      width={"30px"}
                      height={"30px"}
                    />
                    <Text color="#000000">{"Back"}</Text>
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
                      text={"BONGEE"}
                      list={[{ name: "BONGEE" }]}
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
                      text={"AGERE"}
                      list={[{ name: "AGERE" }]}
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

              {DisplayProduct.images && (
                <ProductWrapper>
                  <ProductImage
                    background={`'${DisplayProduct?.images[0]}'`}
                  ></ProductImage>
                  <ListingMenuWrapper>
                    <HorizontalFlexedWrapper
                      elements={
                        <>
                          {DisplayProduct?.images?.map((img, index) => (
                            <ImageWrapper
                              margin={"0px 40px 0px 0px"}
                              key={index}
                              image={img}
                              width={"22%"}
                              height={"100%"}
                            />
                          ))}
                        </>
                      }
                      width={"100%"}
                      height={"100%"}
                    />
                  </ListingMenuWrapper>

                  <Text size={"40px"} weight={"900"} align={"left"}>
                    {DisplayProduct?.name} - ${DisplayProduct?.price}
                  </Text>
                  <ProductDescWrapper>
                    <Text
                      color="#696969"
                      size={"25px"}
                      width={"100%"}
                      align={"left"}
                      style={{ textTransform: "uppercase" }}
                    >
                      product description
                    </Text>
                    <Text
                      width={"100%"}
                      align={"justify"}
                      style={{ justify: "justify" }}
                      size={"16px"}
                      color="#696969"
                    >
                      {DisplayProduct?.description}
                    </Text>
                  </ProductDescWrapper>
                  <VerticalFlexedWrapper
                    align={"flex-start"}
                    elements={
                      <>
                        <HorizontalFlexedWrapper
                          align={"flex-start"}
                          width={"100%"}
                          height={"18%"}
                          elements={
                            <>
                              <SelectWrap>
                                <HorizontalFlexedWrapper
                                  width={"100%"}
                                  height={"100%"}
                                  elements={
                                    <>
                                      <Text
                                        width={"20%"}
                                        height={"50%"}
                                        align={"left"}
                                        smallWidth={"40%"}
                                      >
                                        Order Type:
                                      </Text>
                                      <SelectField
                                        value={orderType}
                                        width={"80%"}
                                        onChange={(e) =>
                                          setOrderType(e.target.value)
                                        }
                                      >
                                        <option value={"Retail Order"}>
                                          {"Retail Order"}
                                        </option>
                                        <option value={"Beespoke Order"}>
                                          {"Beespoke Order"}
                                        </option>
                                      </SelectField>
                                    </>
                                  }
                                />
                              </SelectWrap>
                            </>
                          }
                        />

                        <HorizontalFlexedWrapper
                          align={"flex-start"}
                          width={"100%"}
                          height={"18%"}
                          elements={
                            <>
                              <SelectWrap>
                                <HorizontalFlexedWrapper
                                  width={"100%"}
                                  height={"100%"}
                                  elements={
                                    <>
                                      <Text
                                        width={"10%"}
                                        height={"50%"}
                                        align={"left"}
                                        smallWidth={"40%"}
                                      >
                                        Color
                                      </Text>
                                      <SelectField
                                        width={"80%"}
                                        onChange={(e) =>
                                          setColor(e.target.value)
                                        }
                                      >
                                        <option value={null}>
                                          {"Select Color"}
                                        </option>
                                        {DisplayProduct?.colors?.map(
                                          (col, index) => (
                                            <option key={index} value={col}>
                                              {col}
                                            </option>
                                          )
                                        )}
                                      </SelectField>
                                    </>
                                  }
                                />
                              </SelectWrap>
                            </>
                          }
                        />
                        {orderType === "Beespoke Order" &&
                          DisplayProduct?.sizeTag.map((tag, index) => (
                            <HorizontalFlexedWrapper
                              key={index}
                              align={"flex-start"}
                              width={"100%"}
                              height={"18%"}
                              elements={
                                <>
                                  <SelectWrap>
                                    <HorizontalFlexedWrapper
                                      width={"100%"}
                                      height={"100%"}
                                      elements={
                                        <>
                                          <Text
                                            width={"10%"}
                                            height={"50%"}
                                            align={"left"}
                                            smallWidth={"40%"}
                                          >
                                            {tag}
                                          </Text>
                                          <TextField
                                            placeholder={`Please enter the size`}
                                          />
                                        </>
                                      }
                                    />
                                  </SelectWrap>
                                </>
                              }
                            />
                          ))}

                        {orderType === "Retail Order" && (
                          <HorizontalFlexedWrapper
                            align={"flex-start"}
                            width={"100%"}
                            height={"18%"}
                            elements={
                              <>
                                <SelectWrap>
                                  <HorizontalFlexedWrapper
                                    width={"100%"}
                                    height={"100%"}
                                    elements={
                                      <>
                                        <Text
                                          width={"20%"}
                                          height={"50%"}
                                          align={"left"}
                                          smallWidth={"40%"}
                                        >
                                          Size:
                                        </Text>
                                        <SelectField
                                          width={"80%"}
                                          onChange={(e) =>
                                            setSelectedSizes(e.target.value)
                                          }
                                        >
                                          <option value={"XL"}>
                                            {"XL (Extra Large)"}
                                          </option>
                                          <option value={"L"}>
                                            {"L (Large)"}
                                          </option>
                                          <option value={"M"}>
                                            {"M (Medium)"}
                                          </option>
                                          <option value={"S"}>
                                            {"S (Small)"}
                                          </option>
                                          <option value={"XS"}>
                                            {"XS (Extra Small)"}
                                          </option>
                                        </SelectField>
                                      </>
                                    }
                                  />
                                </SelectWrap>
                              </>
                            }
                          />
                        )}

                        <HorizontalFlexedWrapper
                          justify={"space-between"}
                          align={"center"}
                          margin={"10px"}
                          width={"40%"}
                          height={"100%"}
                          elements={
                            <>
                              <WrappedBox width={"35%"} smallWidth={"20%"}>
                                <HorizontalFlexedWrapper
                                  width={"100%"}
                                  height={"fit-content"}
                                  elements={
                                    <>
                                      <StyledButton
                                        padding={"0px"}
                                        width={"30%"}
                                        bgColor={"transparent"}
                                        text={"-"}
                                        onPress={() => handleDecrease()}
                                      />
                                      <Text
                                        line={"0px"}
                                        padding={"0px 0px 0px 0px"}
                                      >
                                        {count}
                                      </Text>
                                      <StyledButton
                                        padding={"0px"}
                                        width={"30%"}
                                        text={"+"}
                                        onPress={() => handleIncrease()}
                                      />
                                    </>
                                  }
                                />
                              </WrappedBox>
                              <StyledButton
                                bgColor={"#D6D6D6"}
                                text={"Add to cart"}
                                width={"35%"}
                                loading={loading}
                                onPress={handleAddToCart}
                              />
                            </>
                          }
                        />
                      </>
                    }
                    width={"100%"}
                    height={"50vh"}
                  />
                </ProductWrapper>
              )}
            </>
          }
        />
      </Wrapper>

      <MobileWrapper>
        <HorizontalFlexedWrapper
          onClick={() => navigate("/product")}
          width={"5%"}
          height={"fit-content"}
          justify={"flex-start"}
          elements={
            <>
              <ImageWrapper image={BackIcon} width={"30px"} height={"30px"} />
              <Text color="#000000">{"Back"}</Text>
            </>
          }
        />
        {DisplayProduct.images && (
          <ProductWrapper>
            <ProductImage
              background={`'${DisplayProduct?.images[0]}'`}
            ></ProductImage>

            <ListingMenuWrapper>
              <HorizontalFlexedWrapper
                elements={
                  <>
                    {DisplayProduct?.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        style={{
                          objectFit: "contain",
                          height: "100%",
                          width: "40%",
                          marginRight: 20,
                        }}
                      />
                    ))}
                  </>
                }
                width={"100%"}
                height={"25%"}
                smallHeight={"100%"}
              />
            </ListingMenuWrapper>

            <Text size={"40px"} weight={"900"} align={"left"}>
              {DisplayProduct?.name} - ${DisplayProduct?.price}
            </Text>
            <ProductDescWrapper>
              <Text
                color="#696969"
                size={"25px"}
                width={"100%"}
                align={"left"}
                style={{ textTransform: "uppercase" }}
              >
                product description
              </Text>
              <Text
                width={"100%"}
                align={"justify"}
                style={{ justify: "justify" }}
                size={"16px"}
                color={"#696969"}
                fontSmall={"14px"}
                smallLine={"28px"}
              >
                {DisplayProduct?.description}
              </Text>
            </ProductDescWrapper>
            <VerticalFlexedWrapper
              align={"flex-start"}
              elements={
                <>
                  <HorizontalFlexedWrapper
                    align={"flex-start"}
                    width={"100%"}
                    height={"18%"}
                    elements={
                      <>
                        <SelectWrap>
                          <HorizontalFlexedWrapper
                            width={"100%"}
                            height={"100%"}
                            elements={
                              <>
                                <Text
                                  width={"10%"}
                                  height={"50%"}
                                  align={"left"}
                                  smallWidth={"40%"}
                                >
                                  Order Type:
                                </Text>
                                <SelectField
                                  width={"80%"}
                                  value={orderType}
                                  onChange={(e) => setOrderType(e.target.value)}
                                >
                                  <option value={"Retail Order"}>
                                    {"Retail Order"}
                                  </option>
                                  <option value={"Beespoke Order"}>
                                    {"Beespoke Order"}
                                  </option>
                                </SelectField>
                              </>
                            }
                          />
                        </SelectWrap>
                      </>
                    }
                  />

                  <HorizontalFlexedWrapper
                    align={"flex-start"}
                    width={"100%"}
                    height={"18%"}
                    elements={
                      <>
                        <SelectWrap>
                          <HorizontalFlexedWrapper
                            width={"100%"}
                            height={"100%"}
                            elements={
                              <>
                                <Text
                                  width={"10%"}
                                  height={"50%"}
                                  align={"left"}
                                  smallWidth={"40%"}
                                >
                                  Color
                                </Text>
                                <SelectField
                                  width={"80%"}
                                  onChange={(e) => setColor(e.target.value)}
                                >
                                  <option value={null}>{"Select Color"}</option>
                                  {DisplayProduct?.colors?.map((col, index) => (
                                    <option key={index} value={col}>
                                      {col}
                                    </option>
                                  ))}
                                </SelectField>
                              </>
                            }
                          />
                        </SelectWrap>
                      </>
                    }
                  />

                  {orderType === "Beespoke Order" &&
                    DisplayProduct?.sizeTag.map((tag, index) => (
                      <HorizontalFlexedWrapper
                        key={index}
                        align={"flex-start"}
                        width={"100%"}
                        height={"18%"}
                        elements={
                          <>
                            <SelectWrap>
                              <HorizontalFlexedWrapper
                                width={"100%"}
                                height={"100%"}
                                elements={
                                  <>
                                    <Text
                                      width={"10%"}
                                      height={"50%"}
                                      align={"left"}
                                      smallWidth={"40%"}
                                    >
                                      {tag}
                                    </Text>
                                    <TextField
                                      placeholder={`Please enter the size`}
                                    />
                                  </>
                                }
                              />
                            </SelectWrap>
                          </>
                        }
                      />
                    ))}

                  {orderType === "Retail Order" && (
                    <>
                      <HorizontalFlexedWrapper
                        align={"flex-start"}
                        width={"100%"}
                        height={"18%"}
                        elements={
                          <>
                            <SelectWrap>
                              <HorizontalFlexedWrapper
                                width={"100%"}
                                height={"100%"}
                                elements={
                                  <>
                                    <Text
                                      width={"20%"}
                                      height={"50%"}
                                      align={"left"}
                                      smallWidth={"40%"}
                                    >
                                      Size:
                                    </Text>
                                    <SelectField
                                      width={"80%"}
                                      onChange={(e) =>
                                        setSelectedSizes(e.target.value)
                                      }
                                    >
                                      <option value={null}>
                                        {"Select your size"}
                                      </option>
                                      <option value={"XL"}>
                                        {"XL (Extra Large)"}
                                      </option>
                                      <option value={"L"}>{"L (Large)"}</option>
                                      <option value={"M"}>
                                        {"M (Medium)"}
                                      </option>
                                      <option value={"S"}>{"S (Small)"}</option>
                                      <option value={"XS"}>
                                        {"XS (Extra Small)"}
                                      </option>
                                    </SelectField>
                                  </>
                                }
                              />
                            </SelectWrap>
                          </>
                        }
                      />
                    </>
                  )}

                  <VerticalFlexedWrapper
                    margin={"10px"}
                    justify={"center"}
                    align={"center"}
                    width={"100%"}
                    height={"100%"}
                    elements={
                      <>
                        <WrappedBox width={"35%"} smallWidth={"50%"}>
                          <HorizontalFlexedWrapper
                            width={"100%"}
                            height={"fit-content"}
                            elements={
                              <>
                                <StyledButton
                                  padding={"0px"}
                                  width={"30%"}
                                  bgColor={"transparent"}
                                  text={"-"}
                                  onPress={() => handleDecrease()}
                                />
                                <Text line={"0px"} padding={"0px 0px 0px 0px"}>
                                  {count}
                                </Text>
                                <StyledButton
                                  padding={"0px"}
                                  width={"30%"}
                                  text={"+"}
                                  onPress={() => handleIncrease()}
                                />
                              </>
                            }
                          />
                        </WrappedBox>
                        <StyledButton
                          bgColor={"#D6D6D6"}
                          width={"10%"}
                          text={"Add to cart"}
                          loading={loading}
                          onPress={handleAddToCart}
                        />
                      </>
                    }
                  />
                </>
              }
              width={"100%"}
              height={"fit-content"}
            />
          </ProductWrapper>
        )}
      </MobileWrapper>
    </>
  );
};

const WrappedBox = styled.div`
  text-align: center;
  border: 2px solid #000000;
  padding-right: 10px;
  font-family: Josefin Sans;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: #000000;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: fit-content;

  @media (max-width: 900px) {
    font-size: ${(props) => (props.fontSmall ? props.fontSmall : "14px")};
    width: ${(props) => (props.smallWidth ? props.smallWidth : "60%")};
    padding: 5px;
  }
`;

const TextField = styled.input`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #000000;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  background: transparent;
  text-align: center;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const SelectField = styled.select`
  width: ${(props) => (props.width ? props.width : "70%")};
  height: 100%;
  border-bottom: 1px solid #000000;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  background: transparent;
  option {
    background-color: #ffffff;
    font-family: ${Fonts.PRIMARY};
  }

  option:checked {
    background-color: #fd9017;
  }

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const ProductImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    height: 40vh;
  }
`;

const ProductDescWrapper = styled.p`
  width: 100%;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 100%;
  height: 100%;
`;

const ProductWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  height: fit-content;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default ProductDetail;
