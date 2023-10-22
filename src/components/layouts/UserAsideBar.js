import React from 'react';

import { MdSpaceDashboard, MdWorkspaces, MdClose, MdOutlinePayments, MdOutlineSettings } from 'react-icons/md';

import {
  Flex,
  HStack,
  Box,
  Text,
  Grid,
  GridItem,
  Show,
  Link,
  Img,
} from '@chakra-ui/react';
import NavLayout from './NavLayout';
import { useMenu } from '../../hooks/MenuProvider';

import { NavLink, useLocation } from 'react-router-dom';
import { BiMessageDots } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';

// Styles
const navContainerStyles = {
  p: '0.5em 0.8em',
  minWidth: '155px',
  display: 'inherit',
  borderRight: '5px solid transparent',
  _hover: {
    background: '#FE4600',
    display: 'inherit',
    borderRadius: '8px',
    p: {
      color: '#fff',
    },
    svg: {
      fill: '#fff',
    },
  },
};

const UserAsideBar = ({ children }) => {
  // control displaying menu
  const drawer = useMenu();

  return (
    <>
      <Box
        w={{ base: 'full', lg: '0' }}
        h={{ base: 'full', lg: '0' }}
        bg="#f1f1f1"
        p="0px"
        top="0px"
        left="0px"
        bottom="0px"
        right="0px"
        opacity={'0.3'}
        style={{ zIndex: '998' }}
        position={'fixed'}
        display={`${drawer.isopen ? 'auto' : 'none'}`}
        onClick={() => drawer.setMenuStatus((_prev) => !_prev)}
      ></Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr', lg: '21rem auto' }}>
        {/** Side bar menu */}
        <GridItem
          style={{ zIndex: '999', transition: 'right 0.5s linear 0s' }}
          right={{
            base: `${drawer.isopen ? '0%' : '-100%'}`,
            md: '',
            lg: '0%',
          }}
          top="0px"
          position={{ base: 'fixed', md: 'fixed', lg: 'sticky' }}
          w={{ base: '27rem', md: '24rem', lg: 'auto' }}
        >
          <Flex
            as="div"
            flexDir={'column'}
            bgColor="#fcfcfc"
            active
            pt="10"
            px="10"
            h={'100vh'}
          >
            {/** logo and close icon */}
            <HStack alignItems="center" justify="space-between">
              <HStack>
                <Img src='/skillbit-logo.svg' alt='logo' />
                <Text
                  color='#1A1A1A'
                  className='ubuntu'
                  cursor="pointer"
                  fontFamily="logo"
                  fontSize="20px"
                  fontWeight="700"
                >
                  Skillbit
                </Text>
              </HStack>
              <Show below="lg">
                <Box
                  fontSize="3xl"
                  color={'#1a1a1a'}
                  cursor="pointer"
                  onClick={() => drawer.setMenuStatus((_prev) => !_prev)}
                >
                  <MdClose />
                </Box>
              </Show>
            </HStack>

            <Flex flexDir={'column'} align="start" gap="10" mt={'12'}>
              <CustomRouteLink
                title={'Overview'}
                icon={<MdSpaceDashboard />}
                route={'/user/overview'}
              />
              <CustomRouteLink
                title={'Applications'}
                icon={<MdWorkspaces />}
                route={'/user/application'}
              />
              
              <CustomRouteLink
                title={'Message'}
                icon={<BiMessageDots />}
                route={'/message'}
              />
              <CustomRouteLink
                title={'Settings'}
                icon={<MdOutlineSettings />}
                route={'/settings'}
              />
            </Flex>
          </Flex>
        </GridItem>
        {/** past body contents to navbar */}
        <GridItem px={['0', '4', '10']}>
          <Box w="full">
            <NavLayout title={'Users'}>{children}</NavLayout>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

// custom route link
const CustomRouteLink = ({ route, title, icon }) => {
  // control displaying menu
  const drawer = useMenu();

  // gets route and changes link styling if it matches route
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <>
      <Link
        {...navContainerStyles}
        background={isActive ? '#FE4600' : ''}
        borderRadius={isActive ? '8px' : 'none'}
        as={NavLink}
        exact
        to={`${route}`}
        isActive={() => window.location.pathname === route}
        onClick={() => drawer.setMenuStatus((_prev) => !_prev)}
      >
        <Flex
          color={isActive ? '#fff' : '#5b5b5b'}
          gap={'5px'}
          align="center"
          cursor={'pointer'}
          className='nunito'
          fontWeight={400}
        >
          {React.cloneElement(icon, {
            color: isActive ? '#fff' : '#5b5b5b',
          })}
          <Text fontSize={'16px'}>
            {title}
          </Text>
        </Flex>
      </Link>
    </>
  );
};

export default UserAsideBar;
