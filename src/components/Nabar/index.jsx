import React from "react";

import styled from "styled-components";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
} from "../Elements";

import LogoSVG from "../../assets/Icons/svg/logo-black.svg";
import PersonSVG from "../../assets/Icons/svg/person-black.svg";
import ChartSVG from "../../assets/Icons/svg/chart-black.svg";
import HarmbuggerSVG from "../../assets/Icons/svg/harmbugger.svg";

import { Fonts, Sizes } from "../../assets/Res/fonts";
import { useNavigate } from "react-router-dom";
import { Text } from "../Home/Blogs";

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
  const [toggle, setToggle] = React.useState(Boolean);
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
                    <LoginText onClick={() => navigate("/login")}>
                      Login
                    </LoginText>
                    <ImageWrapper
                      image={ChartSVG}
                      width={"30px"}
                      height={"30px"}
                    />
                    <LoginText>0</LoginText>
                    <ImageWrapper
                      onClick={() => {
                        setToggle(!toggle);
                      }}
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
      {toggle ? (
        <MobileNavCapsule toggle={toggle} setToggle={setToggle} />
      ) : null}
    </>
  );
};

const MobileNavCapsule = ({ setToggle, toggle }) => {
  const navigate = useNavigate();
  return (
    <>
      <NavCapsuleWrapper>
        <Cancel onClick={() => setToggle(!toggle)}>
          <Text align={"right"} fontSmall={"30px"}>
            x
          </Text>
        </Cancel>
        <BoxedButton text={"Home"} onPress={() => navigate("/")} />
        <BoxedButton text={"Products"} onPress={() => navigate("/product")} />
        <BoxedButton text={"Blog"} onPress={() => navigate("/blog")} />
        <BoxedButton text={"Contact"} onPress={() => navigate("/contact")} />
      </NavCapsuleWrapper>
    </>
  );
};

const NavCapsuleWrapper = styled.div`
  width: 100%;
  height: 40vh;
  background: #ffffff;
  position: fixed;
  top: 0px;
  right: 0px;
  padding: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Cancel = styled.div`
  width: 100%;
`;

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
        // align={"center"}
        // justify={"center"}
        elements={
          <>
            <ImageWrapper image={PersonSVG} height={"30px"} width={"30px"} />
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
