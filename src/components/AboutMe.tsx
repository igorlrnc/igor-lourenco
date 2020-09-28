import {Flex, Text} from "@chakra-ui/core";

export const AboutMe = ({aboutMe}) => (
    <Flex width={["90%", "90%", "50%", "50%"]} justifyContent="center" m={5}>
        <Text textAlign="justify">{aboutMe}</Text>
    </Flex>
)
