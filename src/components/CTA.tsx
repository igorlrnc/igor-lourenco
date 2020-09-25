import {Link as ChakraLink, Button} from '@chakra-ui/core'
import {Container} from './Container'


export const CTA = () => (
    <Container
        flexDirection="row"
        position="fixed"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        py={2}
    >
        <ChakraLink
            isExternal
            href="https://github.com/igorlrnc"
            flexGrow={6}
            mx={2}
        >
            <Button width="100%" variant="solid" variantColor="gray">
                Ver Github
            </Button>
        </ChakraLink>
    </Container>
)
