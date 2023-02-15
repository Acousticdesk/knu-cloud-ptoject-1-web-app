import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Text,
  Box,
  Circle,
  Flex,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CreateCollection } from "./create-collection.component";
import { useModal } from "../modal/hooks";
import { createNewCollectionMock } from "../api/mock";
import { useAsync } from "../async/hooks";

export function ChooseCollection() {
  const navigate = useNavigate();
  // todo akicha: use chakra's hook instead
  const { isOpenModal, openModal, closeModal } = useModal();
  const { isLoading, asyncPerform } = useAsync();
  const toast = useToast();

  async function createNewCollection() {
    await asyncPerform(createNewCollectionMock);
    closeModal();
    toast({
      title: "Collection created",
      description: "The collection list is updated",
      status: "success",
      duration: 2000,
    });
    // todo akicha: update collection
  }

  return (
    <Box pt={8}>
      <CreateCollection
        isOpen={isOpenModal}
        onClose={closeModal}
        isLoading={isLoading}
        createNewCollection={createNewCollection}
      />
      <Flex>
        <Heading size="lg" mb={8}>
          Your Collections
        </Heading>
        <Spacer />
        <Circle
          cursor="pointer"
          bg="red"
          size="40px"
          color="white"
          ml={2}
          onClick={openModal}
        >
          +
        </Circle>
      </Flex>
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
