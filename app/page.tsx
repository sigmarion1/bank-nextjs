"use client";

import Image from "next/image";

import {
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    Icon,
    useColorModeValue,
    createIcon,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    useDisclosure
} from "@chakra-ui/react";
import useAccount from "./component/useAccount";
import TransactionModal from "./component/TransactionModal";

export default function BankPage() {
    let balance = 0;
    const account = useAccount();

    if (account !== undefined) {
        balance = Number(account.balance);
    }
    const option = {
        maximumFractionDigits: 0,
    };
    const balance_locale = balance.toLocaleString("ko-KR", option);

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            py={10}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack
                boxShadow={"2xl"}
                bg="blue.100"
                rounded={"xl"}
                p={10}
                spacing={8}
                align={"center"}
            >
                <Image src="/haimbank.png" alt="haimbank" width={200} height={200} />
                {/* <Icon as={NotificationIcon} w={24} h={24} /> */}
                <Stack align={"center"} spacing={4}>
                    <Stat>
                        <StatNumber fontFamily={"heading"} fontSize={"6xl"}>
                            {balance_locale}원
                        </StatNumber>
                        <Stack align={"center"}>
                            <StatHelpText>내역보기</StatHelpText>
                        </Stack>
                    </Stat>
                </Stack>
                <Stack align={"center"} spacing={4}>
                    <Text fontSize={"lg"} color={"gray.500"}>
                        모이면 모일수록 돈이 늘어나는 하임뱅크
                    </Text>
                </Stack>
                <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
                    <Button
                        bg={"blue.400"}
                        rounded={"full"}
                        color={"white"}
                        flex={"1 0 auto"}
                        _hover={{ bg: "blue.500" }}
                        _focus={{ bg: "blue.500" }}
                        onClick={onOpen}
                    >
                        입금
                    </Button>
                    <Button
                        bg={"red.400"}
                        rounded={"full"}
                        color={"white"}
                        flex={"1 0 auto"}
                        _hover={{ bg: "red.500" }}
                        _focus={{ bg: "red.500" }}
                        onClick={onOpen}

                    >
                        출금
                    </Button>
                </Stack>
            </Stack>

            <TransactionModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        </Flex>
    );
}
