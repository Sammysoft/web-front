import React from "react";
import styled from "styled-components";
import {
  VerticalFlexedWrapper,
  HorizontalFlexedWrapper,
  StyledButton,
} from "../Elements";
import { Text } from "../Home/Blogs";

import FormImg from "../../assets/Images/signup_form.svg";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  height: 60vh;
  padding-left: 20px;
  width: 70%;
  margin: 5% 15% 10% 15%;
  background: #ffffff;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;

  @media (max-width: 1400px) {
    width: 90%;
    margin: 10% 5% 5% 5%;
    height: fit-content;
    padding: 0px;
  }
`;

export const LoginForm = () => {
  const navigate = useNavigate();
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
                      Kindly fill in your login credentials
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
                                          width={"10%"}
                                          height={"50%"}
                                          align={"left"}
                                          smallWidth={"10%"}
                                        >
                                          Email
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"70%"}
                                            height={"100%"}
                                            mobileWidth={"70%"}
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
                                          width={"10%"}
                                          height={"50%"}
                                          align={"left"}
                                          smallWidth={"10%"}
                                        >
                                          Password
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"60%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Type your password
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
                        </>
                      }
                    />
                    <Text
                      weight={"200"}
                      cursor={"pointer"}
                      align={"left"}
                      width={"90%"}
                    >
                      <i>Forgot password?</i>
                    </Text>
                    <ButtonWrap>
                      <HorizontalFlexedWrapper
                        invert={true}
                        elements={
                          <>
                            <StyledButton
                              bgColor={"#8787871A"}
                              text={"Login"}
                              width={"20%"}
                            />
                            <HorizontalFlexedWrapper
                              width={"70%"}
                              smallWidth={"100%"}
                              elements={
                                <>
                                  <Text
                                    color={"#000000"}
                                    weight={"700"}
                                    width={"80%"}
                                    align={"left"}
                                    fontSmall={"14px"}
                                    smallLine={"28px"}
                                  >
                                    Don't have an account?{" "}
                                  </Text>
                                  <Text
                                    color={"#FD9017"}
                                    align={"left"}
                                    cursor={"pointer"}
                                    fontSmall={"14px"}
                                    smallLine={"28px"}
                                    onClick={() => navigate("/signup")}
                                  >
                                    Create an account
                                  </Text>
                                </>
                              }
                            />
                          </>
                        }
                        width={"100%"}
                        height={"fit-content"}
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
        />
      </Wrapper>
    </>
  );
};

export const SignupForm = () => {
  const navigate = useNavigate();
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
                      Kindly fill in your details
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
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"70%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
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
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"70%"}
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
                                          smallWidth={"10%"}
                                        >
                                          Email
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"70%"}
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
                                          smallWidth={"10%"}
                                        >
                                          Password
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"70%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Enter Your password
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
                                          Confirm
                                        </Text>
                                        <TextField>
                                          <HorizontalFlexedWrapper
                                            width={"50%"}
                                            height={"100%"}
                                            smallWidth={"70%"}
                                            elements={
                                              <>
                                                <Text
                                                  fontSmall={"14px"}
                                                  smallLine={"28px"}
                                                >
                                                  Confirm Password
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
                        </>
                      }
                    />

                    <ButtonWrap>
                      <HorizontalFlexedWrapper
                        invert={true}
                        elements={
                          <>
                            <StyledButton
                              bgColor={"#8787871A"}
                              text={"Create"}
                              width={"15%"}
                            />
                            <HorizontalFlexedWrapper
                              width={"75%"}
                              smallWidth={'100%'}
                              elements={
                                <>
                                  <Text
                                    color={"#000000"}
                                    weight={"700"}
                                    width={"90%"}
                                    align={"left"}
                                    smallWidth={"70%"}
                                    smallLine={'28px'}
                                    fontSmall={'14px'}
                                  >
                                    Already have an account?
                                  </Text>
                                  <Text
                                    color={"#FD9017"}
                                    align={"left"}
                                    cursor={"pointer"}
                                    smallWidth={'30%'}
                                    onClick={() => navigate("/login")}
                                  >
                                    Login
                                  </Text>
                                </>
                              }
                            />
                          </>
                        }
                        width={"100%"}
                        height={"fit-content"}
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

  @media (max-width: 1400px) {
    width: 100%;
    height: 40vh;
  }
`;

const TextField = styled.div`
  width: 80%;
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
