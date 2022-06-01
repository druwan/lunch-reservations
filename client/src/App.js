import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Home from './views/Home';

const App = () => {
  return (
    <Flex
      direction={'column'}
      minHeight={'100vh'}
      bg={useColorModeValue('slOrange.200', 'slBlue.900')}
      paddingX={'10'}
    >
      <Navbar />
      <Box>
        <Home />
        <Footer />
      </Box>
    </Flex>
  );
};

export default App;
