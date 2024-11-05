/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10% 10% 2% 10%;

  @media (max-width: 900px) {
    margin-top: 10vh;
  }
`;

export const LoginHeader = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / LOGIN
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Login to your account
              </Text>
              <Text
                color={"#696969"}
                width={"70%"}
                size={"18px"}
                fontSmall={"16px"}
                smallLine={"28px"}
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

export const SignUpHeader = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / ONBOARD
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Create your free account
              </Text>
              <Text
                color={"#696969"}
                width={"70%"}
                size={"18px"}
                fontSmall={"14px"}
                smallLine={"28px"}
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
