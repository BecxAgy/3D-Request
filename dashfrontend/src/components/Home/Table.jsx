import React from 'react'
import { columns, rows } from '../../data/dummy'
import './Table.css'
import { useState } from 'react';
import { TableContainer, TablePagination } from '@mui/material';
import { FiCodepen, FiEdit, FiPenTool, FiTrash } from 'react-icons/fi';



function Table() {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className='shadow-2xl rounded-lg overflow-auto'>
        <TableContainer>
            <table className='w-full'  >
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        {columns.map((element)=>(
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>{element.headerName}</th>

                        )) }
                    </tr>
                </thead>

                <tbody className='divide-y divide-gray-100'>
                    {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) =>(
                        <tr className='bg-white' key={index} onClick={(i) => {console.log()}}>
                            <td className='p-3 text-sm text-orange-400 font-bold whitespace-nowrap'>
                                {row.SPEC}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                {row.Componente}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                {row['DN-01']}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                {row['DN-02']}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                {row['DN-03']}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                {row.CriadoEm}
                            </td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                <span className= {`p-1.5 font-medium uppercase tracking-wider ${row.Status} rounded-lg bg-opacity-50`}>

                                    {row.Status}
                                </span>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>
                                {row.PJ}
                            </td>
                            <td className='p-3 text-sm text-gray-700'>
                                {row.Software}
                            </td>
                            <td className='p-3 text-sm text-gray-700'>
                                {row.Solicitante_RGE}
                            </td>
                            <td class="px-3 py-4 text-right">
							    <a href="#" class="font-medium text-orange-600 dark:text-orange-500 hover:underline"><FiEdit/></a>
						    </td>
                            <td class="px-3 py-4 text-right">
							    <a href="#" class="font-medium text-orange-600 dark:text-orange-500 hover:underline"><FiTrash/></a>
						    </td>
                            
                                
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              
            />
        </TableContainer>
       
        
        
    
    </div>

    
  )
}

export default Table