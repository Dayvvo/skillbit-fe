import { Box, Button, Circle, Flex, Grid, HStack, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import HomeNav from "../../components/layouts/HomeNav";
import { AiOutlineEye } from "react-icons/ai";

const HomePage = () => {
  return (
    <>
      <Flex
        bg={
          "radial-gradient(42.93% 65.06% at 101.46% 93.83%, rgba(245, 129, 104, 0.16) 0%, rgba(229, 138, 138, 0.00) 100%), radial-gradient(29.39% 45.02% at 17.24% 12.46%, rgba(211, 128, 82, 0.11) 0%, rgba(96, 129, 203, 0.00) 100%, rgba(203, 141, 96, 0.00) 100%), radial-gradient(42.91% 36.85% at 0% 28.94%, rgba(243, 146, 56, 0.23) 0%, rgba(213, 132, 87, 0.00) 100%)"
        }
        flexDir={"column"}
        pt="30px"
        px="80px"  mb='60px'
        // justify={"center"}
        h={{ base: "500px", lg: "100vh" }}
      >
        <HomeNav />
        <Flex justify={"space-between"} align={'center'} mt='20px'>
          <VStack align={"start"} className="nunito" gap='20px' w="618px">
            <Text color={"#252B35"} fontWeight={700} fontSize={"48px"} lineHeight={'55px'}>
              Connecting{" "}
              <Text as={"span"} color={"var(--pink)"}>
                Bitcoin
              </Text>{" "}
              Professionals and organizations worldwide
            </Text>
            <Text color="#666666" fontSize={"18px"}>
              SkillBit: Your Gateway to Effortlessly Streamlining Bitcoin Hiring
              and Executing Secure Bitcoin (BTC) Transactions for African
              Bitcoin Talents
            </Text>
            <HStack gap={'30px'}>
              <Button
                w="150px"
                h="50px"
                bg="var(--pink)"
                color="#fff"
                borderRadius={"4px"}
                fontSize={"16px"}
              >
                Join waiting list
              </Button>
              <Flex gap={'12px'} align={'center'}>
                <Flex align={'center'}>
                  <Box w='30px' h='50px' border={'1px solid #000'} borderRadius={'100px 0 0 100px'}></Box>
                  <Circle w='35px' h='35px' bgColor={'var(--pink)'} ml='-20px'>
                    <AiOutlineEye color="white" fontSize={'18px'} />
                  </Circle>
                </Flex>
                <Text color={'#252B35'} fontSize={'18px'} fontWeight={700}>Learn More</Text>
              </Flex>
            </HStack>
          </VStack>

          <SimpleGrid columns={3} spacing={8}>
            {
              [1,2,3,4,5,6].map((entry) => (
                <Img w='300px' h='200px' src={`/assets/hero-img-${entry}.png`} />
              ))
            }
          </SimpleGrid>
        </Flex>
      </Flex>
      <Box p='20px 80px' bg='#fff'>
      SkillBit: Your Gateway to Effortlessly Streamlining Bitcoin Hiring and Executing Secure Bitcoin (BTC) Transactions for African Bitcoin Talents
      </Box>
    </>
  );
};

export default HomePage;
