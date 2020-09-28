import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {CTA} from '../components/CTA'
import Contact from "../components/Contact";
import {Flex} from "@chakra-ui/core";
import {motion} from "framer-motion";
import {Technologies} from "../components/Technologies";

const Index = () => (
    <Container>
        <Hero/>
        <Technologies/>
        <Flex width={["90%", "90%", "50%", "50%"]} justifyContent="center">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.0 }}
            >
            <Contact/>
            </motion.button>
        </Flex>
        <CTA/>
    </Container>
)

export default Index
