/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import ArrowDown from "../../assets/Icons/svg/arrow_down.svg";
import { Text } from "../Home/Blogs";
import { Fonts } from "../../assets/Res/fonts";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;

  @media (max-width: 900px) {
    width: 90%;
    margin: 5%;
    padding: 0%;
  }
`;

const Orders = ({ prod, index }) => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"70%"}
          smallWidth={"100%"}
          elements={
            <>
              <Text align={"left"} fontSmall={"14px"}>
                {index + 1}. {prod.user.name} ({prod.orderCart.length})
              </Text>
              <HorizontalFlexedWrapper
                width={"30%"}
                elements={
                  <>
                    <Text
                      color={
                        prod.payment_status === "complete"
                          ? "green"
                          : prod.payment_status === "open"
                          ? "#FD9017"
                          : "red"
                      }
                    >
                      {prod.payment_status === "open"
                        ? "Pending"
                        : prod.payment_status === "complete"
                        ? "Paid"
                        : "Cancelled"}
                    </Text>
                    <ImageWrapper
                      image={ArrowDown}
                      width={"20px"}
                      height={"20px"}
                    />
                  </>
                }
              />
            </>
          }
        />
        {prod.orderCart.map((item, index) => (
          <HorizontalFlexedWrapper
            key={index}
            width={"80%"}
            margin={"0% 10% 0% 0%"}
            smallWidth={"100%"}
            invert={true}
            elements={
              <>
                <ImageWrapper
                  image={item.selectedImage}
                  width={"30%"}
                  height={"100%"}
                  smallWidth={"100%"}
                  smallHeight={"25vh"}
                />
                <VerticalFlexedWrapper
                  width={"55%"}
                  height={"100%"}
                  elements={
                    <>
                      <VerticalFlexedWrapper
                        height={"40%"}
                        elements={
                          <>
                            <Text
                              weight={"800"}
                              size={"22px"}
                              align={"left"}
                              fontSmall={"14px"}
                              smallLine={"20px"}
                              style={{ padding: "5px" }}
                            >
                              {item.name}
                            </Text>
                            <Text
                              weight={"800"}
                              size={"22px"}
                              align={"left"}
                              fontSmall={"14px"}
                              smallLine={"20px"}
                              style={{ padding: "5px" }}
                            >
                              <b>${item.price}</b> X {item.quantity}
                            </Text>

                            {/* <Text
                            style={{ padding: "5px" }}
                            align={"left"}
                            fontSmall={"14px"}
                            smallLine={"20px"}
                          >
                            Thigh: 20
                          </Text>
                          <Text
                            style={{ padding: "5px" }}
                            align={"left"}
                            fontSmall={"14px"}
                            smallLine={"20px"}
                          >
                            Waist: 34
                          </Text>
                          <Text
                            style={{ padding: "5px" }}
                            align={"left"}
                            fontSmall={"14px"}
                            smallLine={"20px"}
                          >
                            Length: 49
                          </Text> */}
                            <Text
                              style={{ padding: "5px" }}
                              align={"left"}
                              fontSmall={"14px"}
                              smallLine={"20px"}
                            >
                              Color: {item.color}
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
        <Text width={"100%"} smallWidth={"100%"}>
          Total: ${prod.totalAmount}
        </Text>
        <HorizontalFlexedWrapper
          invert={true}
          width={"80%"}
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
                              Status:
                            </Text>
                            <SelectField
                              // value={""}
                              width={"80%"}
                              // onChange={}
                            >
                              <option value={"Processing Order"}>
                                {"Processing Order"}
                              </option>
                              <option value={"Package Ready"}>
                                {"Package Ready"}
                              </option>
                            </SelectField>
                          </>
                        }
                      />
                    </SelectWrap>
                  </>
                }
              />
              <Text align={"left"} color={"#FD9017"} fontSmall={"14px"}>
                {"View delivery details >>>"}
              </Text>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const ProductWrapping = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  object-fit: contain;
  background: url(${(props) =>
    props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (max-width: 900px) {
    background-position: cover;
    background-size: 200%;
    height: 65%;
    width: 100%;
    margin: 0px;
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

const TextField = styled.input`
  width: 70%;
  height: 100%;
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
  background: transparent;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  // @media (max-width: 1400px) {
  //   width: 65%;
  //   height: 60%;
  // }
`;

const TextAreaField = styled.textarea`
  width: 80%;
  height: 100%;
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

  // @media (max-width: 1400px) {
  //   width: 65%;
  //   height: 60%;
  // }
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

export default Orders;
