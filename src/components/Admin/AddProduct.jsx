/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../../firebase";
import {
  BoxedButton,
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";
import { Text } from "../Home/Blogs";
import { Fonts } from "../../assets/Res/fonts";
import toast from "react-hot-toast";
import ProductDataService from "../../Services/ProductDataService";

const Wrapper = styled.div`
  width: 80%;
  padding: 5%;

  @media (max-width: 1400px) {
    width: 95%;
    padding: 10px;
  }
`;

const ProductForm = () => {
  const [addCategory, setAddCategory] = React.useState(Boolean);

  const [newCatgory, setNewCategory] = React.useState();
  const [loadingAddCategory, setLoadingAddCategory] = React.useState(Boolean);
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState();

  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    try {
      const response = await ProductDataService.getCategory();
      if (response) {
        console.log(response.data.data);
        setCategories(response.data.data);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, [addCategory]);

  const handleAddCategory = async () => {
    setLoadingAddCategory(true);
    try {
      const response = await ProductDataService.createCategory({
        name: newCatgory,
      });
      if (response) {
        console.log(response.data);
        toast.success(response.data.message);
        setLoadingAddCategory(false);
        setAddCategory(!addCategory);
      } else {
        setLoadingAddCategory(false);
        toast.error(
          "Could not reach server at the moment, please try again later."
        );
      }
    } catch (error) {
      setLoadingAddCategory(false);
      toast.error(error.response.data.message);
    }
  };

  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [imageLoad, setImageLoad] = React.useState(Boolean);
  const [itemPictures, setItemPictures] = React.useState([]);
  const [productName, setProductName] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [picture, setPicture] = React.useState([]);
  const [uploadStatus, setUploadStatus] = React.useState("");
  const [productCategory, setProductCategory] = React.useState("");

  const [loading, setLoading] = useState(Boolean);

  const handleAddProduct = async () => {
    setLoading(true);
    try {
      const payload = {
        images: itemPictures,
        colors: selectedColors,
        sizeTag: selectedTags,
        name: productName,
        price: price,
        description: description,
        category: productCategory,
      };
      console.log(payload);
      const response = await ProductDataService.createProduct(payload);
      if (response) {
        console.log(response);
        toast.success(response.data.message)
        setLoading(false);
      } else {
        toast.error("Could not add product, please try again later.");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedTags([...selectedTags, value]);
    } else {
      setSelectedTags(selectedTags.filter((item) => item !== value));
    }
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((item) => item !== value));
    }
  };

  const tagList = [
    "Chest",
    "Back",
    "Sleeve Length",
    "Round Sleeve",
    "Lenght",
    "Waist",
    "Sit/hips",
    "Laps",
    "Length",
    "Inseam",
    "Ankle",
  ];

  const colorList = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
    "White",
    "Gray",
    "Cyan",
  ];

  const pick = React.useRef(null);

  const handlePictureChange = (e) => {
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    const uploadableFile = Array.from(e.target.files).map((files) => files);
    if (fileArray.length === 5 || fileArray.length === 6) {
      setPicture((prevImages) => prevImages.concat(fileArray));
      uploadFile(uploadableFile);
    } else {
      toast.error("Images should be about 5 or 6");
    }
  };

  const uploadFile = (file) => {
    console.log(file);
    setImageLoad(true);
    if (picture == null) {
      return null;
    } else {
      file.map((image) => {
        const imageRef = ref(
          getStorage(),
          `images/928-apparrels-${Math.random + v4()}`
        );
        let promise = [];
        const uploadTask = uploadBytesResumable(imageRef, image);
        promise.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadStatus(`${Math.round(progress)}%`);
            switch (snapshot.state) {
              case "paused":
                setUploadStatus("Paused");
                break;
              case "running":
                break;
            }
          },
          (error) => {
            toast.error(
              "Sorry, upload denied at the moment, Please try again later!"
            );
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setItemPictures((prevImages) => prevImages.concat(downloadURL));
              }
            );
          }
        );
        Promise.all(promise).then(() => {
          toast.success("Images added, proceed!");
          setImageLoad(false);
        });
      });
    }
  };

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
                        Product Name
                      </Text>
                      <TextField
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
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
                        Description
                      </Text>
                      <TextField
                        placeholder="Enter the description of the product"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter specifics about the product
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
                        placeholder="Product tags (e.g, #Sleek and classy, #elegant and strong)"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                      />
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Enter word tags (e.g, #gowns, #long sleeves)
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
                        Color Options
                      </Text>
                      <GridWrapper>
                        {colorList.map((color, index) => (
                          <CheckboxWrapper key={index}>
                            <input
                              value={color}
                              type="checkbox"
                              onChange={handleColorChange}
                            />
                            {color}
                          </CheckboxWrapper>
                        ))}
                      </GridWrapper>
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Please Select
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
                        Product Images
                      </Text>
                      <BoxedButton
                        onPress={() => {
                          pick.current.click();
                        }}
                        width={"70%"}
                        smallWidth={"70%"}
                        text={imageLoad ? uploadStatus : "Add Images"}
                      />
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Upload images (Not more than 5mb per image)
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
          multiple
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
                        Price ($)
                      </Text>
                      <TextField
                        placeholder="How much would you like to sell this prodcut?"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                How much are you selling this product?
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
                        Category
                      </Text>
                      <HorizontalFlexedWrapper
                        width={"70%"}
                        elements={
                          <>
                            {addCategory ? (
                              <>
                                <TextField
                                  placeholder="Enter New Category Name"
                                  value={newCatgory}
                                  onChange={(e) =>
                                    setNewCategory(e.target.value)
                                  }
                                />
                                <BoxedButton
                                  loading={loadingAddCategory}
                                  onPress={() => handleAddCategory()}
                                  text={"Done"}
                                  width={"15%"}
                                  smallWidth={"15%"}
                                />
                              </>
                            ) : (
                              <>
                                <SelectField
                                  width={"80%"}
                                  value={productCategory}
                                  onChange={(e) =>
                                    setProductCategory(e.target.value)
                                  }
                                >
                                  <option value={""} disabled>
                                    {"Select Category"}
                                  </option>
                                  {categories.length > 0 &&
                                    categories.map((category, index) => (
                                      <option key={index} value={category.id}>
                                        {category.name}
                                      </option>
                                    ))}
                                </SelectField>
                                <BoxedButton
                                  onPress={() => setAddCategory(!addCategory)}
                                  text={"Add"}
                                  width={"15%"}
                                  smallWidth={"15%"}
                                />
                              </>
                            )}
                          </>
                        }
                      />
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Select Category
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
                        Size Tags
                      </Text>
                      <GridWrapper>
                        {tagList.map((tag, index) => (
                          <CheckboxWrapper key={index}>
                            <input
                              type="checkbox"
                              value={tag}
                              onChange={handleCheckboxChange}
                            />
                            {tag}
                          </CheckboxWrapper>
                        ))}
                      </GridWrapper>
                      {/* <HorizontalFlexedWrapper
                          width={"50%"}
                          height={"100%"}
                          smallWidth={"70%"}
                          elements={
                            <>
                              <Text fontSmall={"11px"} smallLine={"22px"}>
                                Select options for sizes
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
              text={"Upload Product"}
              width={"20%"}
              onPress={() => handleAddProduct()}
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
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  background: transparent;
  text-align: center;

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;

const SelectField = styled.select`
  width: ${(props) => (props.width ? props.width : "70%")};
  height: 100%;
  border-bottom: 1px solid #000000;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none; /* Removes all borders */
  border-bottom: 2px solid #000; /* Initial bottom border, hidden */
  outline: none; /* Removes the default outline on focus */
  padding: 8px 0; /* Adjust padding as needed */
  font-family: ${Fonts.PRIMARY};
  background: transparent;
  option {
    background-color: #ffffff;
    font-family: ${Fonts.PRIMARY};
  }

  option:checked {
    background-color: #fd9017;
  }

  &:focus {
    border-bottom: 2px solid #000; /* Adds a visible bottom border on focus */
  }

  &:active {
    border-bottom: 2px solid #000; /* Ensures the bottom border remains on active state */
  }

  @media (max-width: 1400px) {
    font-size: 14px;
  }
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

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  margin-top: 10px;

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #fd9017;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: #fd9017;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 6px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const GridWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gaps: 30px;
  row-gaps: 30px;
  height: fit-content;
`;

export default ProductForm;
