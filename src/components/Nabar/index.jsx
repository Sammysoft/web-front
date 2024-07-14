import React from "react";

import styled from "styled-components";
import { HorizontalFlexedWrapper, ImageWrapper } from "../Elements";

import LogoSVG from "../../assets/Icons/svg/logo-black.svg";
import PersonSVG from "../../assets/Icons/svg/person-black.svg";
import ChartSVG from "../../assets/Icons/svg/chart-black.svg";

import { Fonts, Sizes } from "../../assets/Res/fonts";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 90vw;
  height: 10vh;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0px 5vw 0px 5vw;
`;

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          elements={
            <>
              <ImageWrapper image={LogoSVG} height={"150px"} width={"150px"} />
              <MenuItems navigate={navigate} />
              <MenuDetails navigate={navigate} />
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const MenuItems = ({ navigate }) => {
  return (
    <>
      <HorizontalFlexedWrapper
        width={"40%"}
        elements={
          <>
            <MenuList
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </MenuList>
            <MenuList
              onClick={() => {
                navigate("/product");
              }}
            >
              Products
            </MenuList>
            <MenuList
              onClick={() => {
                navigate("/blog");
              }}
            >
              Blog
            </MenuList>
            <MenuList onClick={() => navigate("/contact")}>Contact</MenuList>
          </>
        }
      />
    </>
  );
};

const MenuList = styled.p`
  font-family: ${Fonts.PRIMARY};
  font-size: ${Sizes.PRIMARY};
  cursor: pointer;
`;

const LoginText = styled.p`
  font-size: ${Sizes.SECONDARY};
  font-family: ${Fonts.PRIMARY};
  cursor: pointer;
`;

const CountText = styled.p`
  font-size: ${Sizes.SECONDARY};
  font-family: ${Fonts.PRIMARY};
`;

const MenuDetails = ({ navigate }) => {
  return (
    <>
      <HorizontalFlexedWrapper
        width={"10%"}
        elements={
          <>
            <ImageWrapper image={PersonSVG} height={"40px"} width={"40px"} />
            <LoginText onClick={() => navigate("/login")}>Login</LoginText>
            <ImageWrapper image={ChartSVG} height={"30px"} width={"30px"} />
            <CountText>0</CountText>
          </>
        }
      />
    </>
  );
};

export default NavBar;
