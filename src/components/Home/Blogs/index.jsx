/* eslint-disable */

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
import BlogDataService from "../../../Services/BlogDataService";
import { addEllipsis } from "../../../utils";
import { Colors } from "../../../assets/Res/fonts";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  // background: url(${background});
  // background-repeat: no-repeat;
  // background-size: 100%;
  // background-position: center;
  padding: 10%;
  height: fit-content;

  @media (max-width: 1400px) {
    // background-position: contain;
    // background-size: cover;
    padding: 5% 0% 5% 0%;
    width: 100%;
  }
`;

const BoldText = styled.p`
  font-weight: 700;
  font-family: Poppins;
  font-size: 1.5rem;
  text-align: left;
  color: ${Colors.DEEP_BLUE};
  width: 100%;
`;

const LightText = styled.p`
  font-weight: 500;
  font-family: Poppins;
  font-size: 1.2rem;
  text-align: left;
  width: 100%;
  text-transform: capitalize;
`;

const SimpleText = styled.div`
  font-weight: 300;
  font-family: Poppins;
  font-size: 1rem;
  text-align: center;
  width: 90%;
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
                  <LightText>928 Blog</LightText>
                  <BoldText>Catch up with the latest gists</BoldText>
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
  padding: 0px 0px 0px 5%;
`;

export const Text = styled.div`
  font-family: Poppins;
  font-size: ${(props) => (props.size ? props.size : "18px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: ${(props) => (props.padding ? props.padding : "20px 0px 20px 0px")};
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
  const [reLoad, setReload] = React.useState();
  const [Blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await BlogDataService.getAllBlogs();
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, [reLoad]);

  const navigate = useNavigate();

  return (
    <>
      <BlogCardWrapper>
        {Blogs &&
          Blogs.map((blog, index) => (
            <BlogCapsule key={index}>
              <VerticalFlexedWrapper
                width={"100%"}
                elements={
                  <>
                    <ImageWrapper
                      fit={"cover"}
                      height={"70%"}
                      width={"90%"}
                      image={blog.thumbnail}
                      rounded={true}
                    />
                    <HorizontalFlexedWrapper
                      height={"30%"}
                      width={"90%"}
                      elements={
                        <>
                          <VerticalFlexedWrapper
                            width={"100%"}
                            elements={
                              <>
                                <BoldText>{blog.title}</BoldText>
                                <Text
                                  color={"#696969"}
                                  size={"18px"}
                                  width={"100%"}
                                  align={"left"}
                                  line={"24px"}
                                  fontSmall={"14px"}
                                  smallLine={"20px"}
                                >
                                  {addEllipsis(blog.post, 120)}
                                </Text>
                              </>
                            }
                          />
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
              <BoxedButton
                width={"10%"}
                text={"View More  >"}
                onPress={() => navigate("/blog")}
              />
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
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;

  @media (max-width: 1400px) {
    width: 95%;
    margin: 2vh 2.5% 2vh 2.5%;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 10px 0px 10px 0px;
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
