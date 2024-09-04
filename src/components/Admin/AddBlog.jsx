/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { HorizontalFlexedWrapper, VerticalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";
import { BoxedButton } from "../Elements";
import toast from "react-hot-toast";
import { storage } from "../../firebase";
import { Fonts } from "../../assets/Res/fonts";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";
import BlogDataService from "../../Services/BlogDataService";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;

  @media (max-width: 1400px) {
    width: 95%;
    padding: 10px;
  }
`;

const AddBlog = () => {
  const [imageLoad, setImageLoad] = React.useState(Boolean);
  const [picture, setPicture] = React.useState("");
  const [uploadStatus, setUploadStatus] = React.useState("");

  const [title, setTitle] = React.useState("");
  const [post, setPost] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [loading, setLoading] = React.useState(Boolean);

  const pick = React.useRef(null);

  const uploadFile = (pickFile) => {
    setImageLoad(true);
    if (pickFile == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `images/${pickFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(Math.round(progress) + "% ");
          setUploadStatus(`${Math.round(progress)}%`);
          switch (snapshot.state) {
            case "paused":
              setUploadStatus("Paused");
              break;
            case "running":
              // setUploadStatus("Uploading...");
              break;
          }
        },
        (error) => {
          alert("Sorry, upload denied at the moment, Please try again later!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            toast.success(`Image uploaded 👍. please proceed!`);
            setPicture(downloadURL);
            setImageLoad(false);
          });
        }
      );
    }
  };

  const handlePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const handleAddPost = async () => {
    setLoading(true);
    try {
      const payload = {
        thumbnail: picture,
        title,
        post,
        tags,
      };

      const response = await BlogDataService.createBlog(payload);
      if (response) {
        console.log(response);
        toast.success(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const handleAddTags = (e)=>{
    setTags((prev) => [...prev, e.target.value])
  }

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
                      <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
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
                      <TextField
                        value={tags}
                        onChange={(e) =>
                         handleAddTags(e)
                        }
                      />
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
                      <BoxedButton
                        onPress={() => {
                          pick.current.click();
                        }}
                        width={"70%"}
                        smallWidth={"70%"}
                        text={imageLoad ? uploadStatus : "Add Blog Image"}
                      />
                      {/* <TextField /> */}
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
        <input
          onChange={(e) => {
            handlePictureChange(e);
          }}
          ref={pick}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
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
                  align={"flex-start"}
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
                      <TextAreaField
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                      />
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
          elements={
            <BoxedButton
              loading={loading}
              text={"Make Post"}
              width={"20%"}
              onPress={() => handleAddPost()}
            />
          }
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
