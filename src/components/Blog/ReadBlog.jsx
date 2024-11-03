/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {
  VerticalFlexedWrapper,
  HorizontalFlexedWrapper,
  ImageWrapper,
} from "../Elements";
import BlogDataService from "../../Services/BlogDataService";
import { useSearchParams } from "react-router-dom";
import { Text } from "../Home/Blogs";
import BlogImg from "../../assets/Images/blog1.svg";
import { StyledButton } from "../Elements";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10% 10% 2% 10%;

  @media (max-width: 1400px) {
    margin-top: 15vh;
  }
`;

const ReadBlog = () => {
  const [searchParams] = useSearchParams();
  const thumbnail = searchParams.get("thumbnail");
  const title = searchParams.get("title");
  const _id = searchParams.get("id");

  const [Blog, setBlog] = React.useState([]);
  console.log(_id, Blog)



  const fetchBlogs = async () => {
    try {
      const response = await BlogDataService.getAllBlogs();
      setBlog(response.data.data.filter((blog)=> blog._id === _id));
      console.log(response.data.data.filter((blog)=> blog._id === _id))
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, [_id]);

  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
        justify={'center'}
        align={'center'}
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / BLOGS
              </Text>
              <Text
                color={"#2A1C03"}
                size={"50px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Catch up on the latest ‘gist’
              </Text>

              <ImageWrapper
                image={Blog[0]?.thumbnail}
                width={"100%"}
                height={"40vh"}
              ></ImageWrapper>
              <HorizontalFlexedWrapper
                invert={true}
                elements={
                  <>
                    <VerticalFlexedWrapper
                      width={"100%"}
                      mobileWidth={"100%"}
                      height={"fit-content"}
                      align={'center'}
                      elements={
                        <>
                          <Text
                            color={"#000000"}
                            size={"50px"}
                            weight={"900"}
                            align={"left"}
                            smallLine={"30px"}
                          >
                            {Blog[0]?.title}
                          </Text>
                          <Text
                            color={"#696969"}
                            size={"16px"}
                            align={"justify"}
                            fontSmall={"14px"}
                            smallLine={"28px"}

                          >
                            {Blog[0]?.post}
                          </Text>
                        </>
                      }
                    />
                    {/* <StyledButton
                      width={"20%"}
                      bgColor={"#D6D6D6"}
                      text={"Read More"}
                      color={"#000000"}
                    /> */}
                  </>
                }
                width={"100%"}
                height={"fit-content"}
              />
            </>
          }
        />
      </Wrapper>
    </>
  );
};

const BlogImage = styled.div`
  background-image: url(${(props) =>
    props.background ? props.background : ""});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  margin-bottom: 10px;
`;

export default ReadBlog;
