import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

import Logo from "../../assets/Icons/svg/logo-white.svg";

import Facebook from "../../assets/Icons/svg/facebook.svg";
import Youtube from "../../assets/Icons/svg/youtube.svg";
import Instagram from "../../assets/Icons/svg/instagram.svg";
import LinkedIn from "../../assets/Icons/svg/linkedin.svg";

const Wrapper = styled.div`
  width: 80%;
  background: #221602;
  padding: 5% 10% 5% 10%;
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          elements={
            <>
              <Text color="#FFFFFF" width={"100%"} weight={"800"}>
                928 APPARELS
              </Text>
              <Text
                color={"#FFFFFF"}
                weight={"900"}
                width={"100%"}
                size={"55px"}
              >
                We’d love to hear from you!
              </Text>
              <Text color={"#FFFFFF"} width={"35%"}>
                <i>
                  Tortor orci at laoreet eget consectetur et. Id amet dui
                  venenatis id proin lectus. Elementum sed ultricies at diam
                  lorem. Diam orci.
                </i>
              </Text>
              <StyledButton
                width={"20%"}
                text={"Contact Us"}
                bgColor={"#FD9017"}
                color={"#FFFFFF"}
              />
              <Text color={"#FFFFFF"} size={"14px"}>
                <i>© 2019 Lift Media, LLC</i>
              </Text>
              <Line></Line>
              <HorizontalFlexedWrapper
                elements={
                  <>
                    <ImageWrapper image={Logo} width={"20%"} height={"100px"} />
                    <HorizontalFlexedWrapper
                      width={"40%"}
                      height={"fit-content"}
                      elements={
                        <>
                          <Menu>
                            <i>Products</i>
                          </Menu>
                          <Menu>
                            <i>Blogs</i>
                          </Menu>
                          <Menu>
                            <i>Contact</i>
                          </Menu>
                        </>
                      }
                    />
                    <HorizontalFlexedWrapper
                      width={"20%"}
                      elements={
                        <>
                          <ImageWrapper
                            image={Facebook}
                            width={"20%"}
                            height={"50px"}
                          />
                          <ImageWrapper
                            image={Youtube}
                            width={"20%"}
                            height={"50px"}
                          />
                          <ImageWrapper
                            image={Instagram}
                            width={"20%"}
                            height={"50px"}
                          />
                          <ImageWrapper
                            image={LinkedIn}
                            width={"20%"}
                            height={"50px"}
                          />
                        </>
                      }
                    />
                  </>
                }
                width={"100%"}
                height={"fit-content"}
              />
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const Line = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 0.5px;
`;

const Menu = styled.div`
  color: #ffffff;
  font-family: Josefin Sans;
  font-size: 25px;
  text-align: center;
  width: 25%;
  cursor: pointer;
`;

export default Footer;
