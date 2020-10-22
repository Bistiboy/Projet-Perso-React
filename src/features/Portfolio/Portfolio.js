import React from 'react'
import { Box, Card, CardBody, CardHeader, Carousel, Heading, Image} from 'grommet'
import data from './projets.json'

const Portfolio = () => {
        return (
            <Box fill overflow="hidden">
                <Carousel fill>
                    {data.map((projet) => 
                        <Card  fill align='center' background="light-1">
                            <CardHeader pad="medium"><Heading>{projet.nom}</Heading></CardHeader>
                            <CardBody pad="medium" align='center'>
                                {projet.description}
                                <Image
                                    fit='contain'
                                    margin="small"
                                    src={projet.image}
                                />
                            </CardBody>
                        </Card>
                    )}   
                </Carousel>
            </Box>
        )
}

export default Portfolio