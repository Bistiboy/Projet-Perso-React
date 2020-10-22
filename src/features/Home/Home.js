import React, {useState} from 'react'
import { Box, Heading, WorldMap, Collapsible } from 'grommet'

var nomPaysHover = "";
var nomPaysClick = "";

const Home = () => {

    const [active, setActive] = useState();
    const [showSidebar, setShowSidebar] = useState(false);

    return (

        <Box
        fill 
        direction='row' 
        flex 
        overflow={{horizontal:'hidden'}}
        align='center'
        justify='center'
        >

            <Box align='center' justify='center' pad='large'>

                <WorldMap
                    color="dark-1" 
                    places={[
                        {
                            nom: 'Toulouse',
                            location: [39.6044622, 3.4442469],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Toulouse';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Toulouse';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Paris',
                            location: [43.8566969, 4.3514616],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Paris';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Paris';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Montréal',
                            location: [46.4972159, -73.6103642],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Montréal';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Montréal';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Boston',
                            location: [41.3602534, -71.0582912],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Boston';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Boston';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Nouvelle Orléans',
                            location: [29.9499323, -90.0701156],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Nouvelle Orléans';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Nouvelle Orléans';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Athènes',
                            location: [37.9839412, 23.7283052],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Athènes';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Athènes';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Atlanta',
                            location: [33.7490987, -84.3901849],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Atlanta';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Atlanta';
                                setShowSidebar(!showSidebar)
                            }
                        },
                        {
                            nom: 'Zagreb',
                            location: [45.8131847, 15.9771774],
                            color: 'status-warning',
                            onHover: () => {
                                nomPaysHover = 'Zagreb';
                                setActive(!active); 
                            },
                            onClick: () => {
                                nomPaysClick = 'Zagreb';
                                setShowSidebar(!showSidebar)
                            }
                        },
                    ]}
                />
                {!active ? ( <Box margin='medium'><Heading color="status-warning">Veuillez cliquer sur une ville</Heading></Box>) 
                : ( <Box margin='medium'> <Heading color="status-warning">{nomPaysHover}</Heading> </Box> )}
            </Box>
            
            <Collapsible direction='horizontal' open={showSidebar}>
                <Box
                flex
                background='light-2' 
                elevation='small' 
                align='center' 
                justify='center'
                >
                    <Heading align='center' justify='center'> {nomPaysClick} </Heading>
                    <Box align='center' justify='center'>

                    </Box>
                </Box>
            </Collapsible>
        </Box>
        
    )
}

export default Home
