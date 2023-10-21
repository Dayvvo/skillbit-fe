import { Box, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        bgColor={"#6F1E00"}
        p="100px 120px"
        my="30px"
        mx="20px"
        borderRadius={"20px"}
      >
        <Flex align={"center"} justify={"space-between"}>
          <VStack align={"start"} gap="20px">
            <HStack>
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
            <Text className="poppins" fontSize={"14px"} color="#fff" w="308px">
              SkillBit: Your Gateway to Effortlessly Streamlining Bitcoin Hiring
              and Executing Secure Bitcoin (BTC) Transactions for African
              Bitcoin Talents
            </Text>
          </VStack>
          <Flex align={"start"} gap="80px">
            <VStack align={"start"} gap="20px">
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
                <Text>Trust, Safety & Security</Text>
                <Text>Find Work</Text>
                <Text>Find Talent</Text>
              </VStack>
            </VStack>
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
        <Text className="poppins" fontSize={"14px"} color="#fff" mt="40px">
          &copy; {new Date().getFullYear()} SkillBit. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
