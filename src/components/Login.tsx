import React, {useRef} from "react";
import {useRouter} from "next/router";
import {
    Button,
    Flex,
    Heading, IconButton, Input as ChakraInput,
    Input,
    InputRightElement,
    Link,
    Text
} from "@chakra-ui/core";

import {useForm} from "react-hook-form";

export default function Login() {
    const router = useRouter();

    const formRef = useRef(null);

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [loading, setLoading] = React.useState(false);
    const handleLoading = () => setLoading(!loading);

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {

        console.log(data)

    };

    return (
        <Flex
            height="auto"
            backgroundColor="gray.100"
            borderRadius="md"
            flexDir="column"
            alignItems="stretch"
            shadow="md"
            minW="100%"
            px={5}
            mb={[16, 16, 0, 0]}
            py={5}
        >
            <Flex alignItems="center" marginBottom={3} py={2}>
                <Heading size="lg">Quer entrar em contato? Envie uma mensagem</Heading>
            </Flex>

            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <Input
                    height="50px"
                    backgroundColor="gray.200"
                    focusBorderColor="gray.900"
                    borderRadius="md"
                    marginTop={2}
                    name="email"
                    placeholder="E-mail"
                    ref={register}
                />

                <Input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                    ref={register}
                    marginTop={2}/>

                <Button
                    isLoading={loading}
                    backgroundColor="blue.600"
                    width="100%"
                    height="50px"
                    type="submit"
                    color="white"
                    borderRadius="sm"
                    marginTop={6}
                    _hover={{
                        backgroundColor: "blue.700"
                    }}
                >
                    Entrar
                </Button>
            </form>
        </Flex>
    )
}