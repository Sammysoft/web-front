/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;

  @media (max-width: 1400px) {
    width: 95%;
    padding: 10px;
  }
`;

const ProductForm = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Product Name
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter your full name
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />
        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Description
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter specifics about the product
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Tags
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter word tags (e.g, #gowns, #long sleeves)
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Colour Options
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Please Select
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Product Images
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Upload images (Not more than 5mb per image)
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Price ($)
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                How much are you selling this product?
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Category
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Select Category
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
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
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Size Tags
                      </Text>
                      <TextField>
                        <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Select options for sizes
                              </Text>
                            </>
                          }
                        />
                      </TextField>
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <VerticalFlexedWrapper
          height={"20vh"}
          justify={"center"}
          width={"100%"}
          elements={<BoxedButton text={"Upload Product"} width={"20%"} />}
        />
      </Wrapper>
    </>
  );
};

const TextField = styled.div`
  width: 70%;
  height: 100%;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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

export default ProductForm;
