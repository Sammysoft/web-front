import React from "react";
import styled from "styled-components";
import {
  BackgroundImage,
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";

import Prod1 from "../../assets/Images/prod1.svg";
import Prod2 from "../../assets/Images/prod2.svg";
import Prod3 from "../../assets/Images/prod3.svg";

const Wrapper = styled.div`
  padding: 20px;
  height: fit-content;
  padding-left: 20px;
  width: 70%;
  margin: 5% 15% 10% 15%;
  background: #f8f8f8;
  box-shadow: -11px 21px 53px 0px #8787871a, -45px 86px 97px 0px #87878717,
    -102px 193px 131px 0px #8787870d, -182px 343px 155px 0px #87878703,
    -284px 536px 170px 0px #87878700;
`;

const CartItems = [
  { name: "Coastline Jacket + Fedora", price: "$ 189.99", image: Prod1 },
  { name: "Jacquard Wine Kaftan", price: "$ 142.00", image: Prod2 },
  { name: "White double breasted suit", price: "$ 112.10", image: Prod3 },
];

const Checkout = () => {
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          elements={
            <>
              <Text size={"25px"} width={"30%"} align={"left"} line={'2px'}>
                My Cart (4 Items)
              </Text>
              <Text width={"60%"} align={"left"} size={"18px"} line={'2px'}>
                Items Ordered
              </Text>
            </>
          }
          width={"100%"}
        />
        {CartItems.map((item, index) => (
          <CartItemCard key={index} item={item} />
        ))}
      </Wrapper>
    </>
  );
};

const CartItemCard = ({ item }) => {
  return (
    <>
      <CardWrapper>
        <HorizontalFlexedWrapper
          width={"100%"}
          elements={
            <>
              <BackgroundImage
                background={item.image}
                height={"40vh"}
                width={"30%"}
              />
              <VerticalFlexedWrapper
                width={"60%"}
                elements={
                  <>
                    <VerticalFlexedWrapper
                      height={"25%"}
                      width={'100%'}
                      elements={
                        <>
                          <Text
                            width={"100%"}
                            size={"25px"}
                            align={"left"}
                            height={"1px"}
                            line={'1px'}
                          >
                            {item.name}
                          </Text>
                          <Text
                            width={"100%"}
                            size={"30px"}
                            align={"left"}
                            height={"1px"}
                            line={'1px'}
                          >
                            {item.price}
                          </Text>
                        </>
                      }
                    />
                    <VerticalFlexedWrapper
                      height={"35%"}
                      elements={
                        <>
                          <Text size={"18px"} align={"left"} line={'1px'}>
                            Colour: Brown
                          </Text>
                          <Text size={"18px"} align={"left"} line={'1px'}>
                            Thigh: 45"
                          </Text>
                          <Text size={"18px"} align={"left"} line={'1px'}>
                            Waist: 20"
                          </Text>
                          <Text size={"18px"} align={"left"} line={'1px'}>
                            Length: 59"
                          </Text>
                        </>
                      }
                    />

                    <HorizontalFlexedWrapper
                      elements={
                        <>
                          <Text
                            color={"#FD9017"}
                            weight={"600"}
                            size={"18px"}
                            width={"48%"}
                            align={"left"}
                            line={'1px'}
                          >
                            Edit preferences
                          </Text>
                          <Text
                            color={"#FF0D26"}
                            weight={"600"}
                            size={"18px"}
                            width={"48%"}
                            align={"left"}
                            line={'1px'}
                          >
                            Remove from cart
                          </Text>
                        </>
                      }
                      width={"100%"}
                      height={"25%"}
                      align={'flex-start'}
                    />
                  </>
                }
                height={"40vh"}
              />
            </>
          }
        />
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 40vh;
  margin: 30px 0px 30px 0px;
`;

export default Checkout;
