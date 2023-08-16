import React from 'react'
import { columns, rows } from '../../data/dummy'
import './Table.css'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import { FiEdit, FiTrash } from 'react-icons/fi';
import {useDispatch, useSelector} from "react-redux"
import { getAllSolicitacoes } from '../../slices/solicitacaoSlice';
import { useEffect } from 'react';



function TableComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const {solicitacoes} = useSelector((state) => state.solicitacao) ;

  useEffect(() => {
    dispatch(getAllSolicitacoes()); 
  }, [dispatch],[]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className='shadow-2xl rounded-lg overflow-auto'>

    {solicitacoes && <div>
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
          {((solicitacoes || solicitacoes.length > 0) ? rowsPerPage > 0
            ? solicitacoes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            :  solicitacoes : []
          ).map((solicitacoes, index) => (
            <TableRow key={index} className='bg-white' onClick={(i) => { console.log() }}>
              <TableCell className='p-3 text-sm  font-bold whitespace-nowrap'>
                {solicitacoes.especificacao}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {solicitacoes.componente}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {solicitacoes.dn_01}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {solicitacoes.dn_02}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {solicitacoes.dn_03}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {solicitacoes.createdAt}
              </TableCell>
             
              
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
             
             <span className={`p-1.5 font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 bg-blue-500 text-blue-600`}>
              {solicitacoes.statusSolicitacao && solicitacoes.statusSolicitacao["descricao"] }
             </span>  
           </TableCell>

           <TableCell className='p-3 text-sm text-gray-700'>
              {solicitacoes.projetoSolicitacao && solicitacoes.projetoSolicitacao["pj"] }
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700'>
              {solicitacoes.softwareSolicitacao && solicitacoes.softwareSolicitacao["nome"] }
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700'>
              {solicitacoes.solicitante && solicitacoes.solicitante["name"] }
              </TableCell> 
              
              <TableCell className="px-3 py-4 text-right">
                <a href="#" className="font-medium text-orange-600 dark:text-orange-500 hover:underline">
                  <FiEdit />
                </a>
              </TableCell>
              <TableCell className="px-3 py-4 text-right">
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
    </div> }
    
  </div>
);

}

export default TableComponent