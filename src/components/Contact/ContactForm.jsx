import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

import FormImg from "../../assets/Images/form_img.svg";

const Wrapper = styled.div`
  height: 60vh;
  padding-left: 20px;
  width: 70%;
  margin: 5% 15% 10% 15%;
  background: #ffffff;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;
`;

const ContactForm = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
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
                                        >
                                          Name
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            elements={
                                              <>
                                                <Text>
                                                  Enter your full name
                                                </Text>
                                                {/* <ImageWrapper
                                                  image={DropDownIcon}
                                                  width={30}
                                                  height={30}
                                                /> */}
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
                                        >
                                          Phone
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            elements={
                                              <>
                                                <Text>Enter phone number</Text>
                                                {/* <ImageWrapper
                                                  image={DropDownIcon}
                                                  width={30}
                                                  height={30}
                                                /> */}
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
                                        >
                                          Email
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            elements={
                                              <>
                                                <Text>Enter your email</Text>
                                                {/* <ImageWrapper
                                                  image={DropDownIcon}
                                                  width={30}
                                                  height={30}
                                                /> */}
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
                                        >
                                          Message
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            elements={
                                              <>
                                                <Text>Type your message</Text>
                                                {/* <ImageWrapper
                                                  image={DropDownIcon}
                                                  width={30}
                                                  height={30}
                                                /> */}
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
                        </>
                      }
                    />
                    <ButtonWrap>
                      <StyledButton
                        bgColor={"#8787871A"}
                        text={"Send message"}
                        width={"30%"}
                      />
                    </ButtonWrap>
                  </>
                }
                height={"100%"}
                width={"60%"}
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
`;

const FormImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 60vh;
  width: 40%;
`;

const TextField = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default ContactForm;
