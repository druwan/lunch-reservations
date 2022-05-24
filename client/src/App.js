import { Box } from '@chakra-ui/react';
import Navbar from './component/Navbar/Navbar';
import HomeView from './Views/HomeView';

const App = () => {
  return (
    <Box>
      <Navbar />
      <HomeView />
    </Box>
  );
};

export default App;
