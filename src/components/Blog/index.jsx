/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
  StyledButton,
} from "../Elements";
import { Text, BlogCards } from "../Home/Blogs";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;

  @media (max-width: 1400px){
    width: 90%;
    margin: 5%;
  }
`;

const DesktopWrapper = styled.div`
width: 100%;
`

const BlogBody = () => {
  return (
    <>
      <Wrapper>
        <BlogCards />
      </Wrapper>
      {/* <DesktopWrapper><BlogCards /></DesktopWrapper> */}
    </>
  );
};

export default BlogBody;
