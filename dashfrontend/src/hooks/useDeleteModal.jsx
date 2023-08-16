import React, { useState } from 'react';
import { Fab, Modal,} from '@mui/material';

import { FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteSolicitacao } from '../slices/solicitacaoSlice';

function useDeleteModal() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  function openDeleteModal(item) {
    setSelectedItem(item);
    
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedItem(null);
    setIsDeleteModalOpen(false);
  };

  const DeleteModal = () => (
    <Modal
      open={isDeleteModalOpen}
      onClose={closeDeleteModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="mx-auto w-12 h-12 p-3 rounded-full bg-red-100">
              <FiTrash className=" h-6 w-6 text-red-600"  />
            </div>
          <div className=" text-center">
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Deletar Solicitação
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Essa ação é permanente. Tem certeza que deseja excluir essa solicitação?
            </p>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              className="inline-block px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"
              onClick={() => {
                console.log(selectedItem.id);
                dispatch(deleteSolicitacao(selectedItem.id));
                closeDeleteModal();
                
              }}
            >
              Excluir
            </button>
            <button
              type="button"
              className="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={closeDeleteModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
  

  return { openDeleteModal, DeleteModal };
}

export default useDeleteModal;
