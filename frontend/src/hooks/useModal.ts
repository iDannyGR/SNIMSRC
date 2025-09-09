import React from "react";
const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false)
  };
};

export { useModal };
