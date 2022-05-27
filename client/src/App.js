import { Box, Container, Flex } from '@chakra-ui/react';
import Calendar from './component/Calendar/Calendar';
import Navbar from './component/Navbar/Navbar';
import Home from './Views/Home';

const App = () => {
  return (
    <Flex direction={'column'} minHeight={'100vh'}>
      <Navbar />
      <Box>
        <Calendar />
        <Home />
      </Box>
    </Flex>
  );
};

export default App;
