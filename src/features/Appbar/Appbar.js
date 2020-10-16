import React from 'react'
import { Box, Button, Heading } from 'grommet'
import { Bookmark, Clipboard } from 'grommet-icons'

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);

const Appbar = () => {
        return (
            <AppBar>
                <Heading level='3' margin='none'>My App</Heading>
                <Box 
                    direction='row'
                    align='center'
                    pad={{ left: 'small', right: 'large', vertical: 'small' }}
                    gap='large'
                >
                    <Button
                        icon={<Bookmark/>}
                        label='Portfolio'
                    />  
                    
                    <Button
                        icon={<Clipboard/>}
                        label='CV'
                    />
              </Box>
            </AppBar>
        )
}

export default Appbar