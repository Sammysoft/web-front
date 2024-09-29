/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import {
  BackgroundImage,
  BoxedButton,
  HorizontalFlexedWrapper,
  VerticalFlexedWrapper,
} from "../Elements";
import { Text } from "../Home/Blogs";
import { Fonts } from "../../assets/Res/fonts";

import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/Slices/cartSlices";
import ProductDataService from "../../Services/ProductDataService";
import toast from "react-hot-toast";
import { loadUser } from "../../Redux/Slices/userSlice";
import PaymentDataService from "../../Services/PaymentDataService";

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

  @media (max-width: 1400px) {
    width: 95%;
    margin: 5% 2.5% 5% 2.5%;
  }
`;

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const {
    user: { cart_items },
  } = useSelector((state) => state.user);

  const [city, setCity] = useState();
  const [deliveryState, setDeliveryState] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [postalAddress, setPostalAddress] = useState();
  const [phone, setPhone] = useState();

  const [loading, setLoading] = useState(Boolean);

  console.log(cart_items);

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      const response = await PaymentDataService.checkOut(cart_items);
      if (response) {
        console.log(response.data.data);
        window.location.href = response.data.data;
        toast.success(`Opening, ${response.data.message}. please wait...`);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Wrapper>
        <HorizontalFlexedWrapper
          elements={
            <>
              <Text
                size={"25px"}
                width={"30%"}
                align={"left"}
                line={"2px"}
                fontSmall={"14px"}
                smallLine={"14px"}
              >
                My Cart ({items.length} Items)
              </Text>
              <Text
                width={"60%"}
                align={"left"}
                size={"18px"}
                line={"2px"}
                fontSmall={"14px"}
                smallLine={"14px"}
              >
                Items Ordered
              </Text>
            </>
          }
          width={"100%"}
        />
        {cart_items !== undefined && cart_items.length > 0 ? (
          <>
            {cart_items.map((item, index) => (
              <CartItemCard key={index} item={item} />
            ))}
            <Text
              // width={"100%"}
              size={"30px"}
              align={"center"}
              height={"1px"}
              line={"1px"}
              fontSmall={"24px"}
              smallLine={"1px"}
            >
              Total: <b>${totalAmount}</b>
            </Text>

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"14px"}
                          >
                            Delivery Address
                          </Text>
                          <TextField
                            placeholder={`Enter delivery address`}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"14px"}
                          >
                            City
                          </Text>
                          <TextField
                            placeholder={`Enter your city`}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"14px"}
                          >
                            State
                          </Text>
                          <TextField
                            placeholder={`Enter your state`}
                            value={deliveryState}
                            onChange={(e) => setDeliveryState(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"14px"}
                          >
                            Country
                          </Text>
                          <TextField
                            placeholder={`Enter your country`}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"14px"}
                          >
                            Zip/Postal Code
                          </Text>
                          <TextField
                            placeholder={`Enter postal code`}
                            value={postalAddress}
                            onChange={(e) => setPostalAddress(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <HorizontalFlexedWrapper
              align={"flex-start"}
              width={"100%"}
              height={"18%"}
              elements={
                <>
                  <SelectWrap>
                    <HorizontalFlexedWrapper
                      width={"100%"}
                      height={"100%"}
                      elements={
                        <>
                          <Text
                            width={"10%"}
                            height={"50%"}
                            align={"left"}
                            smallWidth={"40%"}
                            fontSmall={"14px"}
                            // smallLine={"28px"}
                          >
                            Contact Number
                          </Text>
                          <TextField
                            placeholder={`Contact mobile number`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </>
                      }
                    />
                  </SelectWrap>
                </>
              }
            />

            <Text
              width={"80%"}
              height={"50%"}
              align={"center"}
              smallWidth={"90%"}
              fontSmall={"14px"}
            >
              <i style={{ opacity: 0.5 }}>
                All payments made on this platform are safe!
              </i>
            </Text>
            <VerticalFlexedWrapper
              elements={
                <>
                  <BoxedButton
                    loading={loading}
                    text={`Proceed to pay $${totalAmount}`}
                    width={"30%"}
                    onPress={handleCheckOut}
                  />
                </>
              }
              width={"100%"}
              mobileWidth={"100%"}
              justify={"center"}
              align={"center"}
            />
          </>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

const CartItemCard = ({ item, deleteItem }) => {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = async (productID) => {
    try {
      const response = await ProductDataService.removeItemFromCart(productID);
      if (response) {
        // console.log(response.data);
        dispatch(addItemToCart(response.data.data));
        dispatch(loadUser());
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <CardWrapper>
        <HorizontalFlexedWrapper
          invert={true}
          width={"100%"}
          elements={
            <>
              <BackgroundImage
                background={`'${item.selectedImage}'`}
                height={"40vh"}
                width={"30%"}
                smallHeight={"30vh"}
                smallWidth={"100%"}
              />
              <VerticalFlexedWrapper
                width={"60%"}
                elements={
                  <>
                    <VerticalFlexedWrapper
                      height={"25%"}
                      width={"100%"}
                      elements={
                        <>
                          <Text
                            width={"100%"}
                            size={"25px"}
                            align={"left"}
                            height={"1px"}
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"14px"}
                          >
                            {item.name}
                          </Text>
                          <Text
                            width={"100%"}
                            size={"30px"}
                            align={"left"}
                            height={"1px"}
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"1px"}
                          >
                            <b>${item.price}</b>
                          </Text>
                        </>
                      }
                    />

                    <VerticalFlexedWrapper
                      height={"25%"}
                      elements={
                        <>
                          <Text
                            size={"18px"}
                            align={"left"}
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"1px"}
                          >
                            Colour: {item.color}
                          </Text>
                        </>
                      }
                    />

                    <VerticalFlexedWrapper
                      height={"25%"}
                      elements={
                        <>
                          <Text
                            size={"18px"}
                            align={"left"}
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"1px"}
                          >
                            Quantity: {item.quantity}
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
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"1px"}
                          >
                            Edit preferences
                          </Text>
                          <Text
                            onClick={() => handleRemoveItemFromCart(item.id)}
                            color={"#FF0D26"}
                            weight={"600"}
                            size={"18px"}
                            width={"48%"}
                            align={"left"}
                            line={"1px"}
                            fontSmall={"14px"}
                            smallLine={"1px"}
                          >
                            Remove from cart
                          </Text>
                        </>
                      }
                      width={"100%"}
                      height={"25%"}
                      align={"flex-start"}
                    />
                  </>
                }
                height={"40vh"}
                mobileHeight={"15vh"}
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

  @media (max-width: 1400px) {
    height: 50vh;
    margin: 5px;
  }
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 100%;
  height: 100%;
`;

const WrappedBox = styled.div`
  text-align: center;
  border: 2px solid #000000;
  padding-right: 10px;
  font-family: Josefin Sans;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: #000000;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: fit-content;

  @media (max-width: 1400px) {
    font-size: ${(props) => (props.fontSmall ? props.fontSmall : "14px")};
    width: ${(props) => (props.smallWidth ? props.smallWidth : "60%")};
    padding: 5px;
  }
`;

const TextField = styled.input`
  width: 80%;
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

export default Checkout;
