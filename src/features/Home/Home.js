import React, {useState} from 'react';
import { Box, WorldMap } from 'grommet';

var nomPays = ""; 

const Home = () => {

    const [active, setActive] = useState();

    return (
        <Box align='center' pad='large'>
            <WorldMap
                color="dark-1" 
                places={[
                    {
                        name: 'Toulouse',
                        location: [39.6044622, 3.4442469],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Toulouse';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Paris',
                        location: [43.8566969, 4.3514616],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Paris';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Montréal',
                        location: [46.4972159, -73.6103642],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Montréal';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Boston',
                        location: [41.3602534, -71.0582912],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Boston';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Nouvelle Orléans',
                        location: [29.9499323, -90.0701156],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Nouvelle Orléans';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Athènes',
                        location: [37.9839412, 23.7283052],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Athènes';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Atlanta',
                        location: [33.7490987, -84.3901849],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Atlanta';
                            setActive(!active); 
                        },
                    },
                    {
                        name: 'Zagreb',
                        location: [45.8131847, 15.9771774],
                        color: 'accent-3',
                        onHover: () => {
                            nomPays = 'Zagreb';
                            setActive(!active); 
                        },
                    },
                ]}
            />
            {!active ? ( <Box margin='medium'>Veuillez cliquer sur une ville</Box>) : ( <Box margin='medium'> {nomPays} </Box> )}
        </Box>
    )
}

export default Home
