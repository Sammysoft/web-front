/* eslint-disable */

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
import DropDownIcon from "../../../assets/Icons/svg/dropdown.svg";
import BackIcon from "../../../assets/Icons/svg/back-icon.svg";

import Prod1 from "../../../assets/Images/prod1.svg";
import Prod2 from "../../../assets/Images/prod2.svg";
import Prod3 from "../../../assets/Images/prod3.svg";
import Prod4 from "../../../assets/Images/prod4.svg";
import Prod5 from "../../../assets/Images/prod5.svg";
import Prod6 from "../../../assets/Images/prod6.svg";
import Prod7 from "../../../assets/Images/prod7.svg";
import Prod8 from "../../../assets/Images/prod8.svg";
import { useNavigate } from "react-router-dom";
import { Fonts } from "../../../assets/Res/fonts";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 90%;
  margin: 5%;

  @media (min-width: 1400px) {
    display: none;
  }
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

const ProductDetail = ({ selectedProduct, setSelectedProduct }) => {
  console.log(selectedProduct);

  const navigate = useNavigate();

  // const navigate = useNavigate();

  const DisplayProduct = ProductListing.find(
    (product) =>
      product?.details === selectedProduct?.details &&
      product?.price === selectedProduct?.price
  );

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
                <ProductImage background={DisplayProduct?.image}></ProductImage>

                <HorizontalFlexedWrapper
                  elements={
                    <>
                      <ImageWrapper
                        image={DisplayProduct?.image}
                        width={"22%"}
                        height={"100%"}
                      />
                      <ImageWrapper
                        image={DisplayProduct?.image}
                        width={"22%"}
                        height={"100%"}
                      />
                      <ImageWrapper
                        image={DisplayProduct?.image}
                        width={"22%"}
                        height={"100%"}
                      />
                      <ImageWrapper
                        image={DisplayProduct?.image}
                        width={"22%"}
                        height={"100%"}
                      />
                    </>
                  }
                  width={"100%"}
                  height={"25%"}
                />
                <Text size={"40px"} weight={"900"} align={"left"}>
                  {DisplayProduct?.name} - {DisplayProduct?.price}
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
                    Enim dictum mauris amet eget nunc in. In massa proin urna
                    nulla sed purus ultricies cras elementum. Amet mattis porta
                    sit tortor tempor et. Auctor mauris aenean at quis sagittis.
                    Viverra eget mauris mattis sit elementum donec aliquet odio.
                    Arcu est enim eget at. Sit leo ipsum consectetur sit
                    volutpat bibendum rhoncus facilisi. Volutpat purus viverra
                    ante vel fermentum amet turpis in lacus. Fringilla nunc
                    nulla et orci dui lacus. Vel semper dui euismod nisi
                    iaculis. Enim odio dignissim arcu feugiat egestas aliquam.
                    Dis dolor lorem amet ut. Egestas aliquet blandit
                    sollicitudin volutpat. Sem feugiat nibh amet erat volutpat
                    ut. Tempus viverra et sit etiam massa etiam eu viverra. A
                    tempor ultrices lectus scelerisque amet. Vitae mattis felis
                    et velit sit sit sed tincidunt hac. Tempor enim donec est in
                    urna tincidunt sed. Leo consequat sed pellentesque purus
                    facilisi. Risus tempor congue orci felis nulla pellentesque
                    habitant enim. Pulvinar tortor aliquam dictum fermentum
                    neque viverra posuere amet. Quam adipiscing tellus eget cras
                    amet dapibus magna. Vulputate amet nec purus sit posuere.
                    Sed sed massa massa quisque ligula egestas.
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
                                    >
                                      Order Type:
                                    </Text>
                                    <TextField />
                                      {/* <HorizontalFlexedWrapper
                                        width={"30%"}
                                        height={"100%"}
                                        elements={
                                          <>
                                            <Text>Retail Order</Text>
                                            <ImageWrapper
                                              image={DropDownIcon}
                                              width={30}
                                              height={30}
                                            />
                                          </>
                                        }
                                      />
                                    </TextField> */}
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
                                    >
                                      Colour
                                    </Text>
                                    <TextField />
                                      {/* <HorizontalFlexedWrapper
                                        width={"30%"}
                                        height={"100%"}
                                        elements={
                                          <>
                                            <Text>Wine Only</Text>
                                          </>
                                        }
                                      />
                                    </TextField> */}
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
                                    >
                                      Thigh
                                    </Text>
                                    <TextField />
                                      {/* <HorizontalFlexedWrapper
                                        width={"30%"}
                                        height={"100%"}
                                        elements={
                                          <>
                                            <Text>Please Select</Text>
                                            <ImageWrapper
                                              image={DropDownIcon}
                                              width={30}
                                              height={30}
                                            />
                                          </>
                                        }
                                      />
                                    </TextField> */}
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
                                      align={"left"}
                                      width={"10%"}
                                      height={"50%"}
                                    >
                                      Waist
                                    </Text>
                                    <TextField />
                                      {/* <HorizontalFlexedWrapper
                                        width={"30%"}
                                        height={"100%"}
                                        elements={
                                          <>
                                            <Text>Please Select</Text>
                                            <ImageWrapper
                                              image={DropDownIcon}
                                              width={30}
                                              height={30}
                                            />
                                          </>
                                        }
                                      />
                                    </TextField> */}
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
                                      width={"20%"}
                                      height={"50%"}
                                      align={"left"}
                                    >
                                      Trouser Length
                                    </Text>
                                    <TextField />
                                      {/* <HorizontalFlexedWrapper
                                        width={"30%"}
                                        height={"100%"}
                                        elements={
                                          <>
                                            <Text>Please Select</Text>
                                            <ImageWrapper
                                              image={DropDownIcon}
                                              width={30}
                                              height={30}
                                            />
                                          </>
                                        }
                                      />
                                    </TextField> */}
                                  </>
                                }
                              />
                            </SelectWrap>
                          </>
                        }
                      />
                    </>
                  }
                  width={"100%"}
                  height={"50vh"}
                />
              </ProductWrapper>
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
        <ProductWrapper>
          <ProductImage background={DisplayProduct?.image}></ProductImage>

          <HorizontalFlexedWrapper
            elements={
              <>
                <ImageWrapper
                  image={DisplayProduct?.image}
                  width={"22%"}
                  height={"100%"}
                />
                <ImageWrapper
                  image={DisplayProduct?.image}
                  width={"22%"}
                  height={"100%"}
                />
                <ImageWrapper
                  image={DisplayProduct?.image}
                  width={"22%"}
                  height={"100%"}
                />
                <ImageWrapper
                  image={DisplayProduct?.image}
                  width={"22%"}
                  height={"100%"}
                />
              </>
            }
            width={"100%"}
            height={"25%"}
            smallHeight={"40%"}
          />
          <Text size={"40px"} weight={"900"} align={"left"}>
            {DisplayProduct?.name} - {DisplayProduct?.price}
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
              Enim dictum mauris amet eget nunc in. In massa proin urna nulla
              sed purus ultricies cras elementum. Amet mattis porta sit tortor
              tempor et. Auctor mauris aenean at quis sagittis. Viverra eget
              mauris mattis sit elementum donec aliquet odio. Arcu est enim eget
              at. Sit leo ipsum consectetur sit volutpat bibendum rhoncus
              facilisi. Volutpat purus viverra ante vel fermentum amet turpis in
              lacus. Fringilla nunc nulla et orci dui lacus. Vel semper dui
              euismod nisi iaculis. Enim odio dignissim arcu feugiat egestas
              aliquam. Dis dolor lorem amet ut. Egestas aliquet blandit
              sollicitudin volutpat. Sem feugiat nibh amet erat volutpat ut.
              Tempus viverra et sit etiam massa etiam eu viverra. A tempor
              ultrices lectus scelerisque amet. Vitae mattis felis et velit sit
              sit sed tincidunt hac. Tempor enim donec est in urna tincidunt
              sed. Leo consequat sed pellentesque purus facilisi. Risus tempor
              congue orci felis nulla pellentesque habitant enim. Pulvinar
              tortor aliquam dictum fermentum neque viverra posuere amet. Quam
              adipiscing tellus eget cras amet dapibus magna. Vulputate amet nec
              purus sit posuere. Sed sed massa massa quisque ligula egestas.
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
                              <TextField />
                              {/* <HorizontalFlexedWrapper
                                  width={"30%"}
                                  height={"100%"}
                                  smallWidth={"100%"}
                                  elements={
                                    <>
                                      <Text>Retail Order</Text>
                                      <ImageWrapper
                                        image={DropDownIcon}
                                        width={30}
                                        height={30}
                                      />
                                    </>
                                  }
                                />
                              </TextField> */}
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
                                Colour
                              </Text>
                              <TextField />
                              {/* <HorizontalFlexedWrapper
                                  width={"30%"}
                                  height={"100%"}
                                  smallWidth={"100%"}
                                  elements={
                                    <>
                                      <Text>Wine Only</Text>
                                    </>
                                  }
                                />
                              </TextField> */}
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
                                Thigh
                              </Text>
                              <TextField />
                              {/* <HorizontalFlexedWrapper
                                  width={"30%"}
                                  height={"100%"}
                                  smallWidth={"100%"}
                                  elements={
                                    <>
                                      <Text>Please Select</Text>
                                      <ImageWrapper
                                        image={DropDownIcon}
                                        width={30}
                                        height={30}
                                      />
                                    </>
                                  }
                                />
                              </TextField> */}
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
                                align={"left"}
                                width={"10%"}
                                height={"50%"}
                                smallWidth={"40%"}
                              >
                                Waist
                              </Text>
                              <TextField />
                              {/* <HorizontalFlexedWrapper
                                  width={"30%"}
                                  height={"100%"}
                                  smallWidth={"100%"}
                                  elements={
                                    <>
                                      <Text>Please Select</Text>
                                      <ImageWrapper
                                        image={DropDownIcon}
                                        width={30}
                                        height={30}
                                      />
                                    </>
                                  }
                                />
                              </TextField> */}
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
                                width={"20%"}
                                height={"50%"}
                                align={"left"}
                                smallWidth={"40%"}
                              >
                                Trouser Length
                              </Text>
                              <TextField />
                              {/* <HorizontalFlexedWrapper
                                  width={"30%"}
                                  height={"100%"}
                                  smallWidth={"100%"}
                                  elements={
                                    <>
                                      <Text>Please Select</Text>
                                      <ImageWrapper
                                        image={DropDownIcon}
                                        width={30}
                                        height={30}
                                      />
                                    </>
                                  }
                                />
                              </TextField> */}
                            </>
                          }
                        />
                      </SelectWrap>
                    </>
                  }
                />
              </>
            }
            width={"100%"}
            height={"50vh"}
          />
        </ProductWrapper>
      </MobileWrapper>
    </>
  );
};

const TextField = styled.input`
  width: 80%;
  height: 60%;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  text-align: center;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  @media (max-width: 1400px) {
    width: 65%;
    height: 60%;
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

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export default ProductDetail;
