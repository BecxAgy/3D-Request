import React from 'react'
import { columns, rows } from '../../data/dummy'
import './Table.css'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import { FiEdit, FiTrash } from 'react-icons/fi';



function TableComponent() {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

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
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index} className='bg-white' onClick={(i) => { console.log() }}>
              <TableCell className='p-3 text-sm  font-bold whitespace-nowrap'>
                {row.SPEC}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {row.Componente}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {row['DN-01']}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {row['DN-02']}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {row['DN-03']}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                {row.CriadoEm}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <span className={`p-1.5 font-medium uppercase tracking-wider ${row.Status} rounded-lg bg-opacity-50`}>
                  {row.Status}
                </span>
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700'>
                {row.PJ}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700'>
                {row.Software}
              </TableCell>
              <TableCell className='p-3 text-sm text-gray-700'>
                {row.Solicitante_RGE}
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
  </div>
);

}

export default TableComponent