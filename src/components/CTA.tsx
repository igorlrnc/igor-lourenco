import {Link as ChakraLink, Button} from '@chakra-ui/core';
import {Container} from './Container';
import {AiFillTwitterCircle, AiFillMediumCircle, AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";

export const CTA = () => (
    <Container
        flexDirection={["column", "column", "row", "row"]}
        position="fixed"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        py={2}
    >
        <ChakraLink
            isExternal
            href="https://twitter.com/igorlrnco"
            flexGrow={2}
            m={1}
            width="90%"
        >
            <Button width="100%" backgroundColor="#1DA1F2" color="white" leftIcon={AiFillTwitterCircle} _hover={{color: "#1DA1F2", backgroundColor: "white"}}>Twitter</Button>
        </ChakraLink>

        <ChakraLink
            isExternal
            href="https://www.linkedin.com/in/igorlrnc/"
            flexGrow={2}
            m={1}
            width="90%"
        >
            <Button width="100%" backgroundColor="#0E76A8" color="white" leftIcon={AiFillLinkedin} _hover={{color: "#0E76A8", backgroundColor: "white"}}>LinkedIn</Button>
        </ChakraLink>

        <ChakraLink
            isExternal
            href="https://medium.com/@theigorlourenco"
            flexGrow={2}
            m={1}
            width="90%"
        >
            <Button width="100%" backgroundColor="black" color="white" leftIcon={AiFillMediumCircle} _hover={{color: "black", backgroundColor: "white"}}>Medium</Button>
        </ChakraLink>

        <ChakraLink
            isExternal
            href="https://github.com/igorlrnc"
            flexGrow={2}
            m={1}
            width="90%"
        >
            <Button width="100%" backgroundColor="black" color="white" leftIcon={AiOutlineGithub} _hover={{color: "black", backgroundColor: "white"}}>Github</Button>
        </ChakraLink>
    </Container>
)
