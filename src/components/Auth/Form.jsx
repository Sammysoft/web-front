/* eslint-disable */

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
import { Fonts } from "../../assets/Res/fonts";
import AuthDataService from "../../Services/AuthDataService";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slices/userSlice";
import { addItemToCart } from "../../Redux/Slices/cartSlices";

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
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(Boolean);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    const payload = {
      email,
      password,
    };

    try {
      const response = await AuthDataService.login(payload);
      if (response) {
        await localStorage.setItem("928-token", response.data.data.token);
        const details = await AuthDataService.fetchDetails();
        if (details) {
          console.log(details.data.data);
          dispatch(setUser(details.data.data));
          dispatch(addItemToCart(details.data.data.cart_items));
          setLoading(false);
          toast.success("Login successful");
          navigate("/");
        } else {
          toast.error("Could not reach server, try again later");
        }
      } else {
        toast.error("Could not reach server, try again later");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <>
      {/* <Toaster toastOptions={{ style: { fontFamily: Fonts.PRIMARY } }} /> */}
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
                                        <TextField
                                          placeholder="Enter your email"
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        />
                                        {/* <HorizontalFlexedWrapper
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
                                        <TextField
                                          placeholder="Type your password"
                                          value={password}
                                          onChange={(e) =>
                                            setPassword(e.target.value)
                                          }
                                        />
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
                                                  Type your password
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
                              loading={loading}
                              onPress={() => handleLogin()}
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
  const [fullName, setFullName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  const [loading, setLoading] = React.useState(Boolean);

  const handleSignUp = async () => {
    setLoading(true);
    const payload = {
      email,
      password,
      fullName,
      phone,
    };

    console.log(payload);

    if (password === confirmPassword) {
      try {
        const response = await AuthDataService.onboard(payload);
        if (response) {
          setLoading(false);
          console.log(response);
          toast.success(response.data.message);
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    } else {
      toast.error("Passwords doesn't match");
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Toaster toastOptions={{ style: { fontFamily: Fonts.PRIMARY } }} /> */}
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
                                        <TextField
                                          placeholder="Enter full name"
                                          value={fullName}
                                          onChange={(e) =>
                                            setFullName(e.target.value)
                                          }
                                        />
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
                                                  Enter your full name
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
                                        <TextField
                                          placeholder="Enter your phone number"
                                          value={phone}
                                          onChange={(e) =>
                                            setPhone(e.target.value)
                                          }
                                        />
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
                                        <TextField
                                          placeholder={
                                            "Enter your active email address"
                                          }
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        />
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
                                          Password
                                        </Text>
                                        <TextField
                                          placeholder="Enter Secret Password"
                                          value={password}
                                          onChange={(e) =>
                                            setPassword(e.target.value)
                                          }
                                        />
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
                                                  Enter Your password
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
                                          Confirm
                                        </Text>
                                        <TextField
                                          placeholder="Confirm Password"
                                          value={confirmPassword}
                                          onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                          }
                                        />
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
                                                  Confirm Password
                                                </Text>
                                              </>
                                            }
                                          /> */}
                                        {/* </TextField> */}
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
                              loading={loading}
                              onPress={() => handleSignUp()}
                              bgColor={"#8787871A"}
                              text={"Create"}
                              width={"15%"}
                            />
                            <HorizontalFlexedWrapper
                              width={"75%"}
                              smallWidth={"100%"}
                              elements={
                                <>
                                  <Text
                                    color={"#000000"}
                                    weight={"700"}
                                    width={"90%"}
                                    align={"left"}
                                    smallWidth={"70%"}
                                    smallLine={"28px"}
                                    fontSmall={"14px"}
                                  >
                                    Already have an account?
                                  </Text>
                                  <Text
                                    color={"#FD9017"}
                                    align={"left"}
                                    cursor={"pointer"}
                                    smallWidth={"30%"}
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
  text-align: center;
  font-family: ${Fonts.PRIMARY};

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

  @media (max-width: 1400px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;
