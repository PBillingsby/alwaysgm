import React, { useState } from 'react';
import Clock from 'react-live-clock';

import {
  ChakraProvider,
  Text,
  VStack,
  HStack,
  Center,
  Flex,
} from '@chakra-ui/react';
import theme from './theme'

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [textColor, setTextColor] = useState('#FF3131');
  const [interaction, setInteraction] = useState(false);
  let date = new Date();
  const hours = date.getHours();
  setTimeout(() => {
    setTextColor(textColor === '#FF3131' ? 'gray.800' : '#FF3131');
  }, 750);

  return (
    <ChakraProvider theme={theme}>
      <Center pt='40vh'>
        <HStack fontFamily='monospace' p={4} borderRadius={8}>
          <ColorModeSwitcher setInteraction={setInteraction} interaction={interaction} />
          {interaction ?
            <Text fontSize='6xl' color={textColor}>
              <>AL</>
              <Flex d='inline' color='#FF3131'>:</Flex>
              <>WA</>
              <Flex d='inline' color='#FF3131'>:</Flex>
              <>YS</>
            </Text>
            :
            <Text fontSize='6xl' color='#FF3131'>
              <Clock format={'HH:mm:ss'} ticking />
            </Text>
          }
          <VStack color='white' px={2}>
            <Text fontSize='sm' color={hours >= 12 ? 'gray.600' : 'white'}>{interaction ? 'GM' : 'AM'}</Text>
            <Text fontSize='sm' color={hours >= 12 ? 'white' : 'gray.800'}>{interaction ? 'GN' : 'PM'}</Text>
          </VStack>
        </HStack>
      </Center>
    </ChakraProvider >
  );
}

export default App;
