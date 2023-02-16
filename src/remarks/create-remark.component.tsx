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

interface CreateRemarkProps {
  isOpen: boolean;
  onClose: ModalProps["onClose"];
  createNewRemark: (e: ChangeEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function CreateRemark({
  isOpen,
  onClose,
  createNewRemark,
  isLoading,
}: CreateRemarkProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Remark</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="create_remark_form" onSubmit={createNewRemark}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="remarkName" />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            colorScheme="red"
            mr={3}
            type="submit"
            form="create_remark_form"
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
