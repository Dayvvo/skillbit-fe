import React from 'react';

import { Flex } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';

const Spinner = ({ fontSize = 10,full =false }) => {
  return (
    <Flex {...full?{minW:'100vw',minH:'100vh'}:{}} 
     justifyContent="center" alignItems="center">
      <BeatLoader color={'#5e55ef'} loading={true} size={fontSize} />
    </Flex>
  );
};

export default Spinner;
