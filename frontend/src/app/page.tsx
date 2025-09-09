"use client";
import Modal from "@/components/Modal/Modal";
import React from "react";
import { useModal } from "@/hooks/useModal";
export default function Page() {
  const { isOpen, closeModal } = useModal();
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        body
      </Modal>
    </div>
  );
}
