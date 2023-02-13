import { Box, Flex, Heading, Text, Button, Highlight } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <Flex h="100%" align="center" justify="center" direction="column">
      <Box>
        <Heading textAlign="center" mb={8}>
          Andrii Kicha's project
        </Heading>
        <Text align="center">Simplify communication across the team</Text>
        <Text align="center">
          <Highlight
            query="fast"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Deliver meaningful projects blazingly fast ⚡️
          </Highlight>
        </Text>
        <Flex>
          <Button
            colorScheme="red"
            mx="auto"
            mt={8}
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
