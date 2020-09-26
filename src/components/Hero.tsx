import {Flex, Heading} from '@chakra-ui/core';

export const Hero = ({title, subtitle}) => (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" top={0} mb={3}>
        <Heading color="gray.700" fontSize={["11vw", "11vw", "9vw", "7vw", "7vw"]}>{title}</Heading>
        <Heading color="gray.700" fontSize={["8vw", "8vw", "6vw", "4vw", "4vw"]}>{subtitle}</Heading>
    </Flex>
)

Hero.defaultProps = {
    title: 'IGOR LOURENÇO',
    subtitle: 'desenvolvedor web'
}
