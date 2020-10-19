import React from 'react'
import { Box, Button, Heading } from 'grommet'
import { Bookmark, Clipboard } from 'grommet-icons'
import CV from '../CV/CV'
import Portfolio from '../Portfolio/Portfolio'
import Home from '../Home/Home'
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

const Appbar = () => {
        return (
            <Router>
                <AppBar>
                    <Heading level='3' margin='none'><Link to="/">My App</Link></Heading>

                    <Box 
                        direction='row'
                        align='center'
                        pad={{ left: 'small', right: 'large', vertical: 'small' }}
                        gap='large'
                    >

                        <Link to="/Portolio">Portfolio</Link>

                        <Link to="/CV">Mon CV</Link>

                    </Box>
                </AppBar>

                <Switch>

                    <Route path="/Portolio">
                        <Portfolio />
                    </Route>

                    <Route path="/CV">
                        <CV />
                    </Route>

                    <Route path="/">
                        <Box 
                        direction='row' 
                        flex 
                        overflow={{horizontal:'hidden'}}
                        align='center'
                        justify='center'
                        >
                            <Home />
                        </Box>
                    </Route>
                    
                </Switch>
            </Router>      
        )
}

export default Appbar