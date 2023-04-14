import React from 'react'
import { Card, CardHeader, CardBody, Stack, Image, Flex,Text } from '@chakra-ui/react'

function ProductCard(props) {
    const { id, productName, type, price, img } = { ...props }
    return (
        <Card>
            <CardHeader>
                <Stack>
                    <Text>Id:{id}</Text>
                    <Image src={img} w="250px" h="250px"/>
                </Stack>
                <CardBody>
                    <Stack>
                        <Text>{productName}</Text>
                        <Flex>{type}INR{price}</Flex>
                    </Stack>
                </CardBody>
            </CardHeader>
        </Card>
    )
}

export default ProductCard
