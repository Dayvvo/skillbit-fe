import {  useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Spinner from '../../../components/layouts/Spinner';
import useWidget from '../../../hooks/useWidget';
import {useHistory} from 'react-router-dom'
import {
  Table,
  Thead,
  Box,
  Flex,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
  Image,
  Text,
  Circle
} from '@chakra-ui/react';
import useTeams from '../../../hooks/useTeams';

import { capitalizeString, renderJSX } from '../../../utils/helpers';
import { AiOutlineUser } from 'react-icons/ai';
import { formatDateTimeString } from '../../Admin/audit';


const UsersContent = ({ profiles, filterText }) => {
  const filterUsers = (item) => {
    return (
      item?.firstName?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.lastName?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.contactEmail?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.role.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <Tbody>
      {profiles?.length ? (
        profiles.filter(filterUsers).map((profile, index) => {
          const {
            _id: user,
            avatar,
            firstName: firstname,
            lastName: lastname,
            title,
            role,
            createdAt,
          } = profile;

          const fName = capitalizeString(firstname);
          const lName = capitalizeString(lastname);
          // const titleValue = title || 'Nil';

          const signedUp = formatDateTimeString(createdAt);
          return (
            <Tr key={index}>
              <Td py="0.9em">
                <Flex gap="0.5em" align="center">
                  {renderJSX(
                    avatar,
                    <Image
                      width={'45px'}
                      height="45px"
                      borderRadius={'50%'}
                      src={avatar}
                    />,

                    <Circle border="1px solid var(--borders)" size="46px">
                      <AiOutlineUser fontSize={'25px'} />
                    </Circle>
                  )}
                  <Text>
                    {fName && lName ? (
                      <>
                        {fName} {lName}{' '}
                      </>
                    ) : (
                      'Nil'
                    )}
                  </Text>
                </Flex>
              </Td>
              {/* <Td py='0.9em'>{title || 'Nil'}</Td> */}
              <Td py={'0.9em'}>{role}</Td>
              <Td py={'0.9em'}>{signedUp}</Td>
              <Td py={'0.9em'}>
                <Flex justify={'center'}>
                  {/* <UserOptions user={profile} userlist /> */}
                </Flex>
              </Td>
              {/* <Td py='0.9em'>

                      <StatusIndicator role={role}></StatusIndicator>
                      <span>{role === 'Guest' ? 'Pending' : 'Active'}</span>

                    </Td> */}
            </Tr>
          );
        })
      ) : (
        <h3>No user</h3>
      )}
    </Tbody>
  );
};



const OnboardingScreen = () => {
  // Selectors
  const { loading } = useWidget();

  const [filterText, setFilterText] = useState('');
 
  const {onboardings,fetchOnboarding} = useTeams()
  
  const fetchOnboardingRefs= useRef(fetchOnboarding);

  const history = useHistory()


  useEffect(()=>{
    fetchOnboardingRefs.current()
  },[])

  // Ensure the page is only accessible by Admins
  // if (user && user.role !== 'Admin') {
  //   return <Redirect to='/' />
  // }


  const filterUsers = (item) => {
    return (
      item?.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.contactEmail?.toLowerCase().includes(filterText.toLowerCase()) 
    )
  };



  return (
    <Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap="8"
        mt='0.8em'
        align={['start', 'center']}
        justify="space-between"
        px='1em'
      >

        <Box w={['full', '30rem']}>
          <Flex
            align={'center'}
            gap="2"
            bg="#fcfcfc"
            border="2px solid #f6f6f6"
            borderRadius="3px"
            px="1.3rem"
            py="0.5rem"
          >
            <FiSearch color="#6f6f74" />
            <input
              type="text"
              style={{
                background: 'transparent',
                outline: 'none',
                width: '100%',
                padding: '0.5rem',
              }}
              placeholder="Search..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Flex>
        </Box>


      </Flex>

      {loading && <Spinner />}

      {/* {error && error.msg && <Message msg={error.msg} variant='error' />} */}

      {onboardings?.length? (
            <Box
             pb="100px"
             mt="8"
             overflow={'auto'}
             className="dontShowScrollBar"
             w={{
                base: 'calc(100vw - 6rem)',
                md: 'calc(100vw - 4rem)',
                lg: 'calc(100vw - 21vw)',
             }}
            >
            <TableContainer mt="1em">
                <Table variant="simple">
                <Thead>
                    <Tr>
                      <Th py="0.8em" fontSize={'14px'}>
                          Name
                      </Th>
                      
                      <Th py="0.8em" fontSize={'14px'}>
                          Email
                      </Th>
                      
                      <Th py="0.8em" fontSize={'14px'}>
                          Onboarding Status
                      </Th>

                      <Th py="0.8em" fontSize={'14px'}>
                          Date Created
                      </Th>

                      <Th>Action</Th>

                    </Tr>
                </Thead>

                <Tbody>
                    { 
                        onboardings.filter(filterUsers).map((profile, index) => {
                        const {
                            contactEmail,
                            name,
                            status,
                            createdAt,
                        } = profile;

                        const fullName = capitalizeString(name);

                        return (
                            <Tr cursor={'pointer'} onClick={()=>{history.push(`/teams/onboarding/${profile?._id}`)}} key={index}>
                              <Td py={'0.9em'}>{fullName}</Td>
                              <Td py={'0.9em'}>{contactEmail}</Td>
                              <Td py={'0.9em'}>{status}</Td>
                              <Td py={'0.9em'}>{createdAt}</Td>

                              <Td py={'0.9em'}>
                                  <Flex justify={'center'}>
                                      {/* <UserOptions user={profile} userlist /> */}
                                  </Flex>
                              </Td>
                            </Tr>
                        );
                        })
                    }
                </Tbody>

                </Table>

            </TableContainer>
            </Box>
        )
        :
        <Box p='1em'>
          <h3>No results found</h3>
        </Box>
      }
      
    </Box>
  );
};

export default OnboardingScreen;
