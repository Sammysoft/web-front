/* eslint-disable */

import React from "react";
import {
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";
import styled from "styled-components";

const ProductWrapping = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  object-fit: contain;
  background: url(${(props) =>
    props.background ? props.background : props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (max-width: 1400px) {
    background-position: cover;
    background-size: 300%;
    height: 45vh;
    width: 100%;
    margin: 0px;
  }
`;

const Blog = ({ Blog }) => {
  return (
    <>
      <HorizontalFlexedWrapper
        height={"45vh"}
        width={"100%"}
        invert={true}
        elements={
          <>
            {/* <ImageWrapper image={Blog.image} width={"40%"} height={"100%"} /> */}
            <ProductWrapping background={Blog.thumbnail}></ProductWrapping>
            <VerticalFlexedWrapper
              elements={
                <>
                  <Text
                    align={"left"}
                    size={"28px"}
                    weight={"900"}
                    fontSmall={"16px"}
                    smallLine={"24px"}
                    style={{ paddingLeft: "10px" }}
                  >
                    {Blog.title}
                  </Text>
                  <Text
                    align={"justify"}
                    fontSmall={"12px"}
                    smallLine={"22px"}
                    style={{ paddingLeft: "10px" }}
                  >
                    {Blog.post}
                  </Text>
                  <HorizontalFlexedWrapper
                    style={{ paddingLeft: "10px" }}
                    width={"100%"}
                    elements={
                      <>
                        <Text
                          align={"left"}
                          width={"30%"}
                          size={"22px"}
                          color={"#FD9017"}
                          style={{ padding: "0px" }}
                        >
                          Edit
                        </Text>
                        <Text
                          align={"left"}
                          width={"65%"}
                          size={"22px"}
                          color={"#FF0D26"}
                          style={{ padding: "0px" }}
                        >
                          Delete
                        </Text>
                      </>
                    }
                  />
                </>
              }
              height={"100%"}
              width={"55%"}
            />
          </>
        }
      />
    </>
  );
};

export default Blog;
