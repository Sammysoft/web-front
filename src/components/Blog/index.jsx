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
`;

const BlogBody = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          invert={true}
          elements={
            <>
              <VerticalFlexedWrapper
                width={"70%"}
                mobileWidth={"100%"}
                height={"fit-content"}
                elements={
                  <>
                    <Text
                      color={"#000000"}
                      size={"25px"}
                      weight={"800"}
                      align={"left"}
                      smallLine={'30px'}
                    >
                      Choosing the right corporate style: A modern noob’s
                      approach
                    </Text>
                    <Text
                      color={"#696969"}
                      size={"16px"}
                      align={"justify"}
                      fontSmall={"14px"}
                      smallLine={"28px"}
                    >
                      Enim dictum mauris amet eget nunc in. In massa proin urna
                      nulla sed purus ultricies cras elementum. Amet mattis
                      porta sit tortor tempor et. Auctor mauris aenean at quis
                      sagittis. Viverra eget mauris mattis sit elementum donec
                      aliquet odio. Arcu est enim eget at. Sit leo ipsum
                      consectetur sit volutpat bibendum rhoncus facilisi.
                      Volutpat purus viverra ante vel fermentum amet turpis in
                      lacus.........
                    </Text>
                  </>
                }
              />
              <StyledButton
                width={"20%"}
                bgColor={"#D6D6D6"}
                text={"Read More"}
                color={"#000000"}
              />
            </>
          }
          width={"100%"}
          height={"fit-content"}
        />
      </Wrapper>
      <BlogCards />
    </>
  );
};

export default BlogBody;
