import {Text} from '@chakra-ui/core'

import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {DarkModeSwitch} from '../components/DarkModeSwitch'
import {CTA} from '../components/CTA'
import {Footer} from '../components/Footer'

const Index = () => (
    <Container>
        <Hero/>

        <DarkModeSwitch/>
        <Footer>
            <Text>Feito com &#10084; e JavaScript por Igor Lourenço</Text>
        </Footer>
        <CTA/>
    </Container>
)

export default Index
