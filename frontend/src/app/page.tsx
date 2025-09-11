"use client";
import Modal from "@/components/Modal/Modal";
import React from "react";
import { modalStore } from "@/store/modalStore";
export default function Page() {
  const { isOpen, closeModal } = modalStore();
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        body
      </Modal>
    </div>
  );
}
