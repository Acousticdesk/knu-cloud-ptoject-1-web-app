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

export function ChooseCollection({}) {
  const navigate = useNavigate();

  async function handleFormSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // await signIn(Object.fromEntries(formData.entries()) as unknown as AuthDTO);

    navigate("/remarks");
  }

  return (
    <Box>
      <Heading size="lg" mb={8}>
        Your Collections
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Card cursor="pointer">
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
