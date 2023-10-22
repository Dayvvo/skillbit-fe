import React from "react";
import AdminAsideBar from "../../components/layouts/AdminAsideBar";
import { Box, Button, Circle, Flex, HStack, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

const applications = [
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
  {
    name: 'Stephen Nico',
    position: 'Bitcoin Developer',
    email: 'amalaika.br@gmail.com',
    phone: '+2349023421755',
    img: '/assets/nico-img.png',
    icon1: <BsFillTelephoneFill color="var(--pink)" fontSize={'10px'} />,
    icon2: <BsFillEnvelopeFill color="var(--pink)" fontSize={'10px'} />,
    icon3: <AiOutlineClose />,
    skills: ['HTML5', 'CSS3', 'IOT'],
    button1: 'Accept',
    button2: 'Reject',
  },
]

const HirerProject = () => {
  return (
    <AdminAsideBar>
      <Flex
        bgColor={"#fff"}
        align={"center"}
        justify={"space-between"}
        h="73px"
        borderRadius={"8px"}
        p="15px 20px"
        mt="20px"
      >
        <Text color="#384A62" fontSize={"18px"} fontWeight={600}>
          We found "
          <Text as="span" color="var(--pink)">
            2404
          </Text>
          " applications for the Bitcoin Developer role
        </Text>
        <Flex
          align={"center"}
          bgColor={"#F2F5FD"}
          justify={"center"}
          gap={"8px"}
          w="160px"
          h="40px"
          fontSize={"14px"}
          fontWeight={600}
        >
          <Text color={"#384A62"}>Sort by: </Text>
          <Text color="var(--pink)">Date</Text>
          <AiOutlineCaretDown color="#040921" />
        </Flex>
      </Flex>
      <SimpleGrid columns={3} spacing={10} my='20px'>
        {
          applications.map(({name,position,email,phone, img,icon1,icon2,icon3,skills,button1,button2}) => (
            <Box key={name} p='30px 20px' bgColor={'#FFF3EF'} borderRadius={'8px'} w='330px' h='300px'>
              <Flex gap={'10px'}>
                <Img src={img} />
                <VStack align={'start'}>
                  <Text color={'#384A62'} fontSize={'18px'} fontWeight={600}>{name}</Text>
                  <Text color={'#384A62'} fontSize={'14px'} fontWeight={400}>{position}</Text>
                </VStack>
              </Flex>
              <Flex gap='10px' mt='20px'>
                <HStack gap='1px'>
                  <Box>{icon1}</Box>
                  <Text color={'#04092199'} fontWeight={400} fontSize={'12px'}>{email}</Text>
                </HStack>
                <HStack gap='1px'>
                  <Box>{icon2}</Box>
                  <Text color={'#04092199'} fontWeight={400} fontSize={'12px'}>{phone}</Text>
                </HStack>
              </Flex>
              <Flex justify={'space-between'} mt='20px'>
                {skills.map((skill) => (
                  <Flex key={skill} align={'center'} fontSize={'12px'} justify={'center'} bgColor={'#fff'} borderRadius={'26px'} gap={'5px'} p='4px 8px' w='90px' h='30px'>
                    <Text>{skill}</Text>
                    <Box>{icon3}</Box>
                  </Flex>
                ))}
              </Flex>
              <Flex justify={'center'} gap='30px' mt='30px'>
                <Box as='button' bgColor={'var(--pink)'} borderRadius={'5px'} p='10px 20px' color={'#fff'} fontWeight={600} fontSize={'15px'} w='120px' h='40px'>
                  {button1}
                </Box>
                <Box as='button' borderRadius={'5px'} border={'1px solid var(--pink)'} p='10px 20px' color={'var(--pink)'} fontWeight={600} fontSize={'15px'} w='120px' h='40px'>
                  {button2}
                </Box>
              </Flex>
            </Box>
          ))
        }
      </SimpleGrid>
    </AdminAsideBar>
  );
};

export default HirerProject;
