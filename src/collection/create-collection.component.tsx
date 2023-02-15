import {
  ModalProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { ChangeEvent } from "react";

interface CreateCollectionProps {
  isOpen: boolean;
  onClose: ModalProps["onClose"];
  createNewCollection: (e: ChangeEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function CreateCollection({
  isOpen,
  onClose,
  createNewCollection,
  isLoading,
}: CreateCollectionProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="create_collection_form" onSubmit={createNewCollection}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="collectionName" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input name="collectionDescription" />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            colorScheme="red"
            mr={3}
            type="submit"
            form="create_collection_form"
          >
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
