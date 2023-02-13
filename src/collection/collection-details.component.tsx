import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export function CollectionDetails() {
  const navigate = useNavigate();

  return (
    <Box pt={8}>
      <Heading mb={8}>Collection Name</Heading>
      <Text mb={4}>Collection Description</Text>
      <SimpleGrid columns={2} spacing={10}>
        <Card cursor="pointer" onClick={() => navigate("/remarks/1")}>
          <CardHeader>
            <Heading size="md">Remark Name</Heading>
          </CardHeader>
          <CardBody>
            <Text>Remark description</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
