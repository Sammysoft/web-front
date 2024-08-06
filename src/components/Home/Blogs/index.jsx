import React from "react";
import styled from "styled-components";

import background from "../../../assets/Images/blog-background.svg";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  ImageWrapper,
  VerticalFlexedWrapper,
} from "../../Elements";

import Blog1 from "../../../assets/Images/blog1.svg";
import Blog2 from "../../../assets/Images/blog2.svg";
import Blog3 from "../../../assets/Images/blog3.svg";
import Blog4 from "../../../assets/Images/blog4.svg";

import Right from "../../../assets/Icons/svg/right.svg";

const Wrapper = styled.div`
  width: 80%;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  padding: 10%;
  height: fit-content;

  @media (max-width: 1400px) {
    background-position: contain;
    background-size: cover;
    padding: 5% 0% 5% 0%;
    width: 100%;
  }
`;

const BlogItems = [
  {
    image: Blog1,
    textHead: "Choosing the right corporate style: A modern noob’s approach",
    textBody:
      "Ornare nec placerat in elit convallis rutrum pellentesque. Ac dis volut.",
  },
  {
    image: Blog2,
    textHead: "The great colour debate Flashy? Too fun?",
    textBody:
      "Ornare nec placerat in elit convallis rutrum pellentesque. Ac dis volut.",
  },
  {
    image: Blog3,
    textHead: "The great colour debate - Too Flashy? Too fun?",
    textBody:
      "Ornare nec placerat in elit convallis rutrum pellentesque. Ac dis volut.",
  },
  {
    image: Blog4,
    textHead: "Choosing the right corporate style: A modern noob’s approach",
    textBody:
      "Ornare nec placerat in elit convallis rutrum pellentesque. Ac dis volut.",
  },
];

const HomeBlogs = () => {
  return (
    <>
      <Wrapper>
        <BlogWrapper>
          <BlogHead>
            <VerticalFlexedWrapper
              width={"100%"}
              elements={
                <>
                  <Text size={"18px"} color="#fd9017">
                    928 Blog
                  </Text>
                  <Text size={"30px"} color={"#000000"} width={"25%"}>
                    Fashion tales from an 'eye' in the frenzy
                  </Text>
                  <Text width={"30%"} color={"#696969"} size={"20px"}>
                    Ornare nec placerat in elit convallis rutrum pellentesque.
                    Ac dis volutpat pellentesque et tortor elementum consequat.
                    Venenatis elit.
                  </Text>
                </>
              }
            />
          </BlogHead>
          <BlogCards />
        </BlogWrapper>
      </Wrapper>
    </>
  );
};

const BlogWrapper = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 100%;
  height: fit-content;
  opacity: 0.9;

  @media (max-width: 1400px) {
    padding: 0px;
  }
`;

const BlogHead = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  font-family: Josefin Sans;
  font-size: ${(props) => (props.size ? props.size : "18px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: 20px 0px 20px 0px;
  width: ${(props) => (props.width ? props.width : "100%")};
  line-height: ${(props) => (props.line ? props.line : "35px")};
  weight: ${(props) => (props.weight ? props.weight : "")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};

  @media (max-width: 1400px) {
    width: ${(props) => (props.smallWidth ? props.smallWidth : "100%")};
    line-height: ${(props) => (props.smallLine ? props.smallLine : "45px")};
    font-size: ${(props) => (props.fontSmall ? props.fontSmall : "18px")};
    padding: 5px 0px 5px 0px;
  }
`;

export const BlogCards = () => {
  return (
    <>
      <BlogCardWrapper>
        {BlogItems &&
          BlogItems.map((blog, index) => (
            <BlogCapsule key={index}>
              <VerticalFlexedWrapper
                width={"100%"}
                elements={
                  <>
                    <ImageWrapper
                      fit={"cover"}
                      height={"70%"}
                      width={"90%"}
                      image={blog.image}
                    />
                    <HorizontalFlexedWrapper
                      height={"30%"}
                      width={"90%"}
                      elements={
                        <>
                          <VerticalFlexedWrapper
                            width={"65%"}
                            elements={
                              <>
                                <Text
                                  color={"#000000"}
                                  size={"24px"}
                                  weight={"bolder"}
                                  width={"80%"}
                                  align={"left"}
                                  line={"30px"}
                                  smallLine={'30px'}
                                >
                                  {blog.textHead}
                                </Text>
                                <Text
                                  color={"#696969"}
                                  size={"18px"}
                                  width={"80%"}
                                  align={"left"}
                                  line={"24px"}
                                  fontSmall={'14px'}
                                  smallLine={'20px'}
                                >
                                  {blog.textBody}
                                </Text>
                              </>
                            }
                          />
                          <Next>
                            <ImageWrapper
                              image={Right}
                              width={"25%"}
                              height={"25%"}
                            />
                          </Next>
                        </>
                      }
                    />
                  </>
                }
              />
            </BlogCapsule>
          ))}
        <VerticalFlexedWrapper
          margin={"5vh 0px 5vh 0px"}
          width={"100%"}
          elements={
            <>
              <BoxedButton width={"10%"} text={"Read More"} />
            </>
          }
        />
      </BlogCardWrapper>
    </>
  );
};

const BlogCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const BlogCapsule = styled.div`
  width: 45%;
  height: 60vh;
  margin: 2vh 0px 2vh 0px;

  @media (max-width: 1400px) {
    width: 100%;
    margin: 2vh 0px 2vh 0px;
  }
`;

const Next = styled.div`
  height: 50%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #b9b7b7;
`;

export default HomeBlogs;
