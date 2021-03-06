import React from 'react';
import { Box, Grommet} from 'grommet';
import Appbar from './features/Appbar/Appbar';

const theme = {
  global : {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};


const App = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Appbar></Appbar>
      </Box>
    </Grommet>
  );
}

export default App;
