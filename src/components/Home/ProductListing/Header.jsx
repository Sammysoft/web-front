import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  StyledButton,
  VerticalFlexedWrapper,
} from "../../Elements";

import productH1 from "../../../assets/Images/producth1.svg";
import productH2 from "../../../assets/Images/producth2.svg";

const Wrapper = styled.div`
  width: 100%;
`;

const ProductHeader = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          invert={true}
          smallWidth={"100%"}
          elements={
            <>
              <CustomImageWrapper background={productH1}>
                <WrapperText>
                  <VerticalFlexedWrapper
                    align={"center"}
                    justify={"center"}
                    elements={
                      <>
                        <BoldText>
                          <i>Ajéré</i>
                        </BoldText>
                        <LightText>CAPSULE COLLECTION</LightText>
                        <StyledButton
                          text={"Explore"}
                          bgColor={"transparent"}
                          color={"#FFFFFF"}
                          bdColor={'1px solid #FFFFFF'}
                          width={'30%'}
                        />
                      </>
                    }
                  />
                </WrapperText>
              </CustomImageWrapper>
              <CustomImageWrapper background={productH2}>
                <WrapperText>
                <VerticalFlexedWrapper
                    align={"center"}
                    justify={"center"}
                    elements={
                      <>
                        <BoldText>
                          <i>Renouvele</i>
                        </BoldText>
                        <LightText>CAPSULE COLLECTION</LightText>
                        <StyledButton
                          text={"Explore"}
                          bgColor={"transparent"}
                          color={"#FFFFFF"}
                          bdColor={'1px solid #FFFFFF'}
                          width={'30%'}
                        />
                      </>
                    }
                  />
                </WrapperText>
              </CustomImageWrapper>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const CustomImageWrapper = styled.div`
  position: relative;
  height: 40vh;
  background-image: url(${(props) =>
    props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 50%;

  @media (max-width: 1400px) {
    height: 30vh;
    width: 100%;
  }
`;

const WrapperText = styled.p`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;
  color: #ffffff;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 1rem;
  }
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

export default ProductHeader;
