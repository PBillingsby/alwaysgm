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
        <ColorModeSwitcher setInteraction={setInteraction} interaction={interaction} />
        <Container pt='30vh'>
          {
            <Center fontFamily="monospace">
              <Box p={8}>
                {interaction ?
                  <Text fontSize='6xl' color={textColor} ticking>
                    AL:WA:YS
                    </Text>
                  :
                  <Text fontSize='6xl' color='#FF3131'>
                    <Clock format={'HH:mm:ss'} ticking />
                  </Text>
                }
              </Box>
              <VStack color='white'>
                <Text color='white'>{interaction ? 'gm' : 'am'}</Text>
                <Text color='white'>{interaction ? 'gn' : 'pm'}</Text>
              </VStack>
            </Center>
          }
        </Container>
      </Box>
    </ChakraProvider >
  );
}

export default App;
