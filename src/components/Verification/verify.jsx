/* eslint-disable */

import styled from "styled-components";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ImageWrapper, StyledButton, VerticalFlexedWrapper } from "../Elements";
import toast from "react-hot-toast";
import AuthDataService from "../../Services/AuthDataService";
import { Text } from "../Home/Blogs";

import SuccessIcon from "../../assets/Icons/svg/success.svg";

const Wrapper = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;
  height: 50vh;
  margin-top: 10vh;

  @media (max-width: 1400px) {
    width: 90%;
    height: 70vh;
    margin: 5%;
    margin-top: 10vh;
  }
`;

const Verify = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(null);

  const verifyAccount = async () => {
    setLoading(true);
    try {
      const response = await AuthDataService.verify(route.pathname.slice(-24));
      if (response) {
        console.log(response.data, loading);
        setLoading(false);
        toast.success(response.data.message)
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      //   toast.error(error.response.data.message);
    }
  };

  //   console.log(route.pathname.slice(-26));

  useEffect(() => {
    verifyAccount();
  }, []);

  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          mobileHeight={"100%"}
          mobileWidth={"100%"}
          height={"100%"}
          justify={"center"}
          width={"100%"}
          align={"center"}
          elements={
            <>
              {loading === true && <Text>Verifying, please wait...</Text>}
              {loading === false && (
                <>
                  <ImageWrapper
                    image={SuccessIcon}
                    width={"50%"}
                    height={"30%"}
                  />
                  <Text>Account Verified Successfully</Text>
                  <StyledButton
                    onPress={() => navigate("/login")}
                    text={"Login"}
                    bgColor={"#FD9017"}
                    color={"#FFFFFF"}
                    width={'20%'}
                  />
                </>
              )}
            </>
          }
        />
      </Wrapper>
    </>
  );
};

export default Verify;
