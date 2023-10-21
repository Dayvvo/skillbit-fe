import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Square,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HomeNav from "../../components/layouts/HomeNav";
import { AiOutlineEye } from "react-icons/ai";
import Footer from "../../components/layouts/Footer";

const HomePage = () => {
  const benefits = [
    {
      title: "Security and Trust",
      description:
        "Execute Bitcoin transactions with confidence, knowing that the platform prioritises security and builds trust between parties.",
    },
    {
      title: "Verified Bitcoin Experts",
      description:
        "Benefit from a platform tailored to the unique needs and context of the African market.",
    },
    {
      title: "African Centric",
      description:
        "Benefit from a platform tailored to the unique needs and context of the African market.",
    },
  ];

  const BenefitsSectionTwo = ({
    bgColor,
    h,
    dir,
    img,
    title,
    description,
    mt,
  }) => {
    return (
      <Box
        bgColor={bgColor}
        w="550px"
        h={h}
        px="40px"
        py="30px"
        borderRadius={dir}
        mt={mt}
      >
        <Flex mb="20px" align={"center"} gap="20px">
          <Square
            borderRadius={"14px"}
            w="60px"
            h="60px"
            bgColor={"var(--pink)"}
          >
            <Img src={img} />
          </Square>
          <Text color={"#112347"} fontSize={"20px"} fontWeight={600}>
            {title}
          </Text>
        </Flex>
        <Text
          color={"rgba(17, 35, 71, 0.9)"}
          fontSize={"20px"}
          fontWeight={400}
          lineHeight={"40px"}
        >
          {description}
        </Text>
      </Box>
    );
  };

  return (
    <>
      <Flex
        bg={
          "radial-gradient(42.93% 65.06% at 101.46% 93.83%, rgba(245, 129, 104, 0.16) 0%, rgba(229, 138, 138, 0.00) 100%), radial-gradient(29.39% 45.02% at 17.24% 12.46%, rgba(211, 128, 82, 0.11) 0%, rgba(96, 129, 203, 0.00) 100%, rgba(203, 141, 96, 0.00) 100%), radial-gradient(42.91% 36.85% at 0% 28.94%, rgba(243, 146, 56, 0.23) 0%, rgba(213, 132, 87, 0.00) 100%)"
        }
        flexDir={"column"}
        pt="30px"
        px="80px"
        mb="60px"
        // justify={"center"}
        h={{ base: "500px", lg: "100vh" }}
      >
        <HomeNav />
        <Flex gap={"30px"} justify={"space-between"} align={"center"} mt="20px">
          <VStack align={"start"} className="poppins" gap="20px" w="618px">
            <Text
              color={"#252B35"}
              fontWeight={700}
              fontSize={"40px"}
              lineHeight={"55px"}
            >
              Connecting{" "}
              <Text as={"span"} color={"var(--pink)"} fontWeight={800}>
                Bitcoin
              </Text>{" "}
              Professionals and organizations worldwide
            </Text>
            <Text color="#666666" fontSize={"18px"}>
              SkillBit: Your Gateway to Effortlessly Streamlining Bitcoin Hiring
              and Executing Secure Bitcoin (BTC) Transactions for African
              Bitcoin Talents
            </Text>
            <HStack gap={"30px"}>
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
              <Flex gap={"12px"} align={"center"}>
                <Flex align={"center"}>
                  <Box
                    w="30px"
                    h="50px"
                    border={"1px solid #000"}
                    borderRadius={"100px 0 0 100px"}
                  ></Box>
                  <Circle w="35px" h="35px" bgColor={"var(--pink)"} ml="-20px">
                    <AiOutlineEye color="white" fontSize={"18px"} />
                  </Circle>
                </Flex>
                <Text color={"#252B35"} fontSize={"18px"} fontWeight={700}>
                  Learn More
                </Text>
              </Flex>
            </HStack>
          </VStack>

          <SimpleGrid columns={3} spacing={8}>
            {[1, 2, 3, 4, 5, 6].map((entry) => (
              <Img w="300px" h="200px" src={`/assets/hero-img-${entry}.png`} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Box p="40px 80px" bg="#fff">
        <Flex gap="40px">
          <Box>
            <Text
              className="poppins"
              color="var(--pink)"
              fontSize={"25px"}
              fontWeight={400}
            >
              Benefits
            </Text>
            <Text
              color={"#1A1A1A"}
              className="poppins"
              fontSize={"36px"}
              fontWeight={400}
              mt="20px"
              mb="40px"
            >
              Redefine your Bitcoin Hiring Journey
            </Text>
            <Box>
              <Tabs orientation="vertical">
                <TabList>
                  {benefits.map(({ title, description }) => (
                    <Tab
                      key={title}
                      _selected={{
                        color: "var(--pink)",
                        borderLeft: "4px solid var(--pink)",
                        opacity: 1,
                      }}
                      opacity={0.3}
                      fontSize={"18px"}
                      display={"flex"}
                      flexDir={"column"}
                      alignItems={"start"}
                      pl="20px"
                    >
                      <Text>{title}</Text>
                      <Text color="#000" fontSize={"15px"} textAlign={"left"}>
                        {description}
                      </Text>
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            </Box>
          </Box>
          <Box>
            <Img src="/assets/benefits-section-img.png" alt="benefits-img" />
          </Box>
        </Flex>
      </Box>
      <Box p={"40px 80px"} bgColor={"#e8ebf1"} className="poppins">
        <Text
          fontSize={"24px"}
          fontWeight={400}
          color={"var(--pink)"}
          textAlign={"center"}
        >
          Benefits
        </Text>
        <Text
          fontSize={"34px"}
          fontWeight={600}
          color={"#1a1a1a"}
          textAlign={"center"}
          my="20px"
        >
          Redefine your Bitcoin Journey
        </Text>
        <Flex gap={"20px"}>
          <BenefitsSectionTwo
            bgColor={"#F3F6FC"}
            h={"400px"}
            dir={"70px 70px 9px 9px"}
            img={"/assets/icon1.svg"}
            title={"Bitcoin Talent Pool"}
            description={
              "With Collecty, every interaction is a rewarding journey. Whether it's following on social media, watching an advert, or making a purchase, customers are incentivized to return, time and time again"
            }
          />
          <BenefitsSectionTwo
            bgColor={"#E8D9DC"}
            h={"490px"}
            dir={"70px 70px 9px 9px"}
            img={"/assets/icon2.svg"}
            title={"Effortless Hiring"}
            description={
              "The platform streamlines the hiring process. You can easily browse profiles, review skills, and connect with talent that matches your specific requirements."
            }
          />
        </Flex>
        <Flex gap={"20px"} mt={"-60px"}>
          <BenefitsSectionTwo
            bgColor={"#FFEDC2"}
            h={"490px"}
            dir={"9px 9px 70px 70px"}
            img={"/assets/icon3.svg"}
            title={"Secure Transactions"}
            description={
              "SkillBit prioritizes security in Bitcoin transactions. You can execute Bitcoin (BTC) payments with confidence, knowing that the platform follows industry-standard security practices."
            }
          />
          <BenefitsSectionTwo
            bgColor={"#E0E3DE"}
            h={"400px"}
            dir={"9px 9px 70px 70px"}
            img={"/assets/icon4.svg"}
            title={"Verified Experts"}
            description={
              "Every professional on SkillBit is verified, ensuring that you're hiring experts with the right skills and knowledge in the Bitcoin space"
            }
            mt={"90px"}
          />
        </Flex>
      </Box>
      <Box bgColor={"#fff"} p="40px 80px">
        <Flex gap="60px" align={"center"}>
          <VStack align="start" gap="20px">
            <Text color="#000" fontWeight={600} fontSize={"40px"}>
              Discover the Best{" "}
              <Text as={"span"} color={"var(--pink)"}>
                Bitcoin
              </Text>{" "}
              Professionals for your Projects
            </Text>
            <Text color="#000" fontWeight={400} fontSize={"18px"}>
              SkillBit provides a centralized platform for clients and
              professionals in the Bitcoin industry. Connect with verified
              experts, transact securely with Bitcoin payments, and
              revolutionize your hiring process.
            </Text>
            <HStack align={"start"} gap={"30px"}>
              <Box>
                <Text color="#000" fontWeight={700} fontSize={"40px"}>
                  50%
                </Text>
                <Text color="#000" fontWeight={400} fontSize={"16px"}>
                  Save Time and Money on your Bitcoin Projects
                </Text>
              </Box>
              <Box>
                <Text color="#000" fontWeight={700} fontSize={"40px"}>
                  50%
                </Text>
                <Text color="#000" fontWeight={400} fontSize={"16px"}>
                  Save Time and Money on your Bitcoin Projects
                </Text>
              </Box>
            </HStack>
          </VStack>
          <Box>
            <Img src="/assets/discover.png" w="1300px" />
          </Box>
        </Flex>
      </Box>
      <Flex
        flexDir={"column"}
        align={"center"}
        justify={'center'}
        gap='20px'
        bgImage={"/assets/cta-img.png"}
        h="400px"
      >
        <Text color="#fff" fontSize={"40px"} fontWeight={600}>
          Discover and join{" "}
          <Text as={"span"} color="var(--pink)">
            SkillBit
          </Text>
        </Text>
        <Text fontSize={'16px'} fontWeight={400} color='#fff'>
          Connect with skilled Bitcoin professionals and revolutionize your hiring process
        </Text>
        <HStack gap='20px'>
          <Box as="button" bgColor={'var(--pink)'} py='10px' px='25px' color={'#fff'} borderRadius={'4px'}>
            <Link href="/signup" _hover={{ textDecor: 'none' }}>
              Sign Up
            </Link>
          </Box>
          <Box as="button" bgColor={'transparent'} border={'1px solid #fff'} py='10px' px='25px' color={'#fff'} borderRadius={'4px'}>
            <Link href="/login" _hover={{ textDecor: 'none' }}>
              Sign In
            </Link>
          </Box>
        </HStack>
      </Flex>
      <Footer />
    </>
  );
};

export default HomePage;
