import React from "react";
import styled from "styled-components";
import { HorizontalFlexedWrapper, VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";
import { BoxedButton } from "../Elements";
import { Fonts } from "../../assets/Res/fonts";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;

  @media (max-width: 1400px) {
    width: 95%;
    padding: 10px;
  }
`;

const AddBlog = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
          elements={
            <>
              <SelectWrap>
                <HorizontalFlexedWrapper
                  width={"100%"}
                  height={"100%"}
                  elements={
                    <>
                      <Text
                        width={"20%"}
                        height={"50%"}
                        align={"left"}
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Blog Title
                      </Text>
                      <TextField />
                        {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter your full name
                              </Text>
                            </>
                          }
                        />
                      </TextField> */}
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
          elements={
            <>
              <SelectWrap>
                <HorizontalFlexedWrapper
                  width={"100%"}
                  height={"100%"}
                  elements={
                    <>
                      <Text
                        width={"20%"}
                        height={"50%"}
                        align={"left"}
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Tags
                      </Text>
                      <TextField />
                        {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter your full name
                              </Text>
                            </>
                          }
                        />
                      </TextField> */}
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}
          elements={
            <>
              <SelectWrap>
                <HorizontalFlexedWrapper
                  width={"100%"}
                  height={"100%"}
                  elements={
                    <>
                      <Text
                        width={"20%"}
                        height={"50%"}
                        align={"left"}
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Thumbnail
                      </Text>
                      <TextField />
                        {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Click to Upload
                              </Text>
                            </>
                          }
                        />
                      </TextField> */}
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <HorizontalFlexedWrapper
          align={"flex-start"}
          width={"90%"}
          height={"18%"}
          smallWidth={"100%"}

          elements={
            <>
              <SelectWrap>
                <HorizontalFlexedWrapper
                  width={"100%"}
                  height={"100%"}
                  align={'flex-start'}
                  elements={
                    <>
                      <Text
                        width={"20%"}
                        height={"50%"}
                        align={"left"}
                        smallWidth={"25%"}
                        fontSmall={"12px"}
                      >
                        Blog Post
                      </Text>
                      <TextAreaField />
                        {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter your full name
                              </Text>
                            </>
                          }
                        />
                      </TextField> */}
                    </>
                  }
                />
              </SelectWrap>
            </>
          }
        />

        <VerticalFlexedWrapper
          height={"20vh"}
          justify={"center"}
          width={"100%"}
          elements={<BoxedButton text={"Make Post"} width={"20%"} />}
        />
      </Wrapper>
    </>
  );
};

const TextField = styled.input`
  width: 70%;
  height: 100%;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  text-align: center;
  background: transparent;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }


  // @media (max-width: 1400px) {
  //   width: 65%;
  //   height: 60%;
  // }
`;

const TextAreaField = styled.textarea`
  width: 70%;
  height: 100%;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  height: 200px;
  background: transparent;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  // @media (max-width: 1400px) {
  //   width: 65%;
  //   height: 60%;
  // }
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1400px) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

export default AddBlog;
