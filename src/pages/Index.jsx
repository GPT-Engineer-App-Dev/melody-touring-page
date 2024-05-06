import { Box, Flex, Heading, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="brand.900" color="white" minHeight="100vh">
      <Flex as="nav" padding="4" borderBottom="1px" borderColor="gray.700">
        <VStack spacing={2}>
          <Heading size="lg">The Band</Heading>
          <Text fontSize="sm">Tour Dates 2023</Text>
        </VStack>
        <Spacer />
        <Flex alignItems="center" fontSize="lg" gap="8">
          <Link href="#tour" leftIcon={<FaMusic />}>Tour</Link>
          <Link href="#tickets" leftIcon={<FaTicketAlt />}>Tickets</Link>
          <Link href="#about" leftIcon={<FaInfoCircle />}>About</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} padding="8" align="center" justify="center">
        <Heading as="h1" size="2xl">Welcome to The Band's Official Tour Page</Heading>
        <Text fontSize="xl" maxWidth="container.md">
          Catch us live in concert across various cities this year! Grab your tickets now and join us for an unforgettable musical journey.
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;