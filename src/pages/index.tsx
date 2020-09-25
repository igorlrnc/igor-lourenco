import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {CTA} from '../components/CTA'
import Login from "../components/Login";
import {Flex} from "@chakra-ui/core";

const Index = () => (
    <Container>
        <Hero/>
        <Flex width={["90%", "90%", "50%", "50%"]}>
            <Login/>
        </Flex>
        <CTA/>
    </Container>
)

export default Index
