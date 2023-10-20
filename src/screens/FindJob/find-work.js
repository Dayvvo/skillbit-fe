import React from "react";
import TopNav from "../../components/layouts/TopNav";
import {
  Box,
  Flex,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

const skillTag = () => {
  return (
    <HStack align={"start"} gap={"15px"}>
      <Text
        className="nunito"
        fontWeight={400}
        bgColor={"#F7F8F8"}
        p="4px 20px"
        border={"1px solid #DBE1E7"}
        borderRadius={'100px'}
        fontSize={"18px"}
      >
        Bitcoin
      </Text>
      <Text
        className="nunito"
        fontWeight={400}
        bgColor={"#F7F8F8"}
        p="4px 20px"
        border={"1px solid #DBE1E7"}
        borderRadius={'100px'}
        fontSize={"18px"}
      >
        Design
      </Text>
    </HStack>
  );
};

const WorKCard = ({
  title,
  priceType,
  level,
  price,
  time,
  description,
  ratings,
  location,
}) => {
  return (
    <VStack
      align={'start'}
      gap='10px'
      p="20px"
      borderRadius={"20px"}
      border={"1px solid #DBE1E7"}
      mt='20px'
      w="1110px"
    >
      <Text
        className="nunito"
        color="var(--dark-900)"
        fontWeight={700}
        fontSize={"25px"}
      >
        {title}
      </Text>
      <HStack
        align={"start"}
        gap="15px"
        className="nunito"
        fontSize={"18px"}
        fontWeight={500}
        color="var(--dark-900)"
      >
        <Text>{priceType}</Text>
        <Text>{level}</Text>
        <Text>Est. Budget {price}</Text>
        <Text>Posted {time} ago</Text>
      </HStack>
      <Text
        className="nunito"
        fontWeight={400}
        fontSize={"18px"}
        color="var(--dark-900)"
      >
        {description}
      </Text>
      {skillTag()}
      <HStack align={"start"} gap={"15px"}>
        <HStack align={"start"} gap={"6px"}>
          <MdVerified color="var(--pink)" />
          <Text
            className="nunito"
            color={"var(--dark-900)"}
            fontWeight={500}
            fontSize={"16px"}
          >
            Payment Verified
          </Text>
        </HStack>
        <HStack align={"start"} gap={"6px"}>
          <BsStarFill color="#FF9800" />
          <Text
            className="nunito"
            color={"var(--dark-900)"}
            fontWeight={500}
            fontSize={"16px"}
          >
            {ratings}
          </Text>
        </HStack>
        <HStack align={"start"} gap={"6px"}>
          <TiLocation color="var(--dark-900)" />
          <Text
            className="nunito"
            color={"var(--dark-900)"}
            fontWeight={500}
            fontSize={"16px"}
          >
            {location}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

const FindWork = () => {
  return (
    <>
      <TopNav />
      <Box p="0 80px">
        <Flex
          flexDir={"column"}
          justify={"center"}
          p="0 80px"
          bgImage={"/assets/findwork-hero.png"}
          bgColor="#000"
          // bgBlendMode={'overlay'}
          borderRadius={"10px"}
          h="420px"
          maxW="1110px"
          mx="auto"
        >
          <Text
            bgColor={"#1671D9"}
            borderRadius={"12px"}
            color="#fff"
            className="nunito"
            fontSize={"14px"}
            fontWeight={600}
            textAlign={"center"}
            w="193px"
            py="4px"
          >
            ENDLESS SUMMER SALE
          </Text>
          <Text
            fontSize={"55px"}
            fontWeight={500}
            color={"#fff"}
            className="nunito"
            lineHeight={"63px"}
            maxW={"450px"}
            my="15px"
          >
            Up to{" "}
            <Text as={"span"} fontWeight={700}>
              60% off
            </Text>{" "}
            on all items till{" "}
            <Text as={"span"} fontWeight={700}>
              September 11
            </Text>
          </Text>
          <Flex
            align={"center"}
            borderRadius={"8px"}
            justify={"center"}
            gap="6px"
            as={"button"}
            bgColor={"var(--pink)"}
            color="#fff"
            w="141px"
            h="56px"
          >
            <Text className="nunito" fontWeight={600} fontSize={"16px"}>
              Shop Now
            </Text>
            <AiOutlineRight />
          </Flex>
        </Flex>
        <Box mt="25px">
          <Text
            className="nunito"
            color="1a1a1a"
            fontSize={"30px"}
            fontWeight={700}
          >
            Jobs you might like
          </Text>
          <Text
            className="nunito"
            color="var(--dark-900)"
            fontSize={"20px"}
            fontWeight={400}
          >
            Browse and search jobs that match your experience to a client's
            hiring preferences. Ordered by most relevant.
          </Text>
        </Box>
        <Box my="20px">
          <Tabs>
            <TabList>
              <Tab
                _selected={{
                  color: "var(--pink)",
                  borderBottom: "1px solid var(--pink)",
                }}
                color={"#989898"}
                fontSize={"14px"}
              >
                Best Matches
              </Tab>
              <Tab
                _selected={{
                  color: "var(--pink)",
                  borderBottom: "1px solid var(--pink)",
                }}
                color={"#989898"}
                fontSize={"14px"}
              >
                Most recent
              </Tab>
              <Tab
                _selected={{
                  color: "var(--pink)",
                  borderBottom: "1px solid var(--pink)",
                }}
                color={"#989898"}
                fontSize={"14px"}
              >
                Most Searched
              </Tab>
              <Tab
                _selected={{
                  color: "var(--pink)",
                  borderBottom: "1px solid var(--pink)",
                }}
                color={"#989898"}
                fontSize={"14px"}
              >
                Saved Jobs
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <WorKCard
                  title={
                    "Bitcoin Designer to design a Bitcoin Wallet with full functional prototype"
                  }
                  priceType={"Fixed-price"}
                  level={"Intermediate"}
                  price={"$100"}
                  time={"6 hours"}
                  description={
                    "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
                  }
                  ratings={"4.8"}
                  location={"Remote"}
                />
                <WorKCard
                  title={
                    "Bitcoin Designer to design a Bitcoin Wallet with full functional prototype"
                  }
                  priceType={"Fixed-price"}
                  level={"Intermediate"}
                  price={"$100"}
                  time={"6 hours"}
                  description={
                    "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
                  }
                  ratings={"4.8"}
                  location={"Remote"}
                />
                <WorKCard
                  title={
                    "Bitcoin Designer to design a Bitcoin Wallet with full functional prototype"
                  }
                  priceType={"Fixed-price"}
                  level={"Intermediate"}
                  price={"$100"}
                  time={"6 hours"}
                  description={
                    "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
                  }
                  ratings={"4.8"}
                  location={"Remote"}
                />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default FindWork;
