import Image from "next/image";

import { Center, Heading, Container, Stack, Text, Button, Icon, Box, HStack, VStack, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}


export default function Home() {
  return (
    <>
      <Container maxW={'2xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 4 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontFamily={'fantasy'}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
            lineHeight={'110%'}>
            Haim
            <Text as={'span'} color={'blue.600'}>
              Bank
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            돈을 모으면 모을수록 돈이 더 늘어나는 하임이의 은행

          </Text>

        </Stack>


        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 4 }}
          py={0}>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Hobby
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  79
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              py={4}
              borderBottomRadius={'xl'}>

              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  px={3}
                  py={1}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl">
                  지금
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Growth
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    149
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                py={4}
                borderBottomRadius={'xl'}>

                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Scale
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  349
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              py={4}
              borderBottomRadius={'xl'}>

              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>


      </Container>
    </>
  );
}
