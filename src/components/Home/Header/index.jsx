import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
} from "../../Elements";

import Left from "../../../assets/Icons/svg/chevron-left.svg";
import Right from "../../../assets/Icons/svg/chevron-right.svg";

import HomeHero from "../../../assets/Images/home-hero.svg";
import MobileHero from "../../../assets/Images/home_mobile_img.svg";
import { Text } from "../Blogs";
import { Colors } from "../../../assets/Res/fonts";

const Wrapper = styled.div`
  height: 80vh;
  width: 90%;
  padding-top: 50vh;
  margin: 0px 5% 0px 5%;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  height: 60vh;
  width: 90%;
  padding-top: 15vh;
  margin: 0px 5% 0px 5%;

  @media (min-width: 1400px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          justify={"space-between"}
          width={"100%"}
          elements={
            <>
              <ImageWrapper image={Left} width={"2.5%"} height={"2.5%"} />
              <OverLayImage />
              <ImageWrapper image={Right} width={"2.5%"} height={"2.5%"} />
            </>
          }
        />
      </Wrapper>

      <MobileWrapper>
        <ItalizedText>
          <i>Elevate your style game</i>
        </ItalizedText>
        <BoldText>with 928 apparels</BoldText>
        <Text align={"left"} smallLine={"20px"} fontSmall={"14px"}>
          Bold looks. Sharp details. Unlock the confidence that only premium
          fashion can deliver with our exclusive collection. Shop tailored fits,
          unique designs, and elevated basics crafted to perfection.
        </Text>
        <StyledButton
          text={"Shop now"}
          bgColor={Colors.DEEP_BLUE}
          color={"#FFFFFF"}
        />
        <img
          alt="Hero Image"
          src={MobileHero}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain" }}
        />
        {/* <OverLayWrapper>
          <OverLayInnerWrapper background={HomeHero}></OverLayInnerWrapper>
        </OverLayWrapper> */}
      </MobileWrapper>
    </>
  );
};

const OverLayWrapper = styled.div`
  width: 60%;
  height: 100%;
  position: relative;

  @media (max-width: 1400px) {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

const OverLayInnerWrapper = styled.div`
  position: absolute;
  height: 70vh;
  width: 90vw;
  top: -30vh;
  right: -30vw;

  @media (max-width: 1400px) {
    height: 70vh;
    width: 100%;
    right: 0px;
    top: 0vh;
    left: 0px;
    background: url(${(props) => (props.background ? props.background : "")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 220%;
  }
`;

const ItalizedText = styled.p`
  font-size: 4rem;
  font-family: Poppins;
  font-weight: 700;
  color: #000000;
  // font-style: italize;
  text-align: left;
  text-transform: capitalize;

  @media (max-width: 1400px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const BoldText = styled.p`
  font-size: 5rem;
  font-family: Poppins;
  font-weight: 700;
  color: #000000;
  // font-style: italize;
  text-align: left;
  text-transform: capitalize;

  @media (max-width: 1400px) {
    font-size: 1.5rem;
    margin-top: 0px;
  }
`;

const OverLayImage = () => {
  return (
    <>
      <HorizontalFlexedWrapper
        elements={
          <>
            <ItalizedText>928</ItalizedText>
            <OverLayWrapper>
              <OverLayInnerWrapper>
                <ImageWrapper image={HomeHero} height={"100%"} width={"100%"} />
              </OverLayInnerWrapper>
            </OverLayWrapper>
            <ItalizedText>Apparels</ItalizedText>
          </>
        }
        height={"100%"}
        width={"50%"}
      />
    </>
  );
};

export default Header;
