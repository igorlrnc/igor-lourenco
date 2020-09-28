import {Box, Flex, Heading} from '@chakra-ui/core';
import {GiBrazilFlag, GiBrazil} from 'react-icons/gi';
import React from "react";

export const Hero = ({user}) => (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" top={0} mb={3}>
        <Heading color="gray.700" fontSize={["8vw", "8vw", "6vw", "4vw", "4vw"]}>{user.name}</Heading>
        <Flex flexDirection="row">
            <Box as={GiBrazilFlag} size="32px" color="yellow.500" mr={2}/>
            <Box as={GiBrazil} size="32px" color="green.500" mr={2}/>
        </Flex>
    </Flex>
)
