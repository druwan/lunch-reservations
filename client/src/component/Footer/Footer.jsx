import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box align={'center'} fontSize={'md'} m={'4'} position={'sticky'}>
      <Text color={useColorModeValue('slBlue.900', 'slOrange.500')}>
        <Link href='https://github.com/druwan' isExternal mx={'4'}>
          &copy; {new Date().getFullYear()} Christopher Vestman{' '}
          <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
