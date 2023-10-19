import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const RegisterScreen = () => {
  return (
    <>
      <Flex
        w={{ base: "full", lg: "1110px" }}
        m={{ base: "20px 0", lg: "30px auto" }}
      >
        <Box
          bgColor={"#d9d9d9"}
          w="500px"
          display={{ base: "none", lg: "block" }}
        ></Box>
        <Box p={{ base: "20px", lg: "40px" }}>
          <Text
            className="nunito"
            color={"#090909"}
            fontWeight={700}
            fontSize={"24px"}
          >
            Create your account
          </Text>
          <Text
            className="nunito"
            color={"#666666"}
            fontWeight={400}
            fontSize={{ base: "14px", lg: "16px" }}
            maxW={{ base: "full", lg: "500px" }}
          >
            To get started, please create your account by signing up below.
            Enter your details correctly.
          </Text>
          <Box mt="30px">
            <Box>
              <Text
                className="nunito"
                fontWeight={500}
                fontSize={"14px"}
                color="#101928"
              >
                Company Name
              </Text>
              <Input
                type="text"
                placeholder="Name of Company"
                border={"1px solid #000"}
                w={{ base: "full", lg: "500px" }}
                color="#090909"
                h="45px"
                mt="10px"
                fontSize={"14px"}
                p="10px"
                bgColor={"#fff"}
                borderRadius={"6px"}
                _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
              />
            </Box>
            <Box mt="20px">
              <Text
                className="nunito"
                fontWeight={500}
                fontSize={"14px"}
                color="#101928"
              >
                Company Email
              </Text>
              <Input
                type="text"
                placeholder="Email"
                border={"1px solid #000"}
                w={{ base: "full", lg: "500px" }}
                color="#090909"
                h="45px"
                mt="10px"
                fontSize={"14px"}
                p="10px"
                bgColor={"#fff"}
                borderRadius={"6px"}
                _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
              />
            </Box>
            <Box mt="20px">
              <Text
                className="nunito"
                fontWeight={500}
                fontSize={"14px"}
                color="#101928"
              >
                Password
              </Text>
              <Box pos={"relative"} w={{ base: "full", lg: "500px" }}>
                <Input
                  type="text"
                  placeholder="Password"
                  border={"1px solid #000"}
                  w={{ base: "full", lg: "500px" }}
                  color="#090909"
                  h="45px"
                  mt="10px"
                  fontSize={"14px"}
                  p="10px"
                  bgColor={"#fff"}
                  borderRadius={"6px"}
                  _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
                />
                <Box as="button" pos="absolute" top={10} right={4}>
                  <AiOutlineEye color="#090909" />
                </Box>
              </Box>
            </Box>
            <Box mt="20px">
              <Text
                className="nunito"
                fontWeight={500}
                fontSize={"14px"}
                color="#101928"
              >
                Confirm Password
              </Text>
              <Box pos={"relative"} w={{ base: "full", lg: "500px" }}>
                <Input
                  type="text"
                  placeholder="Confirm Password"
                  border={"1px solid #000"}
                  w={{ base: "full", lg: "500px" }}
                  color="#090909"
                  h="45px"
                  mt="10px"
                  fontSize={"14px"}
                  p="10px"
                  bgColor={"#fff"}
                  borderRadius={"6px"}
                  _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
                />
                <Box as="button" pos="absolute" top={10} right={4}>
                  <AiOutlineEye color="#090909" />
                </Box>
              </Box>
            </Box>
            <Text
              className="nunito"
              color={"#666666"}
              fontWeight={400}
              fontSize={"14px"}
              mt="10px"
            >
              By clicking on Continue, you accept our{" "}
              <Text as={"span"} color={"#FE4600"}>
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text as="span" color={"#FE4600"}>
                Privacy Policy
              </Text>
            </Text>
          </Box>
          <Flex
            align={"center"}
            flexDir={{ base: "column", lg: "row" }}
            justify={"center"}
            gap={{ base: "10px", lg: "20px" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Box
              as="button"
              p="10px 50px"
              border={"1px solid #FE4600"}
              borderRadius={"4px"}
              color="#FE4600"
              fontSize={"16px"}
            >
              Go back
            </Box>
            <Box
              as="button"
              p="10px 50px"
              borderRadius={"4px"}
              bgColor={"#FE4600"}
              color="#fff"
              fontSize={"16px"}
            >
              Continue
            </Box>
          </Flex>
          <Flex align={"center"} justify={"center"} gap='6px' mt='10px'>
            <Text
              className="nunito"
              fontWeight={400}
              fontSize={"14px"}
              color={"#666666"}
            >
              Already have an account?
            </Text>
            <Text as="button" color={"#FE4600"}>
              Sign In
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default RegisterScreen;
