"use client";
import React from "react";
import Modal from "@/components/Modal/Modal";
import { useModal } from "@/hooks/useModal";
export default function Page() {
  const { isOpen, closeModal } = useModal();
  console.log(isOpen);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        body
      </Modal>
    </div>
  );
}
