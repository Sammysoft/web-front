/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

import FormImg from "../../assets/Images/form_img.svg";
import { Fonts } from "../../assets/Res/fonts";
import toast from "react-hot-toast";

const Wrapper = styled.div`
  height: 60vh;
  padding-left: 20px;
  width: 70%;
  margin: 5% 15% 10% 15%;
  border-radius: 40px;
  background: #ffffff;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;

  @media (max-width: 900px) {
    width: 90%;
    margin: 10% 5% 5% 5%;
    height: fit-content;
    padding: 0px;
  }
`;

const ContactForm = () => {
  const handleSubmit = () => {
    toast.success("message sent successfully");
  };

  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          invert={true}
          elements={
            <>
              <VerticalFlexedWrapper
                elements={
                  <>
                    <Text
                      color={"#000000"}
                      align={"left"}
                      size={"30px"}
                      width={"90%"}
                      fontSmall={"20px"}
                      smallLine={"22px"}
                      smallWidth={"100%"}
                    >
                      Send us a message
                    </Text>
                    <HorizontalFlexedWrapper
                      width={"90%"}
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
                                          smallWidth={"10%"}
                                        >
                                          Name
                                        </Text>
                                        <TextField />
                                      </>
                                    }
                                  />
                                </SelectWrap>
                              </>
                            }
                          />
                        </>
                      }
                    />
                    <HorizontalFlexedWrapper
                      width={"90%"}
                      align={"flex-end"}
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
                                          smallWidth={"10%"}
                                        >
                                          Phone
                                        </Text>
                                        <TextField />
                                        {/* <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"60%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Enter phone number
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
                        </>
                      }
                    />
                    <HorizontalFlexedWrapper
                      width={"90%"}
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
                                          smallWidth={"10%"}
                                        >
                                          Email
                                        </Text>
                                        <TextField />
                                        {/* <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"60%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Enter your email
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
                        </>
                      }
                    />

                    <HorizontalFlexedWrapper
                      width={"90%"}
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
                                          smallWidth={"10%"}
                                        >
                                          Message
                                        </Text>
                                        <TextField />
                                        {/* <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"60%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Type your message
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
                        </>
                      }
                    />
                    <ButtonWrap>
                      <StyledButton
                        onPress={handleSubmit}
                        bgColor={"#8787871A"}
                        text={"Send message"}
                        width={"30%"}
                        smallWidth={'100%'}
                      />
                    </ButtonWrap>
                  </>
                }
                height={"100%"}
                width={"60%"}
                mobileWidth={"90%"}
              />
              <FormImage background={FormImg}></FormImage>
            </>
          }
          height={"100%"}
          width={"100%"}
        />
      </Wrapper>
    </>
  );
};

const ButtonWrap = styled.div`
  width: 90%;
  text-align: left;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 50%;
    margin-left: auto;
  }
`;

const FormImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 60vh;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 40%;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
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

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }
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

export default ContactForm;
