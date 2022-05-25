import { Box } from '@chakra-ui/react';
import Navbar from './component/Navbar/Navbar';
import Home from './Views/Home';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Home />
    </Box>
  );
};

export default App;
