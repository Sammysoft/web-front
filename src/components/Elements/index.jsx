/* eslint-disable */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Loader } from "semantic-ui-react";
import { Fonts } from "../../assets/Res/fonts";

const HFWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: ${(props) => (props.height ? props.height : "fit-content")};
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  margin: ${(props) => (props.margin ? props.margin : "")};

  @media (max-width: 900px) {
    flex-direction: ${(props) => (props.invert ? "column" : "row")};
    height: ${(props) =>
      props.smallHeight ? props.smallHeight : "fit-content"};
    width: ${(props) => (props.smallWidth ? props.smallWidth : props.width)};
  }
`;

export const HorizontalFlexedWrapper = ({
  justify,
  elements,
  width,
  align,
  height,
  onClick,
  invert,
  smallHeight,
  smallWidth,
  margin,
}) => {
  return (
    <>
      <HFWrapper
        justify={justify}
        width={width}
        align={align}
        height={height}
        onClick={onClick}
        invert={invert}
        smallHeight={smallHeight}
        smallWidth={smallWidth}
        margin={margin}
      >
        {elements}
      </HFWrapper>
    </>
  );
};

HFWrapper.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  height: PropTypes.string,
  invert: PropTypes.bool,
  smallHeight: PropTypes.string,
  smallWidth: PropTypes.string,
};

const VFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  height: ${(props) => (props.height ? props.height : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "")};

  @media (max-width: 900px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "100%")};
    flex-direction: ${(props) => (props.invert ? "row" : "column")};
    height: ${(props) =>
      props.mobileHeight ? props.mobileHeight : props.height};
  }
`;

export const VerticalFlexedWrapper = ({
  justify,
  elements,
  width,
  align,
  height,
  margin,
  onClick,
  mobileWidth,
  invert,
  mobileHeight,
}) => {
  return (
    <>
      <VFWrapper
        justify={justify}
        width={width}
        align={align}
        height={height}
        margin={margin}
        onClick={onClick}
        mobileWidth={mobileWidth}
        invert={invert}
        mobileHeight={mobileHeight}
      >
        {elements}
      </VFWrapper>
    </>
  );
};

VFWrapper.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  mobileWidth: PropTypes.string,
  invert: PropTypes.bool,
};

const IMGWrapper = styled.img`
  object-fit: ${(props) => (props.fit ? props.fit : "contain")};
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  border-radius: ${(props) => (props.rounded ? "20px" : "")};

  @media (max-width: 900px) {
    width: ${(props) => (props.smallWidth ? props.smallWidth : props.width)};
    height: ${(props) =>
      props.smallHeight ? props.smallHeight : props.height};
  }
`;

export const ImageWrapper = ({
  height,
  width,
  image,
  fit,
  onClick,
  margin,
  smallWidth,
  smallHeight,
  rounded,
}) => {
  return (
    <>
      <IMGWrapper
        height={height}
        width={width}
        src={image}
        fit={fit}
        smallWidth={smallWidth}
        onClick={onClick}
        margin={margin}
        smallHeight={smallHeight}
        rounded={rounded}
      />
    </>
  );
};

IMGWrapper.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  margin: PropTypes.string,
  smallWidth: PropTypes.string,
};

export const BoxedButton = ({
  width,
  text,
  smallWidth,
  onPress,
  fontSmall,
  loading,
  margin
}) => {
  return (
    <>
      <ButtonWrapper
        width={width}
        smallWidth={smallWidth}
        onClick={onPress}
        fontSmall={fontSmall}
        margin={margin}
      >
        {loading ? <Loader active={loading} inline="centered" /> : text}
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  border: 2px solid #000000;
  padding: 10px;
  font-family: Poppins;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: #000000;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 50px;
  margin: ${(props)=> props.margin ? props.margin : ""};

  @media (max-width: 900px) {
    font-size: ${(props) => (props.fontSmall ? props.fontSmall : "15px")};
    width: ${(props) => (props.smallWidth ? props.smallWidth : "60%")};
    padding: 10px;
  }
`;

ButtonWrapper.propTypes = {
  width: PropTypes.string,
  loading: PropTypes.bool,
};

export const StyledButton = ({
  width,
  color,
  bgColor,
  text,
  onPress,
  loading,
  margin,
  padding,
  bdColor,
  smallWidth
}) => {
  return (
    <>
      <StyledButtonWrapper
        width={width}
        color={color}
        bgColor={bgColor}
        onClick={onPress}
        margin={margin}
        padding={padding}
        bdColor={bdColor}
        smallWidth={smallWidth}
      >
        {loading ? <Loader active={loading} inline={"centered"} /> : text}
      </StyledButtonWrapper>
    </>
  );
};

const StyledButtonWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: ${(props) => (props.padding ? props.padding : "15px")};
  text-align: center;
  font-family: Poppins;
  border-radius: 57px;
  font-weight: bolder;
  font-size: 16px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FFFFFF")};
  margin: ${(props) => (props.margin ? props.margin : "2vh 0px 2vh 0px")};
  cursor: pointer;
  border: ${(props) => (props.bdColor ? props.bdColor : "")};

  @media (max-width: 900px) {
    font-size: 12px;
    width: ${(props)=> props.smallWidth ? props.smallWidth : "50%"};
  }
`;

StyledButtonWrapper.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onPress: PropTypes.func,
};

export const DropDownButton = ({
  bgColor,
  color,
  Icon,
  width,
  text,
  height,
  smallWidth,
  onSelect,
  change,
  list,
}) => {
  const handleChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedValue = list[selectedIndex - 1];
    onSelect(selectedValue, selectedIndex);
  };

  return (
    <>
      <DropDownButtonWrapper
        bgColor={bgColor}
        color={color}
        width={width}
        height={height}
        text={text}
        smallWidth={smallWidth}
        // value={change}
        onChange={handleChange}
      >
        {/* <HorizontalFlexedWrapper
          width={"100%"}
          height={"fit-content"}
          elements={
            <>
              <div style={{ fontFamily: "Josefin Sans", fontSize: "18px" }}>
                {text}
              </div>
              {Icon}
            </>
          }
        /> */}
        <option value={text} disabled>
          {text}
        </option>
        {list &&
          list.map((item, index) => (
            <option key={index} value={item}>
              {item.name}
            </option>
          ))}
      </DropDownButtonWrapper>
    </>
  );
};

const DropDownButtonWrapper = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FFFFFF")};
  margin: 10px 0px 10px 0px;
  height: ${(props) => (props.height ? props.height : "fit-content")};
  cursor: pointer;
  outline: none;
  font-size: 18px;
  border-radius: 20px;
  font-family: ${Fonts.PRIMARY};
  option {
    background-color: #ffffff;
    font-family: ${Fonts.PRIMARY};
    font-size: 18px;
    color: #000000;
  }

  option:checked {
    background-color: #fd9017;
  }

  @media (max-width: 900px) {
    width: ${(props) => (props.smallWidth ? props.smallWidth : props.width)};
  }
`;

DropDownButtonWrapper.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  smallWidth: PropTypes.string,
};

export const BackgroundImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};

  @media (max-width: 900px) {
    height: ${(props) => (props.smallHeight ? props.smallHeight : "100%")};
    width: ${(props) => (props.smallWidth ? props.smallWidth : "100%")};
  }
`;
