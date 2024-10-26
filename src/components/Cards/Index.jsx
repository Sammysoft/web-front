import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/Res/fonts";
import { VerticalFlexedWrapper } from "../Elements";
import Advert1 from "../../assets/Images/advert1.svg";

const Wrapper = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: ${Colors.FAINT_ORANGE};
  margin: 5%;
  padding: 20px;
`;

const BoldText = styled.p`
  font-weight: 700;
  font-family: Poppins;
  font-size: 2rem;
`;

const LightText = styled.p`
  font-weight: 200;
  font-family: Poppins;
  font-size: 1.5rem;
  text-align: center;
  width: 50%;
`;

const AdvertCard = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <BoldText>Style that speaks for you</BoldText>
              <img
                src={Advert1}
                alt="advert1"
                style={{ bottom: "0px", width: "95%", height: "auto" }}
              />
            </>
          }
        />
      </Wrapper>
    </>
  );
};

export default AdvertCard;
