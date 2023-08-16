import { Flex, Heading, Text, Spacer, HStack, Avatar } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">GG TokopediaPlay</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar name="mario" src="/img/mufid.jpg">
        </Avatar>
        <Text>Mufid Naufal Baay</Text>
        {/* <Button colorScheme="purple">Logout</Button> */}
      </HStack>
    </Flex>
  )
}