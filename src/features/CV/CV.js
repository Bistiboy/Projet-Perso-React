import React from 'react'
import { Button, Box, Card, CardBody, CardFooter, CardHeader} from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import data from '../../data.json';

const CV = () => {
    return (
        data.map((user) => 
            <Box flex align="center" pad={{top:'large'}}>
                <Card height="small" width="small" background="light-1">
                    <CardHeader pad="medium">{user.name}</CardHeader>
                    <CardBody pad="medium">{user.descritpion}</CardBody>
                    <CardFooter pad={{horizontal: "small"}} background="light-2">   
                    <Button
                    icon={<Favorite color="red" />}
                    hoverIndicator
                    />
                    <Button icon={<ShareOption color="plain" href={user.url}/>} hoverIndicator />
                    </CardFooter>
                </Card>
            </Box>
        )
    )
}

export default CV
