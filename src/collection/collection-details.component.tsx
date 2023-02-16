// @ts-nocheck
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Spacer,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "../modal/hooks";
import { CreateRemark } from "../remarks/create-remark.component";
import { ChangeEvent, useEffect } from "react";
import { useAsync } from "../async/hooks";
import { createNewRemarkMock } from "../api/mock";
import { CreateRemarkDTO } from "../remarks/interfaces";
import { useEntities } from "../api/hooks";
import { fetchCollection, fetchRemarks } from "../auth/api";

export function CollectionDetails() {
  const navigate = useNavigate();
  const { isOpenModal, openModal, closeModal } = useModal();
  const { asyncPerform, isLoading } = useAsync();
  const toast = useToast();
  const { obtainEntities, isLoadingEntities, entities } = useEntities();
  const {
    obtainEntities: obtainRemarks,
    isLoadingEntities: isLoadingRemarks,
    entities: remarks,
  } = useEntities();
  const { collectionId } = useParams();

  useEffect(() => {
    obtainEntities(() => fetchCollection(collectionId as string));
    obtainRemarks(() => fetchRemarks(collectionId as string));
  }, []);

  async function createNewRemark(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);

    await asyncPerform(() =>
      createNewRemarkMock(
        Object.fromEntries(formData.entries()) as unknown as CreateRemarkDTO
      )
    );

    closeModal();

    toast({
      title: "Remark created",
      description: "The remarks list is updated",
      status: "success",
      duration: 2000,
    });
  }

  if (isLoadingEntities) {
    return <Spinner color="red" />;
  }

  return (
    <Box pt={8}>
      <CreateRemark
        isOpen={isOpenModal}
        onClose={closeModal}
        createNewRemark={createNewRemark}
        isLoading={isLoading}
      />
      <Flex mb={8}>
        <Heading>{entities.name}</Heading>
        <Spacer />
        <Button colorScheme="red" onClick={openModal}>
          Create Remark
        </Button>
      </Flex>
      {isLoadingRemarks && <Spinner color="red" />}
      {!isLoadingRemarks && (
        <SimpleGrid columns={2} spacing={10}>
          {remarks.map((remark) => {
            return (
              <Card
                key={remark.id}
                cursor="pointer"
                onClick={() => navigate(`/remarks/${remark.id}`)}
              >
                <CardHeader>
                  <Heading size="md">{remark.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{remark.date}</Text>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      )}
    </Box>
  );
}
