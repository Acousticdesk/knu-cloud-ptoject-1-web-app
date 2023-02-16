import { Flex, Spinner } from "@chakra-ui/react";

export function FullScreenLoader() {
  return (
    <Flex h="100%" align="center" justify="center">
      <Spinner color="red" />
    </Flex>
  );
}
