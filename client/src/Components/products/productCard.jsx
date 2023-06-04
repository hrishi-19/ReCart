import React from 'react'
import { Card, CardHeader, CardBody, Stack, Image, Flex,Text } from '@chakra-ui/react'

function ProductCard(props) {
    const {productName, type, price, img } = { ...props }
    return (
        <Card>
            <CardHeader>
                <Stack>
                    <Image src={img} w="200px" h="200px"/>
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
