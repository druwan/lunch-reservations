import { Box, Flex } from '@chakra-ui/react';
import Navbar from './component/Navbar/Navbar';
import Home from './views/Home';

const App = () => {
  return (
    <Flex direction={'column'} minHeight={'100vh'}>
      <Navbar />
      <Box mt={8}>
        <Home />
      </Box>
    </Flex>
  );
};

export default App;
