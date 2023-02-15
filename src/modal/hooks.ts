import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpenModal: isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
    toggleModal: () => setIsOpen((state) => !state),
  };
}
