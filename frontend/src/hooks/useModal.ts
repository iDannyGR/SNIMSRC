import { useState } from "react";

export function useModal() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "create" as "create" | "edit",
    data: null as any
  });

  const openModal = (mode: "create" | "edit", data?: any) => {
    setModalState({
      isOpen: true,
      mode,
      data: data || null
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return {
    modalState,
    openModal,
    closeModal
  };
}
