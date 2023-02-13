import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export function ChooseCollection() {
  const navigate = useNavigate();

  return (
    <Box pt={8}>
      <Heading size="lg" mb={8}>
        Your Collections
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Card cursor="pointer" onClick={() => navigate("/collections/1")}>
          <CardHeader>
            <Heading size="md">Collection Name</Heading>
          </CardHeader>
          <CardBody>
            <Text>Collection description</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
