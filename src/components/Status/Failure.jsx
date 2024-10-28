/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { ImageWrapper, StyledButton, VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";

import FailureIcon from "../../assets/Icons/svg/cancel.svg";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;
  height: 50vh;
  margin-top: 10vh;

  @media (max-width: 1400px) {
    width: 90%;
    height: 70vh;
    margin: 5%;
    margin-top: 10vh;
  }
`;

const Failure = () => {
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          mobileHeight={"100%"}
          mobileWidth={"100%"}
          height={"100%"}
          justify={"center"}
          width={"100%"}
          align={"center"}
          elements={
            <>
              {/* {loading === true && <Text>Verifying, please wait...</Text>}
              {loading === false && ( */}
              <>
                <ImageWrapper
                  image={FailureIcon}
                  width={"50%"}
                  height={"30%"}
                />
                <Text>Payment Failed</Text>
                <StyledButton
                  onPress={() => navigate("/checkout")}
                  text={"Try again"}
                  bgColor={"#FD9017"}
                  color={"#FFFFFF"}
                  width={'20%'}
                />
              </>
              {/* )} */}
            </>
          }
        />
      </Wrapper>
    </>
  );
};

export default Failure;
