import { FaUserCheck, FaUserSlash } from "react-icons/fa"
// import { AiFillFire } from "react-icons/ai"
// import { BsClockHistory } from "react-icons/bs"
// import { useState } from "react"
// import { TbFlag3 } from "react-icons/tb"
import { HiUsers } from "react-icons/hi"
import {
  Flex,
  Box,
  Grid,
  GridItem,
  Text,
  Img,
  // Select,
  // Circle,
} from "@chakra-ui/react"

import useWidget from "../../hooks/useWidget"
import useTeams from "../../hooks/useTeams"

import AdminAsideBar from "../../components/layouts/AdminAsideBar"
import Spinner from "../../components/layouts/Spinner"
import ActivityLogs from "../../components/logs/ActivityLogs"
// import { ActivityLogDetail, formatDateTimeString } from "./audit"


const AdminDashboard = () => {

  return (
    <AdminAsideBar>
      <Text className="nunito" fontSize={"20px"} fontWeight="700">
        Overview
      </Text>

      {/* <Text fontSize={"16"} color="gray.500">
        You can now see all onboarding information of your organization.
      </Text> */}

      <Flex
        mt={"10"}
        gap="8"
        w='1000px'
        bgColor={'#f7f7f7'}
        borderRadius={'8px'}
      >
        <CustomStatisticCard
          title={"Projects in progress"}
          length={"25"}
        >
          <Img src="/assets/profile-2user.png" alt="profile"  w='35px' />
        </CustomStatisticCard>

        <CustomStatisticCard
          title={"Projects in progress"}
          length={"25"}
        >
          <Img src="/assets/profile-2user.png" alt="profile"  w='35px' />
        </CustomStatisticCard>

        <CustomStatisticCard
          title={"Projects in progress"}
          length={"25"}
        >
          <Img src="/assets/profile-2user.png" alt="profile"  w='35px' />
        </CustomStatisticCard>
      </Flex>


      {/* <Box>
        <ActivityLogs logs={logs} _user={"admin"} />
      </Box> */}

 
    </AdminAsideBar>
  )
}

// custom card
const CustomStatisticCard = ({ title, length, children }) => {
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
        <Box borderRadius={"50px"} boxShadow="sm" p="18px" bgColor="#ffffff">
          {children}
        </Box>
        <Box>
          <Text
            color={"#ACACAC"}
            className="nunito"
            fontSize="14.5px"
            fontWeight="400"
          >
            {title}
          </Text>
          <Text align="left" color={'#333333'} fontSize="20.97px" fontWeight="700">
            {length}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  )
}

export default AdminDashboard
