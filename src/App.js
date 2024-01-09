import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import LeftNav from './Components/LeftNav';
import MainSec from './Components/MainSec';

function App() {
  return (
    <Box>
      <Flex>
        <LeftNav/>
        <MainSec/>
      </Flex>
    </Box>
  );
}

export default App;
