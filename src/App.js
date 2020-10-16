import React from 'react';
import { Box, Grommet } from 'grommet';
import Home from './features/Home/Home'
import CV from './features/CV/CV'
import Portfolio from './features/Portfolio/Portfolio'
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
        <Box 
          direction='row' 
          flex 
          overflow={{horizontal:'hidden'}}
          align='center'
          justify='center'
        >
          <Home></Home>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
