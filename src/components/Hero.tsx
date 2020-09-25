import {Flex, Heading} from '@chakra-ui/core'

export const Hero = ({title}) => (
    <Flex justifyContent="center" alignItems="center" top={0}>
        <Heading fontSize="10vw">{title}</Heading>
    </Flex>
)

Hero.defaultProps = {
    title: 'IGOR LOURENÇO',
}
