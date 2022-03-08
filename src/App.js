import React, { useState } from 'react';
import Clock from 'react-live-clock';

import {
  ChakraProvider,
  Box,
  Container,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import theme from './theme'

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [textColor, setTextColor] = useState('#FF3131');
  const [interaction, setInteraction] = useState(false);

  // Fix this
  // setTimeout(() => {
  //   if (interaction) {
  //     setTextColor(interaction ? '#FF3131' : 'gray.800')
  //   }
  // }, 1000);


  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" setInteraction={setInteraction} interaction={interaction} />
        <Container pt='30vh'>
          {
            <Center fontFamily="DS DIGI">
              <Box border='1px' w={12} borderRadius='50px' p={2} color={interaction ? 'white' : 'gray.800'}>
                <Text fontSize='xxl' d={interaction ? '' : 'none'} color='white'>{interaction ? 'D_D' : 'D_D'}</Text>
              </Box>
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
