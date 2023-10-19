import {  useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import UsersContent from '../../components/users/UsersContent';
import Spinner from '../../components/layouts/Spinner';
import useWidget from '../../hooks/useWidget';

import {
  Table,
  Thead,
  Box,
  Flex,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import Btn from '../../widgets/Button';
import useTeams from '../../hooks/useTeams';



const UsersScreen = ({profiles}) => {
  // Selectors
  const { loading } = useWidget();

  const [filterText, setFilterText] = useState('');
 
  const {openOnboardingModal} = useTeams()

  // Ensure the page is only accessible by Admins
  // if (user && user.role !== 'Admin') {
  //   return <Redirect to='/' />
  // }




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

        <Btn px="1em" onClick={openOnboardingModal} >
          Onboard new user
        </Btn>

      </Flex>

      {loading && <Spinner />}

      {/* {error && error.msg && <Message msg={error.msg} variant='error' />} */}

      {profiles?.length && (
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
                  {/* <Th py='0.8em'  fontSize={'14px'}>Title</Th> */}
                  <Th py="0.8em" fontSize={'14px'}>
                    Role
                  </Th>
                  <Th py="0.8em" fontSize={'14px'}>
                    Sign up Date
                  </Th>
                  <Th py="0.8em" fontSize={'14px'}>
                    Action
                  </Th>
                  {/* <Th>Action</Th> */}
                </Tr>
              </Thead>
              <UsersContent profiles={profiles} filterText={filterText} />
            </Table>
          </TableContainer>
        </Box>
      )}
      
    </Box>
  );
};

export default UsersScreen;
