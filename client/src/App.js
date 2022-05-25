import { Flex } from '@chakra-ui/react';
import Navbar from './component/Navbar/Navbar';
import Home from './Views/Home';

const App = () => {
  return (
    <Flex direction={'column'} minHeight={'100vh'}>
      {/* <Navbar /> */}
      <Home />
    </Flex>
  );
};

export default App;
