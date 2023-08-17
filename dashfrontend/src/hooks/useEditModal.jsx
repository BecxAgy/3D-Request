import React, { useState } from 'react';
import { Fab, Modal,} from '@mui/material';
import { FiArrowRight, FiSkipBack, FiTrash, FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import Form from '../components/Solicitacoes/Form'


function useEditModal() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  function openEditModal(item) {
    setSelectedItem(item);
    
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };

  const EditModal = () => (
    <Modal
      open={isEditModalOpen}
      onClose={closeEditModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-end ">
                <FiX onClick={closeEditModal}/>
            </div>
           <Form solicitacao={selectedItem}/>
         
        </div>
      </div>
    </Modal>
  );
  

  return { openEditModal, EditModal };
}

export default useEditModal;
