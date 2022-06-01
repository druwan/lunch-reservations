import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label='toggle theme'
          colorScheme={useColorModeValue('slBlue', 'slOrange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleTheme;
