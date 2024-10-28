/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

import Logo from "../../assets/Icons/svg/logo-black.svg";

import Facebook from "../../assets/Icons/svg/fb.svg";
import Youtube from "../../assets/Icons/svg/yt.svg";
import Instagram from "../../assets/Icons/svg/ig.svg";
import LinkedIn from "../../assets/Icons/svg/x.svg";
import { Colors } from "../../assets/Res/fonts";

const Wrapper = styled.div`
  width: 100%;
  background: ${Colors.PRIMARY};
  padding: 5% 10% 5% 10%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 5%;
  }
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
              <HorizontalFlexedWrapper
                elements={
                  <>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"fit-content"}
                      elements={
                        <>
                          <Menu>Home</Menu>
                          <Menu>Products</Menu>
                          <Menu>Blogs</Menu>
                          <Menu>Contact</Menu>
                        </>
                      }
                    />
                  </>
                }
                width={"100%"}
                height={"fit-content"}
              />
              <HorizontalFlexedWrapper
                margin={"40px 0px 40px 0px"}
                width={"60%"}
                elements={
                  <>
                    <ImageWrapper
                      image={Facebook}
                      width={"10%"}
                      height={"30px"}
                    />
                    <ImageWrapper
                      image={Youtube}
                      width={"10%"}
                      height={"30px"}
                    />
                    <ImageWrapper
                      image={Instagram}
                      width={"10%"}
                      height={"30px"}
                    />
                    <ImageWrapper
                      image={LinkedIn}
                      width={"10%"}
                      height={"30px"}
                    />
                  </>
                }
              />
              <Line></Line>
              {/* <Text color="#FFFFFF" width={"100%"} weight={"800"}>
                928 APPARELS
              </Text> */}
              <ImageWrapper image={Logo} width={"25%"} height={"150px"} />

              {/* <StyledButton
                mobileWidth={"40%"}
                width={"20%"}
                text={"Contact Us"}
                bgColor={"#FD9017"}
                color={"#FFFFFF"}
              /> */}
              <Text color={"#000000"} size={"14px"} fontSmall={'10px'}>
                © 2024 928apparels, All Rights Reserved
              </Text>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const Line = styled.div`
  width: 100%;
  background-color: #000000;
  height: 0.5px;
`;

const Menu = styled.div`
  color: #000000;
  font-family: Poppins;

  font-size: 25px;
  text-align: center;
  width: 25%;
  cursor: pointer;

  @media (max-width: 1400px) {
    font-size: 15px;
  }
`;

export default Footer;
