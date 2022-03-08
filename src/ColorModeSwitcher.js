import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { Power } from 'tabler-icons-react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaSun, Power);

  const toggleMode = () => {
    props.setInteraction(!props.interaction)
    return toggleColorMode
  };

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={() => toggleMode()}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
