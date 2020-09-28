import {Box, Flex} from '@chakra-ui/core'
import React from "react";
import {SiGithub, SiJavascript, SiTypescript, SiLaravel, SiNextDotJs, SiReact, SiPhp} from "react-icons/si";

export const Technologies = ({technologies}) => {

    return (
        <Flex justifyContent="center" alignItems="center" m={5}>
            {technologies.map((technology, index) => <Box as={technology.icon} key={index} size="32px" color={technology.color} mr={2}/>)}
        </Flex>
    )
}

Technologies.defaultProps = {
    technologies: [
        {icon: SiJavascript, color: "yellow.300"},
        {icon: SiTypescript, color: "blue.600"},
        {icon: SiReact, color: "blue.400"},
        {icon: SiNextDotJs, color: "black"},
        {icon: SiPhp, color: "purple.800"},
        {icon: SiLaravel, color: "red.600"},
        {icon: SiGithub, color: "black"},
    ]
}