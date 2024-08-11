/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10% 10% 2% 10%;

  @media (max-width: 1400px) {
    margin-top: 15vh;
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
                HOME / ADMIN
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Admin Controls
              </Text>
              <Text
                color={"#696969"}
                width={"75%"}
                size={"18px"}
                smallLine={"28px"}
                fontSmall={'14px'}
              >
                Ornare nec placerat in elit convallis rutrum pellentesque. Ac
                dis volutpat pellentesque et tortor elementum consequat.
                Venenatis elit. Ac dis volutpat pellentesque et tortor elementum
                consequat. Venenatis elit.
              </Text>
            </>
          }
        />
      </Wrapper>
    </>
  );
};

export default Header;
