import React from 'react'
import {
  Flex,
  Box,
  GridItem,
  Text,
  Img,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import UserAsideBar from '../../components/layouts/UserAsideBar'
import { useEffect } from 'react';

const UserDashboard = () => {
  
  useEffect(()=>{

  },[])  
  
  return (
    <UserAsideBar userType={'seller'}>
      <Flex
        mt={"10"}
        gap="8"
        // w='1000px'
        bgColor={"#ffff"}
        borderRadius={"8px"}
        border={"1px solid #dbe1e7"}
      >
        <CustomStatisticCard
          title={"Projects in progress"}
          length={"295"}
          bgColor={"#FFF0EB"}
        >
          <Img src="/assets/project.png" alt="total-project" w="35px" />
        </CustomStatisticCard>

        <CustomStatisticCard
          title={"Completed Projects"}
          length={"143"}
          bgColor={"#EBFFEF"}
        >
          <Img
            src="/assets/completed-project.png"
            alt="completed-project"
            w="35px"
          />
        </CustomStatisticCard>

        <CustomStatisticCard
          title={"Ongoing Projects"}
          length={"98"}
          bgColor={"#FFECEB"}
        >
          <Img
            src="/assets/ongoing-project.png"
            alt="ongoing-project"
            w="35px"
          />
        </CustomStatisticCard>
      </Flex>

      <Box mb="30px">
        <Flex justify={"space-between"} align="center" my="25px">
          <Text
            className="poppins"
            color="#000000"
            fontSize={"22px"}
            fontWeight={600}
          >
            My Projects
          </Text>
          <Flex gap="20px">
            <Flex
              bgColor={"#f9fbff"}
              className="poppins"
              gap="10px"
              align="center"
              p="8px"
              borderRadius={"4px"}
            >
              <Text color="#7E7E7E" fontWeight={400} fontSize={"12px"}>
                Sort By:{" "}
                <Text
                  as={"span"}
                  color="#3D3C42"
                  fontWeight={600}
                  fontSize={"12px"}
                >
                  Newest
                </Text>
              </Text>
              <AiOutlineDown color="#3D3C42" fontSize={"12px"} />
            </Flex>
            {/* <Text
              bgColor={"#f9fbff"}
              className="poppins"
              p="8px"
              borderRadius={"4px"}
              color={"#FD4600"}
              fontWeight={600}
              fontSize={"14px"}
            >
              View Transactions
            </Text> */}
          </Flex>
        </Flex>
        <TableContainer bg="#fff">
          <Table variant="simple">
            <Thead>
              <Tr h="50px">
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Project Id
                  </Text>
                </Th>
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Owner
                  </Text>
                </Th>
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Duration(Days)
                  </Text>
                </Th>
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Hours Per Day
                  </Text>
                </Th>
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Payment Status
                  </Text>
                </Th>
                <Th border={"none"}>
                  <Text fontWeight={400} color={"#030229"} fontSize={"14px"}>
                    Project Status
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr color={"#000000"} fontSize={"13px"} bgColor={"#fff"} h="50px">
                <Td border={"none"} mt="10px">
                  #876364
                </Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={100} w="80px" /> */}
                  <Text>100%</Text>
                </Td>
              </Tr>
              <Tr color={"#000000"} fontSize={"13px"} h="50px">
                <Td border={"none"}>#876364</Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={50} w="80px" /> */}
                  <Text>50%</Text>
                </Td>
              </Tr>
              <Tr color={"#000000"} fontSize={"13px"} h="50px">
                <Td border={"none"}>#876364</Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={100} w="80px" /> */}
                  <Text>100%</Text>
                </Td>
              </Tr>
              <Tr color={"#000000"} fontSize={"13px"} h="50px">
                <Td border={"none"}>#876364</Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={100} w="80px" /> */}
                  <Text>100%</Text>
                </Td>
              </Tr>
              <Tr color={"#000000"} fontSize={"13px"} h="50px">
                <Td border={"none"}>#876364</Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={50} w="80px" /> */}
                  <Text>50%</Text>
                </Td>
              </Tr>
              <Tr color={"#000000"} fontSize={"13px"} h="50px">
                <Td border={"none"}>#876364</Td>
                <Td border={"none"}>Stephen Nico</Td>
                <Td border={"none"}>Bitcoin Developer</Td>
                <Td border={"none"}>1 Month</Td>
                <Td border={"none"}>Pending</Td>
                <Td border={"none"}>
                  {/* <Progress colorScheme="pink" borderRadius={'10px'} value={100} w="80px" /> */}
                  <Text>100%</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </UserAsideBar>
  )
}

const CustomStatisticCard = ({ title, length, children, bgColor }) => {
  return (
    <GridItem>
      <Flex
        align={"center"}
        gap="8"
        py={"6"}
        px={"8"}
        borderRadius={"10px"}
        cursor={"pointer"}
      >
        <Box borderRadius={"50px"} p="18px" bgColor={bgColor}>
          {children}
        </Box>
        <Box>
          <Text
            color={"#ACACAC"}
            className="poppins"
            fontSize="14.5px"
            fontWeight="400"
          >
            {title}
          </Text>
          <Text
            align="left"
            color={"#333333"}
            fontSize="20.97px"
            fontWeight="700"
          >
            {length}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default UserDashboard