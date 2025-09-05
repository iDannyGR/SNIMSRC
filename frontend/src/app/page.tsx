"use client"
import Modal from "@/components/Modal/Modal";
import React, { use } from "react";
import { useModal } from "@/hooks/useModal";
export default function page() {
    const {isOpen, closeModal} = useModal();
  return <div>
    <Modal isOpen={isOpen} onClose={closeModal} >
      body
    </Modal>
  </div>;
}
