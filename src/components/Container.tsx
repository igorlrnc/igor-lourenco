import {Flex, useColorMode} from '@chakra-ui/core'

export const Container = (props) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            {...props}
        />
    )
}
