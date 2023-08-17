import React from 'react'
import { columns} from '../../data/dummy'
import './Table.css'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import { FiEdit, FiTrash } from 'react-icons/fi';
import {useDispatch, useSelector} from "react-redux"
import { deleteSolicitacao, getAllSolicitacoes } from '../../slices/solicitacaoSlice';
import { useEffect } from 'react';
import usePagination from '../../hooks/usePagination'
import useDeleteModal from '../../hooks/useDeleteModal';
import useEditModal from '../../hooks/useEditModal';



function TableComponent() {

  const dispatch = useDispatch();
  const { solicitacoes } = useSelector((state) => state.solicitacao);

  useEffect(() => {
    dispatch(getAllSolicitacoes());
  }, [dispatch]);
  //hook for pagination
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData
  } = usePagination(solicitacoes);
  //hook for modal delete
  const { openDeleteModal, DeleteModal } = useDeleteModal();
  const {openEditModal, EditModal } = useEditModal()

  

  return (
    <div className='shadow-2xl rounded-lg overflow-auto'>

    {solicitacoes && 
    
      <div>
        <TableContainer>
        <Table className='w-full'>
          <TableHead>
            <TableRow>
              {columns.map((element, index) => (
                <TableCell key={index} className='p-3 text-sm font-semibold tracking-wide text-left'>
                  {element.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(
              rowsPerPage > 0 ? 
              paginatedData :  solicitacoes
            ).map((solicitacao, index) => (
              <TableRow key={index} className='bg-white' >
                <TableCell className='p-3 text-sm  font-bold whitespace-nowrap'>
                  {solicitacao.especificacao}
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  {solicitacao.componente}
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  {solicitacao.dn_01}
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  {solicitacao.dn_02}
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  {solicitacao.dn_03}
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  {solicitacao.createdAt}
                </TableCell>     
                <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                  <span className={`p-1.5 font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 bg-blue-500 text-blue-600`}>
                    {solicitacao.statusSolicitacao && solicitacao.statusSolicitacao["descricao"] }
                  </span>  
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700'>
                  {solicitacao.projetoSolicitacao && solicitacao.projetoSolicitacao["pj"] }
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700'>
                  {solicitacao.softwareSolicitacao && solicitacao.softwareSolicitacao["nome"] }
                </TableCell>
                <TableCell className='p-3 text-sm text-gray-700'>
                  {solicitacao.solicitante && solicitacao.solicitante["name"] }
                </TableCell> 
                
                <TableCell className="px-3 py-4 text-right" onClick={()=> openEditModal(solicitacao)} >
                  <a href="#" className="font-medium text-orange-600 dark:text-orange-500 hover:underline">
                    <FiEdit />
                  </a>
                </TableCell>
                <TableCell className="px-3 py-4 text-right" onClick={()=> openDeleteModal(solicitacao)}>
                  <a href="#" className="font-medium text-orange-600 dark:text-orange-500 hover:underline">
                    <FiTrash />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
        colSpan={3}
        rowsPerPage={rowsPerPage}
        page={page}
        count={solicitacoes.length}
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per page',
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div> 
    }
     
    <DeleteModal />
    <EditModal/>
  </div>
);

}

export default TableComponent