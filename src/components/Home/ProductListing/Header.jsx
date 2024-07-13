import React from "react";
import styled from "styled-components";
import { HorizontalFlexedWrapper } from "../../Elements";

import productH1 from "../../../assets/Images/product-h1.svg";
import productH2 from "../../../assets/Images/product-h2.svg";

const Wrapper = styled.div`
  width: 100%;
`;

const ProductHeader = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          elements={
            <>
              <CustomImageWrapper background={productH1}>
                {/* <ImageWrapper image={productH1} width={"50%"} height={"100%"} /> */}
                <Text>Product listing 01</Text>
              </CustomImageWrapper>
              <CustomImageWrapper background={productH2}>
                {/* <ImageWrapper image={productH2} width={"50%"} height={"100%"} /> */}
                <Text>Product listing 02</Text>
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
`;

const Text = styled.p`
  font-weight: 900;
  font-family: Josefin Sans;
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  color: #FFFFFF;
  font-size: 2rem;
`;

export default ProductHeader;
