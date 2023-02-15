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
} from "@chakra-ui/react";

interface CreateCollectionProps {
  isOpen: boolean;
  onClose: ModalProps["onClose"];
  createNewCollection: (...args: unknown[]) => void;
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
        <ModalBody></ModalBody>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            colorScheme="red"
            mr={3}
            onClick={createNewCollection}
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
