import React from 'react'
import { Box, Meter, Text} from 'grommet';
import data from './data.json';

const CV = () => {
    return (
        <Box flex justify="center" pad="medium" gap="xlarge" direction="row">
            {data.map((comp) => 
                <Box align="center">
                <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="large" weight="bold">
                    {comp.nom}
                    </Text>
                </Box>
                <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: comp.valeur, color:'status-warning' }]}
                    size="xsmall"
                    thickness="small"
                />
                <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                    {comp.valeur}
                    </Text>
                    <Text size="small">%</Text>
                </Box>
            </Box>
         )}
        </Box>
    )
}

export default CV
