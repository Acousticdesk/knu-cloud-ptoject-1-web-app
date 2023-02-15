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
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useModal } from "../modal/hooks";
import { CreateRemark } from "../remarks/create-remark.component";
import { ChangeEvent } from "react";
import { useAsync } from "../async/hooks";
import { createNewRemarkMock } from "../api/mock";
import { CreateRemarkDTO } from "../remarks/interfaces";

export function CollectionDetails() {
  const navigate = useNavigate();
  const { isOpenModal, openModal, closeModal } = useModal();
  const { asyncPerform, isLoading } = useAsync();
  const toast = useToast();

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

  return (
    <Box pt={8}>
      <CreateRemark
        isOpen={isOpenModal}
        onClose={closeModal}
        createNewRemark={createNewRemark}
        isLoading={isLoading}
      />
      <Flex mb={8}>
        <Heading>Collection Name</Heading>
        <Spacer />
        <Button colorScheme="red" onClick={openModal}>
          Create Remark
        </Button>
      </Flex>
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
