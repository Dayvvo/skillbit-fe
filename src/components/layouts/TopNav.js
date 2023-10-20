import React from "react";
import { Box, Circle, Flex, HStack, Img, Input, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const TopNav = () => {
  return (
    <>
      <Flex
        bgColor={"#FFFFFF"}
        borderBottom={"1px solid #DBE1E7"}
        w={"full"}
        h="96px"
        p="0px 80px"
        align={"center"}
        justify={"space-between"}
        mb='20px'
      >
        <Flex gap="30px" align={"center"}>
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
          <Text
            className="nunito"
            color={"var(--pink)"}
            fontSize={"16px"}
            fontWeight={500}
          >
            Find Work
          </Text>
          <Text
            className="nunito"
            color={"var(--dark-900)"}
            fontSize={"16px"}
            fontWeight={500}
          >
            Find Talent
          </Text>
          <Text
            className="nunito"
            color={"var(--dark-900)"}
            fontSize={"16px"}
            fontWeight={500}
          >
            Contact Us
          </Text>
        </Flex>
        <Flex gap='30px' align={'center'}>
          <Box pos={"relative"}>
            <Input
              w="375px"
              h="36px"
              bgColor={"#f1f1f1"}
              pl="30px"
              placeholder="Search here..."
              _placeholder={{ color: "#101928", fontSize: "14px" }}
            />
            <Box pos={"absolute"} top={"10px"} left={"8px"}>
              <BiSearch color="#667185" />
            </Box>
          </Box>
          <Box>
            <BsBell color="var(--dark-900)" fontSize={'24px'} />
          </Box>
          <Circle w='48px' h='48px' bgColor={'#D9D9D9'}></Circle>
        </Flex>
      </Flex>
    </>
  );
};

export default TopNav;
