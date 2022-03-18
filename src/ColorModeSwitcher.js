import React, { useState } from 'react';
import { useColorMode, useColorModeValue, Flex, IconButton, Icon, ScaleFade } from '@chakra-ui/react';
import { Power } from 'tabler-icons-react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'D_D');
  const [toggle, setToggle] = useState(false);

  const toggleMode = () => {
    setToggle(!toggle)
    props.setInteraction(!props.interaction)
    return toggleColorMode
  };

  return (
    <Flex>
      {props.interaction ?
        <ScaleFade initialScale={0.1} reverse in={toggle} filter={{ boxShadow: '0px 0px 15px #a5a5a5' }}>
          <svg height="48" viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1px" padding="6px" stroke-linejoin="round" hover={{ boxShadow: (toggle ? '' : '0px 0px 15px #a5a5a5') }} xmlns="http://www.w3.org/2000/svg" onClick={() => toggleMode()} filter='drop-shadow(3px 5px 2px rgb(0 1 1 / 0.5)'>
            <rect width="47.4353" height="47.4353" rx="23.7176" outline="gray.800" fill="gray.800" />
            <rect x="28.1648" y="30.3882" width="2.96471" height="9.63529" transform="rotate(90 28.1648 30.3882)" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44702 14.8235V30.3882H9.94045C14.2746 30.3882 17.7882 26.9039 17.7882 22.6058C17.7882 18.3078 14.2746 14.8235 9.94045 14.8235H4.44702ZM7.81034 18.1588L7.81034 27.0529H9.94045C12.4171 27.0529 14.4249 25.0619 14.4249 22.6058C14.4249 20.1498 12.4171 18.1588 9.94045 18.1588H7.81034Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3882 14.8235V30.3882H35.8816C40.2158 30.3882 43.7294 26.9039 43.7294 22.6058C43.7294 18.3078 40.2158 14.8235 35.8816 14.8235H30.3882ZM33.7515 18.1588L33.7515 27.0529H35.8816C38.3583 27.0529 40.366 25.0619 40.366 22.6058C40.366 20.1498 38.3583 18.1588 35.8816 18.1588H33.7515Z" fill="white" />
          </svg>
        </ScaleFade>
        :
        <IconButton
          border='1px solid white'
          aria-label={`Switch to ${text} mode`}
          w='fit-content'
          size='lg'
          _hover={{ boxShadow: '0px 0px 15px #a5a5a5' }}
          onClick={() => toggleMode()}
          icon={<Icon as={Power} />}
          isRound
          {...props}
        />
      }
    </Flex >
  );
};