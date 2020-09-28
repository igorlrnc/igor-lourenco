import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {CTA} from '../components/CTA'
import {Flex, Avatar} from "@chakra-ui/core";
import {Technologies} from "../components/Technologies";
import {AboutMe} from "../components/AboutMe";

const Index = ({user}) => (
    <Container>
        <Avatar showBorder={true} borderColor="gray.600" size="2xl" name={user.name} src={user.avatar_url} my={3}/>
        <Hero user={user}/>
        <AboutMe aboutMe={user.bio}/>
        <Technologies/>
        <CTA/>
    </Container>
)

export async function getStaticProps(context) {
    const response = await fetch('https://api.github.com/users/igorlrnc')
    const user = await response.json()

    return {
        props: {
            user
        }, // will be passed to the page component as props
    }
}

export default Index
