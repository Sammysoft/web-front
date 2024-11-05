/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";

const Wrapper = styled.div`
  // margin-top: 15vh;
  width: 80%;
  margin: 15vh 10% 2% 10%;

  @media (max-width: 900px){
    // margin-top: 20vh;
    margin: 10vh 10% 2% 10%;
  }
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / CHECKOUT
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Proceed to checkout
              </Text>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

export default Header;
