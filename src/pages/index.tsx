import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {CTA} from '../components/CTA'
import Contact from "../components/Contact";
import {Flex, Avatar} from "@chakra-ui/core";
import {motion} from "framer-motion";
import {Technologies} from "../components/Technologies";
import {AboutMe} from "../components/AboutMe";

const Index = () => (
    <Container>
        <Avatar showBorder={true} borderColor="blue.600" size="2xl" name="Igor Lourenço" src=""/>
        <Hero/>
        <AboutMe/>
        <Technologies/>
        <CTA/>
    </Container>
)

export default Index
