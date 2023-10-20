import { Box, Button, Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const HomeNav = () => {
  return (
    <>
      <Flex justify={"center"}>
        <Flex
          px="80px"
          bg="#fafafa"
          border={"1px solid #DBE1E7"}
          borderRadius={"14px"}
          w="1110px"
          h="100px"
          align={"center"}
          justify={"space-between"}
        >
          <HStack>
            <Img src="/skillbit-logo.svg" alt="logo" />
            <Text
              color="#1A1A1A"
              className="ubuntu"
              cursor="pointer"
              fontFamily="logo"
              fontSize="20px"
              fontWeight="700"
            >
              Skillbit
            </Text>
          </HStack>
          <HStack gap={"35px"}>
            <NavLink to="/find-work">
              <Text
                className="nunito"
                color={"var(--pink)"}
                fontSize={"16px"}
                fontWeight={500}
                textDecor={"none"}
              >
                Find Work
              </Text>
            </NavLink>
            <NavLink to="#">
              <Text
                className="nunito"
                color={"var(--dark-900)"}
                fontSize={"16px"}
                fontWeight={500}
              >
                Find Talent
              </Text>
            </NavLink>
            <NavLink to="#">
              <Text
                className="nunito"
                color={"var(--dark-900)"}
                fontSize={"16px"}
                fontWeight={500}
              >
                Contact Us
              </Text>
            </NavLink>
          </HStack>
          <Box
            as="button"
            w="131px"
            h="50px"
            bgColor={"var(--pink)"}
            borderRadius={"10px"}
            color="#fff"
          >
            Get Started
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeNav;
