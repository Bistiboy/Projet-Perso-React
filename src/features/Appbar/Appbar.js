import React from 'react'
import { Box, Heading } from 'grommet'
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
        background='status-warning'
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
                    <Heading level='3' margin='none'><Link style={{ textDecoration : 'none', color : 'white' }} to="/">My App</Link></Heading>

                    <Box 
                        direction='row'
                        align='center'
                        pad={{ left: 'small', right: 'large', vertical: 'small' }}
                        gap='large'
                    >

                        <Link style={{ textDecoration : 'none', color : 'white' }} to="/Portolio">PORTFOLIO</Link>

                        <Link style={{ textDecoration : 'none', color : 'white' }} to="/CV">MON CV</Link>

                    </Box>
                </AppBar>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/Portolio">
                        <Portfolio />
                    </Route>

                    <Route path="/CV">
                        <CV />
                    </Route>
                </Switch>
            </Router>      
        )
}

export default Appbar