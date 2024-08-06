import React from "react";
import styled from "styled-components";
import {
  DropDownButton,
  VerticalFlexedWrapper,
  ImageWrapper,
} from "../../../Elements";
import { Text } from "../../../Home/Blogs";

import DropDown from "../../../../assets/Icons/svg/dropdown.svg";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10%;

  @media (max-width: 1400px) {
    margin-top: 15vh;
  }
`;

const Header = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / PRODUCTS
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
                smallLine={"28px"}
              >
                {selectedProduct && `928 ${selectedProduct?.category}`}
              </Text>
              <Text
                color={"#696969"}
                width={"60%"}
                size={"20px"}
                fontSmall={"16px"}
                smallLine={'28px'}
              >
                Ornare nec placerat in elit convallis rutrum pellentesque. Ac
                dis volutpat pellentesque et tortor elementum consequat.
                Venenatis elit. Ac dis volutpat pellentesque et tortor elementum
                consequat. Venenatis elit.{" "}
              </Text>
              <DropDownButton
                width={"14%"}
                smallWidth={'65%'}
                text={"Change Currency"}
                bgColor={"#D9D9D9"}
                Icon={
                  <ImageWrapper
                    image={DropDown}
                    width={"20%"}
                    height={"30px"}
                  />
                }
              />
            </>
          }
          width={"100%"}
          height={"fit-content"}
        />

        <br />
      </Wrapper>
    </>
  );
};

export default Header;
