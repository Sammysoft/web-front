import React from "react";

import styled from "styled-components";
import { HorizontalFlexedWrapper, ImageWrapper } from "../Elements";

import LogoSVG from "../../assets/Icons/svg/logo-black.svg";
import PersonSVG from "../../assets/Icons/svg/person-black.svg";
import ChartSVG from "../../assets/Icons/svg/chart-black.svg";
import HarmbuggerSVG from "../../assets/Icons/svg/harmbugger.svg";

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

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 90vw;
  height: 10vh;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0px 5vw 0px 5vw;

  @media (min-width: 1400px) {
    display: none;
  }
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

      <MobileWrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          elements={
            <>
              <ImageWrapper image={LogoSVG} width={"80px"} height={"80px"} />
              <HorizontalFlexedWrapper
                width={"45%"}
                elements={
                  <>
                    <ImageWrapper
                      image={PersonSVG}
                      width={"30px"}
                      height={"30px"}
                    />
                    <LoginText>Login</LoginText>
                    <ImageWrapper
                      image={ChartSVG}
                      width={"30px"}
                      height={"30px"}
                    />
                    <LoginText>0</LoginText>
                    <ImageWrapper
                      image={HarmbuggerSVG}
                      width={"30px"}
                      height={"30px"}
                    />
                  </>
                }
              />
            </>
          }
        />
      </MobileWrapper>
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
            <div onClick={() => navigate("/checkout")}>
              <ImageWrapper image={ChartSVG} height={"30px"} width={"30px"} />
            </div>

            <CountText>0</CountText>
          </>
        }
      />
    </>
  );
};

export default NavBar;
