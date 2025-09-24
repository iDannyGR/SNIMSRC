import { NoteType } from "@/types/note.type";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  data?: NoteType;
  children: React.ReactNode;
}
