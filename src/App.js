import React, { useState } from 'react';
import Clock from 'react-live-clock';

import {
  ChakraProvider,
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Center,
} from '@chakra-ui/react';
import theme from './theme'

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [textColor, setTextColor] = useState('#FF3131');
  const [interaction, setInteraction] = useState(false);

  setTimeout(() => {
    setTextColor(textColor === '#FF3131' ? 'gray.800' : '#FF3131')
  }, 750);


  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Container pt='30vh'>
          {
            <HStack spacing={8}>
              <ColorModeSwitcher setInteraction={setInteraction} interaction={interaction} />
              <Center p={8} fontFamily="monospace">
                {interaction ?
                  <Text fontSize='6xl' color={textColor} ticking>
                    AL:WA:YS
                    </Text>
                  :
                  <Text fontSize='6xl' color='#FF3131'>
                    <Clock format={'HH:mm:ss'} ticking />
                  </Text>
                }
                <VStack color='white'>
                  <Text color='white'>{interaction ? 'GM' : 'AM'}</Text>
                  <Text color='white'>{interaction ? 'GN' : 'PM'}</Text>
                </VStack>
              </Center>
            </HStack>
          }
        </Container>
      </Box>
    </ChakraProvider >
  );
}

export default App;
