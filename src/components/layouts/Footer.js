import { Box, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        bgColor={"#6F1E00"}
        p={{ base: "20px", lg: "100px 120px" }}
        my={{ base: 0, lg: "30px" }}
        mx={{ base: 0, lg: "20px" }}
        borderRadius={{ base: 0, lg: "20px" }}
      >
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          align={"center"}
          justify={"space-between"}
        >
          <VStack align={"start"} gap="20px">
            <HStack align={"center"} justify="center">
              <Img src="/skillbit-logo.svg" alt="logo" />
              <Text
                color="#fff"
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
              className="poppins"
              fontSize={"14px"}
              color="#fff"
              w="308px"
              textAlign={{ base: "center", lg: "left" }}
            >
              SkillBit: Your Gateway to Effortlessly Streamlining Bitcoin Hiring
              and Executing Secure Bitcoin (BTC) Transactions for African
              Bitcoin Talents
            </Text>
          </VStack>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            align={{ base: "center", lg: "start" }}
            gap={{ base: "20px", lg: "80px" }}
            mt={{ base: "20px", lg: 0 }}
          >
            <Flex flexDir={'column'} align={{ base: "center", lg: "start" }} justify={'center'} gap="20px">
              <Text
                className="poppins"
                color="#DAE0EF"
                fontWeight={700}
                fontSize={"16px"}
              >
                Company
              </Text>
              <VStack
                align={"start"}
                gap="15px"
                className="poppins"
                color="#DAE0EF"
                fontWeight={400}
                fontSize={"16px"}
              >
                <Text textAlign={{ base: "center", lg: "left" }}>
                  Trust, Safety & Security
                </Text>
                <Text textAlign={{ base: "center", lg: "left" }}>
                  Find Work
                </Text>
                <Text>Find Talent</Text>
              </VStack>
            </Flex>
            <VStack align={"start"} gap="20px">
              <Text
                className="poppins"
                color="#DAE0EF"
                fontWeight={700}
                fontSize={"16px"}
              >
                Contact
              </Text>
              <VStack
                align={"start"}
                gap="15px"
                className="poppins"
                color="#DAE0EF"
                fontWeight={400}
                fontSize={"16px"}
              >
                <Text>Help Centre</Text>
                <Text>FAQ</Text>
                <Text>Contact</Text>
              </VStack>
            </VStack>
            <VStack align={"start"} gap="20px">
              <Text
                className="poppins"
                color="#DAE0EF"
                fontWeight={700}
                fontSize={"16px"}
              >
                Legal
              </Text>
              <VStack
                align={"start"}
                gap="15px"
                className="poppins"
                color="#DAE0EF"
                fontWeight={400}
                fontSize={"16px"}
              >
                <Text>Terms of Use</Text>
                <Text>Privacy Policy</Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
        <Text className="poppins" fontSize={"14px"} color="#fff" mt="40px" textAlign={{ base: "center", lg: "left" }}>
          &copy; {new Date().getFullYear()} SkillBit. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
