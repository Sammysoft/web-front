/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/Res/fonts";
import { HorizontalFlexedWrapper, VerticalFlexedWrapper } from "../Elements";
import Advert1 from "../../assets/Images/advert1.svg";
import { StyledButton } from "../Elements";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 80%;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
  margin: 10% 10% 1% 10%;
  padding: 20px 0px 0px 0px;
`;

const BoldText = styled.p`
  font-weight: 700;
  font-family: Poppins;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
`;

const LightText = styled.p`
  font-weight: 500;
  font-family: Poppins;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  text-transform: capitalize;
`;

const SimpleText = styled.div`
  font-weight: 300;
  font-family: Poppins;
  font-size: 1rem;
  text-align: center;
  width: 90%;
`;

const AdvertCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          invert={true}
          align={"flex-end"}
          height={"30vh"}
          smallHeight={"100%"}
          elements={
            <>
              <VerticalFlexedWrapper
                width={"100%"}
                height={"100%"}
                align={"center"}
                justify={"center"}
                elements={
                  <>
                    <DesktopWrapper>
                      <BoldText>
                        <i>Style that speaks for you</i>
                      </BoldText>
                      <LightText>
                        Make a statement without saying a word
                      </LightText>
                      {/* <SimpleText>
                        At 928 Apparels, we believe in giving you the freedom to
                        express your individuality through fashion. Discover
                        pieces that match your vibe
                      </SimpleText> */}
                      <StyledButton
                        onPress={()=> navigate('/product')}
                        text={"Explore"}
                        bgColor={"#003459"}
                        color={"#FFFFFF"}
                        width={'20%'}
                      />
                    </DesktopWrapper>
                  </>
                }
              />
              <img
                src={Advert1}
                alt="advert1"
                style={{
                  bottom: "0px",
                  width: "100%",
                  height: "auto",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              />
            </>
          }
        />
      </Wrapper>
    </>
  );
};
const DesktopWrapper = styled.div`
  width: 100%;
  height: 50%;
  justify-content: left;

  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

export default AdvertCard;
