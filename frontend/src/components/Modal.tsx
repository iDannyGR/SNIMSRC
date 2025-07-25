"use client";
import React from "react";
import GenericButton from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps): React.ReactElement | null {
  const [isBrorser, setIsBrorse] = React.useState(false);

  React.useEffect(() => {
    setIsBrorse(true);
  }, []);
  if (!isBrorser || !isOpen) return null;
  return (
    <div>
      {children}
      <div>
        <GenericButton
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
          label="Close"
        />
      </div>
    </div>
  );
}
