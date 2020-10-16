import React from 'react'
import { Box, Button, Heading } from 'grommet'
import { Bookmark, Clipboard } from 'grommet-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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

const Portfolio = "<Link to="/">Home</Link>";

const Appbar = () => {
        return (
            <Router>
                <AppBar>
                    <Heading level='3' margin='none'>My App</Heading>
                    <Box 
                        direction='row'
                        align='center'
                        pad={{ left: 'small', right: 'large', vertical: 'small' }}
                        gap='large'
                    >
                        <Button label='Portfolio' icon={<Bookmark/>}>
                            <Link to="/">Portfolio</Link>
                        </Button>


                        <Button
                            icon={<Clipboard/>}
                            label='CV'
                        />
                </Box>
                </AppBar>
            </Router>
            
        )
}

export default Appbar