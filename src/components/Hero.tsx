import {Flex, Heading} from '@chakra-ui/core';

export const Hero = ({title, subtitle}) => (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" top={0} mb={3}>
        <Heading color="gray.700" fontSize={["8vw", "8vw", "6vw", "4vw", "4vw"]}>{title}</Heading>
        <Heading color="gray.700" fontSize={["6vw", "6vw", "4vw", "2vw", "2vw"]}>{subtitle}</Heading>
    </Flex>
)

Hero.defaultProps = {
    title: 'IGOR LOURENÇO',
    subtitle: 'web developer'
}
