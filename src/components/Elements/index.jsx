import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HFWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
`;

export const HorizontalFlexedWrapper = ({
  justify,
  elements,
  width,
  align,
  height,
  onClick,
}) => {
  return (
    <>
      <HFWrapper
        justify={justify}
        width={width}
        align={align}
        height={height}
        onClick={onClick}
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
`;

export const VerticalFlexedWrapper = ({
  justify,
  elements,
  width,
  align,
  height,
  margin,
  onClick,
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
      >
        {elements}
      </VFWrapper>
    </>
  );
};

VFWrapper.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
};

const IMGWrapper = styled.img`
  object-fit: ${(props) => (props.fit ? props.fit : "contain")};
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const ImageWrapper = ({ height, width, image, fit }) => {
  return (
    <>
      <IMGWrapper height={height} width={width} src={image} fit={fit} />
    </>
  );
};

IMGWrapper.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export const BoxedButton = ({ width, text }) => {
  return (
    <>
      <ButtonWrapper width={width}>{text}</ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  border: 2px solid #000000;
  padding: 20px;
  font-family: Josefin Sans;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: #000000;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

ButtonWrapper.propTypes = {
  width: PropTypes.string,
};

export const StyledButton = ({ width, color, bgColor, text }) => {
  return (
    <>
      <StyledButtonWrapper width={width} color={color} bgColor={bgColor}>
        {text}
      </StyledButtonWrapper>
    </>
  );
};

const StyledButtonWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: 20px;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: bolder;
  font-size: 20px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FFFFFF")};
  margin: 2vh 0px 2vh 0px;
  cursor: pointer;
`;

StyledButtonWrapper.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export const DropDownButton = ({
  bgColor,
  color,
  Icon,
  width,
  text,
  height,
}) => {
  return (
    <>
      <DropDownButtonWrapper
        bgColor={bgColor}
        color={color}
        width={width}
        height={height}
        text={text}
      >
        <HorizontalFlexedWrapper
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
        />
      </DropDownButtonWrapper>
    </>
  );
};

const DropDownButtonWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#FFFFFF")};
  margin: 10px 0px 10px 0px;
  height: ${(props) => (props.height ? props.height : "fit-content")};
  cursor: pointer;
`;

DropDownButtonWrapper.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export const BackgroundImage = styled.div`
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;
