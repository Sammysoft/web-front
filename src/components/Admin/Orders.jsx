/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import ArrowDown from "../../assets/Icons/svg/arrow_down.svg";
import prodImage from "../../assets/Images/prod3.svg";
import { Text } from "../Home/Blogs";
import { Fonts } from "../../assets/Res/fonts";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;
`;

const Orders = ({ prod }) => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"70%"}
          elements={
            <>
              <Text align={"left"}>1. Omotayo Olubunmi (3)</Text>
              <ImageWrapper image={ArrowDown} width={"20px"} height={"20px"} />
            </>
          }
        />
        <HorizontalFlexedWrapper
          width={"80%"}
          margin={"0% 10% 0% 0%"}
          elements={
            <>
              {/* <ProductWrapping background={prod.image}></ProductWrapping> */}
              <ImageWrapper image={prod.image} width={"30%"} height={"100%"} />
              <VerticalFlexedWrapper
                width={"55%"}
                height={"100%"}
                elements={
                  <>
                    <Text
                      weight={"800"}
                      size={"22px"}
                      align={"left"}
                      style={{ padding: "5px" }}
                    >
                      {prod.name}
                    </Text>
                    <Text
                      weight={"800"}
                      size={"22px"}
                      align={"left"}
                      style={{ padding: "5px" }}
                    >
                      {prod.price}
                    </Text>

                    <Text style={{ padding: "5px" }} align={"left"}>
                      Colour: Brown
                    </Text>
                    <Text style={{ padding: "5px" }} align={"left"}>
                      Thigh: 20
                    </Text>
                    <Text style={{ padding: "5px" }} align={"left"}>
                      Waist: 34
                    </Text>
                    <Text style={{ padding: "5px" }} align={"left"}>
                      Length: 49
                    </Text>
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
                                    smallWidth={"10%"}
                                  >
                                    Status
                                  </Text>
                                  <TextField />
                                    {/* <HorizontalFlexedWrapper
                                      width={"50%"}
                                      height={"100%"}
                                      smallWidth={"70%"}
                                      elements={
                                        <>
                                          <Text
                                            fontSmall={"14px"}
                                            smallLine={"28px"}
                                          >
                                            Please Select
                                          </Text>
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

                    <Text align={"left"} color={"#FD9017"}>
                      {"View delivery details >>>"}
                    </Text>
                  </>
                }
              />
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

  @media (max-width: 1400px) {
    background-position: cover;
    background-size: 200%;
    height: 65%;
    width: 100%;
    margin: 0px;
  }
`;

const TextField = styled.input`
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

  @media (max-width: 1400px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

export default Orders;
