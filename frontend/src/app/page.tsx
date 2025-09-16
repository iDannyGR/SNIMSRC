"use client";
import React from "react";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm";
import { modalStore } from "@/store/modalStore";
export default function Page() {
  const { isOpen, closeModal } = modalStore();
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <NoteForm />
      </Modal>
    </div>
  );
}
