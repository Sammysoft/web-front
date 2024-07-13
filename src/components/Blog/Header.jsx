import React from "react";
import styled from "styled-components";
import {
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";
import BlogImg from "../../assets/Images/blog1.svg";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10% 10% 2% 10%;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / BLOGS
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Catch up on the latest ‘gist’
              </Text>
              <Text color={"#696969"} width={"75%"} size={"18px"}>
                Ornare nec placerat in elit convallis rutrum pellentesque. Ac
                dis volutpat pellentesque et tortor elementum consequat.
                Venenatis elit. Ac dis volutpat pellentesque et tortor elementum
                consequat. Venenatis elit.
              </Text>
              <BlogImage background={BlogImg}></BlogImage>

            </>
          }
        />
      </Wrapper>
    </>
  );
};

const BlogImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  margin-bottom: 10px;
`;

export default Header;
