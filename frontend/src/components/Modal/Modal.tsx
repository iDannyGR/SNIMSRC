import { NoteType } from '@/types/note.type';
import { Dialog } from '@headlessui/react'
import React from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data?: NoteType;
}

export default function Modal({isOpen, onClose, data}:ModalProps): React.ReactElement {
  return (
    <Dialog 
        open={isOpen} 
        onClose={onClose}
        className="relative z-10 focus:outline-none">
     <div className=''>

     </div>

    </Dialog>
)
}
