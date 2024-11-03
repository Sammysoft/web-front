/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { VerticalFlexedWrapper, HorizontalFlexedWrapper } from "../Elements";
import { Text } from "../Home/Blogs";
import BlogImg from "../../assets/Images/blog1.svg";
import { StyledButton } from "../Elements";
import { addEllipsis } from "../../utils";

const Wrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  margin: 10% 10% 2% 10%;

  @media (max-width: 1400px) {
    margin-top: 15vh;
  }
`;

const Header = () => {
  const [showAll, setShowAll] = React.useState(Boolean);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const post = `"Hey gentlemen! When it comes to style, shoes can
  make or break your outfit. Whether you're dressing
  up for a special occasion or keeping it casual on
  the weekends, having the right footwear is
  essential. At 928 Apparels, we believe that building
  a versatile shoe collection doesn't have to be
  complicated. Here are seven types of shoes every man
  should have in his wardrobe. 1. Classic White
  Sneakers A pair of clean white sneakers is a
  must-have for any casual look. Why You Need Them:
  Versatility: They go with almost anything—from jeans
  and shorts to chinos and even suits. Comfort:
  Perfect for all-day wear. Timeless Style: White
  sneakers never go out of fashion. Our Pick: Check
  out our 928 Classic White Sneakers for a sleek and
  comfortable option. 2. Black Leather Dress Shoes For
  formal occasions and professional settings, black
  leather dress shoes are essential. Why You Need
  Them: Elegance: Completes your suit or formal
  attire. Professionalism: Ideal for interviews,
  weddings, and important meetings. Durability: A good
  pair can last for years. Our Pick: Our Black Oxford
  Dress Shoes offer sophistication and comfort. 3.
  Brown Leather Brogues Brogues add a touch of
  personality to your outfit with their distinctive
  perforated designs. Why You Need Them: Versatility:
  Works well with both formal and smart-casual
  outfits. Style Statement: Adds detail and interest
  to your look. Color Variety: Brown tones complement
  a wide range of colors. Our Pick: Try our Brown
  Wingtip Brogues for that perfect blend of style and
  function. 4. Casual Loafers Loafers are the go-to
  shoes for effortless style. Why You Need Them: Easy
  to Wear: Slip-on design makes them convenient.
  Comfortable: Great for casual outings or relaxed
  office environments. Stylish: Can be dressed up or
  down. Our Pick: Our Suede Penny Loafers come in
  various colors to match your style. 5. Rugged Boots
  A sturdy pair of boots is essential, especially
  during colder months. Why You Need Them: Durability:
  Built to withstand tough conditions. Style: Adds a
  rugged edge to your outfit. Versatility: Pairs well
  with jeans and jackets. Our Pick: The 928 Leather
  Ankle Boots are both stylish and durable. 6.
  Athletic Running Shoes Even if you're not a runner,
  athletic shoes are a wardrobe essential. Why You
  Need Them: Comfort: Ideal for active days and casual
  wear. Support: Good for your feet during physical
  activities. Style: Modern designs can complement
  casual outfits. Our Pick: Check out our Performance
  Running Shoes for comfort and style. 7. Sandals or
  Flip-Flops For those laid-back days and warm
  weather. Why You Need Them: Breathability: Keeps
  your feet cool. Convenience: Easy to slip on and
  off. Casual Vibes: Perfect for the beach, pool, or
  lounging. Our Pick: Our Leather Sandals are
  comfortable and stylish for summer days. Final
  Thoughts Building a solid shoe collection doesn't
  have to be overwhelming. With these seven types of
  shoes, you'll be prepared for any occasion—be it a
  formal event, a casual outing, or an adventurous
  weekend. Remember, the key is quality over quantity.
  Investing in well-made shoes ensures they last
  longer and feel better. At 928 Apparels, we're
  committed to providing high-quality footwear that
  combines comfort, durability, and style."
`;
  return (
    <>
      <Wrapper>
        <VerticalFlexedWrapper
          elements={
            <>
              <Text color={"#696969"} size={"16px"} width={"100%"}>
                HOME / BLOGS
              </Text>
              <Text
                color={"#2A1C03"}
                size={"44px"}
                width={"100%"}
                style={{ textTransform: "capitalize" }}
              >
                Catch up on the latest ‘gist’
              </Text>

              <BlogImage background={BlogImg}></BlogImage>
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
                            smallLine={"30px"}
                          >
                            Men's Footwear guide: 7 Shoes Every Man Should Own
                          </Text>
                          <Text
                            color={"#696969"}
                            size={"16px"}
                            align={"justify"}
                            fontSmall={"14px"}
                            smallLine={"28px"}
                          >
                            {showAll ? post : addEllipsis(post, 1200)}
                          </Text>
                        </>
                      }
                    />
                    {!showAll && (
                      <StyledButton
                        onPress={handleShowAll}
                        width={"20%"}
                        bgColor={"#D6D6D6"}
                        text={"Read More"}
                        color={"#000000"}
                      />
                    )}
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
  background: url(${(props) => (props.background ? props.background : "")});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
  margin-bottom: 10px;
`;

export default Header;
