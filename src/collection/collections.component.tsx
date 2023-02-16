// @ts-nocheck
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
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CreateCollection } from "./create-collection.component";
import { useModal } from "../modal/hooks";
import { createNewCollectionMock } from "../api/mock";
import { useAsync } from "../async/hooks";
import { ChangeEvent, useContext, useEffect } from "react";
import { CreateCollectionDTO } from "./interfaces";
import { authContext } from "../auth/auth.context";
import { createCollection, fetchCollections } from "../auth/api";
import { useEntities } from "../api/hooks";
import { FullScreenLoader } from "../async/full-screen-loader.component";

export function ChooseCollection() {
  const navigate = useNavigate();
  const { isOpenModal, openModal, closeModal } = useModal();
  const { isLoading, asyncPerform } = useAsync();
  const toast = useToast();
  const { userId } = useContext(authContext);
  const { obtainEntities, entities, isLoadingEntities } = useEntities();

  useEffect(() => {
    obtainEntities(() => fetchCollections(userId));
  }, []);

  async function createNewCollection(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(
      formData.entries()
    ) as unknown as CreateCollectionDTO;
    await asyncPerform(() =>
      createCollection({
        ...payload,
        userId,
      })
    );
    obtainEntities(() => fetchCollections(userId));
    closeModal();
    toast({
      title: "Collection created",
      description: "The collection list is updated",
      status: "success",
      duration: 2000,
    });
    // todo akicha: update collection
  }

  if (isLoadingEntities) {
    return <FullScreenLoader />;
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
        {entities.map((entity) => {
          return (
            <Card
              key={entity.id}
              cursor="pointer"
              onClick={() => navigate(`/collections/${entity.id}`)}
            >
              <CardHeader>
                <Heading size="md">{entity.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{entity.description}</Text>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
      {!isLoadingEntities && !entities.length && (
        <Flex mt={8}>
          <Heading size="md">No collections yet</Heading>
          <Spacer />
          <Button colorScheme="red" onClick={openModal}>
            Create a new one
          </Button>
        </Flex>
      )}
    </Box>
  );
}
