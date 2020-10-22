import React, {useState} from 'react'
import { Box, Heading, WorldMap } from 'grommet'
import Toulouse from './Villes/Toulouse'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

var nomPays = ""; 

const Home = () => {

    const [active, setActive] = useState();

    return (
        <Box align='center' pad='large'>
            <Router>
                <WorldMap
                    color="dark-1" 
                    places={[
                        {
                            name: 'Toulouse',
                            location: [39.6044622, 3.4442469],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Toulouse';
                                setActive(!active); 
                            },
                            onClick: () => {
                                // <Switch>
                                //     <Route path='/Toulouse'>
                                //         <Toulouse></Toulouse>
                                //     </Route>
                                // </Switch>
                            },
                        },
                        {
                            name: 'Paris',
                            location: [43.8566969, 4.3514616],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Paris';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Montréal',
                            location: [46.4972159, -73.6103642],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Montréal';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Boston',
                            location: [41.3602534, -71.0582912],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Boston';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Nouvelle Orléans',
                            location: [29.9499323, -90.0701156],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Nouvelle Orléans';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Athènes',
                            location: [37.9839412, 23.7283052],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Athènes';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Atlanta',
                            location: [33.7490987, -84.3901849],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Atlanta';
                                setActive(!active); 
                            },
                        },
                        {
                            name: 'Zagreb',
                            location: [45.8131847, 15.9771774],
                            color: 'status-warning',
                            onHover: () => {
                                nomPays = 'Zagreb';
                                setActive(!active); 
                            },
                        },
                    ]}
                />
                {!active ? ( <Box margin='medium'><Heading color="status-warning">Veuillez cliquer sur une ville</Heading></Box>) 
                : ( <Box margin='medium'> <Heading color="status-warning">{nomPays}</Heading> </Box> )}
            </Router>
        </Box>
    )
}

export default Home
