/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../../Elements";

import Left from "../../../assets/Icons/svg/chevron-left.svg";
import Right from "../../../assets/Icons/svg/chevron-right.svg";

import HomeHero from "../../../assets/Images/home_header.svg";
import MobileHero from "../../../assets/Images/home_mobile_img.svg";
import { Text } from "../Blogs";
import { Colors } from "../../../assets/Res/fonts";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  height: 60vh;
  width: 90%;
  padding-top: 30vh;
  margin: 0px 5% 0px 5%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  height: 60vh;
  width: 90%;
  padding-top: 15vh;
  margin: 0px 5% 0px 5%;

  @media (min-width: 900px) {
    display: none;
  }
`;

const BoldText = styled.p`
  font-weight: 700;
  font-family: Poppins;
  font-size: 4rem;
  text-align: left;
  color: ${Colors.DEEP_BLUE};
  width: 100%;

  @media (max-width: 900px) {
    font-size: 1.5rem;
    margin-top: 0px;
    color: black;
  }
`;

const LightText = styled.p`
  font-weight: 600;
  font-family: Poppins;
  font-size: 3rem;
  text-align: left;
  width: 100%;
  color: ${Colors.DEEP_BLUE};
  text-transform: capitalize;
`;

const SimpleText = styled.div`
  font-weight: 400;
  font-family: Poppins;
  font-size: 1.7rem;
  text-align: left;
  width: 75%;
  line-height: 3rem;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          align={"center"}
          justify={"space-between"}
          width={"100%"}
          elements={
            <>
              <VerticalFlexedWrapper
                justify={"flex-start"}
                align={"flex-start"}
                width={"55%"}
                height={"100%"}
                elements={
                  <>
                    <BoldText>
                      <i>African Tailoring</i>
                    </BoldText>
                    <LightText>Timeless - Universal Appeal</LightText>
                    <SimpleText>
                      Unlock the confidence that only premium fashion can
                      deliver with our exclusive collection.
                    </SimpleText>
                    <StyledButton
                      onPress={() => navigate("/product")}
                      text={"Shop now >"}
                      color={"#ffffff"}
                      bgColor={Colors.DEEP_BLUE}
                      width={"20%"}
                    />
                  </>
                }
              />
              <OverLayImage />
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
          onPress={() => navigate("/product")}
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

// const BoldText = styled.p`
//   font-size: 5rem;
//   font-family: Poppins;
//   font-weight: 700;
//   color: #000000;
//   // font-style: italize;
//   text-align: left;
//   text-transform: capitalize;

//   @media (max-width: 900px) {
//     font-size: 1.5rem;
//     margin-top: 0px;
//   }
// `;

const OverLayImage = () => {
  return (
    <>
      <HorizontalFlexedWrapper
        elements={
          <>
            <OverLayWrapper>
              <OverLayInnerWrapper>
                <ImageWrapper image={HomeHero} height={"100%"} width={"100%"} />
              </OverLayInnerWrapper>
            </OverLayWrapper>
          </>
        }
        height={"100%"}
        width={"40%"}
      />
    </>
  );
};

export default Header;
