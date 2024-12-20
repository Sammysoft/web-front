/* eslint-disable */

import React, { useEffect } from "react";

import styled from "styled-components";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
} from "../Elements";

import LogoSVG from "../../assets/Icons/svg/logo-black.svg";
import PersonSVG from "../../assets/Icons/svg/person-black.svg";
import ChartSVG from "../../assets/Icons/svg/chart-black.svg";
import HarmbuggerSVG from "../../assets/Icons/svg/harmbugger.svg";

import { Colors, Fonts, Sizes } from "../../assets/Res/fonts";
import { useNavigate } from "react-router-dom";
import { Text } from "../Home/Blogs";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../Redux/Slices/userSlice";
import toast from "react-hot-toast";
import { addEllipsis } from "../../utils";
import AuthDataService from "../../Services/AuthDataService";
import { clearCart } from "../../Redux/Slices/cartSlices";

const Wrapper = styled.div`
  width: 90vw;
  height: 10vh;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0px 5vw 0px 5vw;

  @media (max-width: 900px) {
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

  @media (min-width: 900px) {
    display: none;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(Boolean);
  const dispatch = useDispatch();

  const {
    user: { profile },
  } = useSelector((state) => state.user);

  const { items } = useSelector((state) => state.cart);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    dispatch(clearUser());
    dispatch(clearCart());
    localStorage.clear();
  };

  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          elements={
            <>
              <HorizontalFlexedWrapper
                width={"50%"}
                elements={
                  <>
                    <ImageWrapper
                      image={LogoSVG}
                      height={"150px"}
                      width={"150px"}
                      onClick={() => handleLogout()}
                    />
                    <MenuItems navigate={navigate} />
                  </>
                }
              />
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
              <ImageWrapper
                onClick={() => {
                  setToggle(!toggle);
                }}
                image={HarmbuggerSVG}
                width={"30px"}
                height={"30px"}
              />
              <ImageWrapper
                image={LogoSVG}
                width={"80px"}
                height={"80px"}
                onClick={() => handleLogout()}
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
        <BoxedButton
          text={"Home"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/")}
        />
        <BoxedButton
          text={"Products"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/product")}
        />
        <BoxedButton
          text={"Blog"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/blog")}
        />
        <BoxedButton
          text={"Contact"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/contact")}
        />
        <BoxedButton
          text={"My Cart"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/checkout")}
        />
        <BoxedButton
          text={"Login"}
          margin={"10px 0px 10px 0px"}
          onPress={() => navigate("/login")}
        />
      </NavCapsuleWrapper>
    </>
  );
};

const NavCapsuleWrapper = styled.div`
  width: 100%;
  height: fit-content;
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
        width={"60%"}
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
            <MenuList
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </MenuList>
            <MenuList></MenuList>
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
  color: ${Colors.DEEP_BLUE};
  font-weight: 500;
`;

const LoginText = styled.p`
  font-size: ${Sizes.SECONDARY};
  font-family: ${Fonts.PRIMARY};
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
`;

const CountText = styled.p`
  font-size: ${Sizes.SECONDARY};
  font-family: ${Fonts.PRIMARY};
`;

const MenuDetails = ({ navigate }) => {
  const {
    user: { profile },
  } = useSelector((state) => state.user);

  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <HorizontalFlexedWrapper
        width={"12%"}
        // align={"center"}
        // justify={"center"}
        elements={
          <>
            <ImageWrapper image={PersonSVG} height={"30px"} width={"30px"} />
            {profile?.fullName && (
              <LoginText>{addEllipsis(profile?.fullName, 8)}</LoginText>
            )}
            {!profile?.fullName && (
              // <LoginText onClick={() => navigate("/login")}>Login</LoginText>
              <StyledButton
                text={"Login"}
                bgColor={Colors.DEEP_BLUE}
                color={"#ffffff"}
                // width={"10%"}
                onPress={() => navigate("/login")}
              />
            )}
            <div onClick={() => navigate("/checkout")}>
              <ImageWrapper image={ChartSVG} height={"30px"} width={"30px"} />
            </div>

            <CountText>{items.length}</CountText>
          </>
        }
      />
    </>
  );
};

export default NavBar;
