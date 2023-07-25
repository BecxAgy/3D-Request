import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card, CardContent } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';

const columns = [
  { id: 'SPEC', label: 'SPEC', minWidth: 100 },
  { id: 'Componente', label: 'Componente', minWidth: 100 },
  { id: 'DN-01', label: 'DN-01', minWidth: 100 },
  { id: 'DN-02', label: 'DN-02', minWidth: 100 },
  { id: 'DN-03', label: 'DN-03', minWidth: 100 },
  { id: 'Observacao', label: 'Observacao', minWidth: 150 },
  { id: 'Pendencia', label: 'Pendencia', minWidth: 200 },
  {
    id: 'CriadoEm',
    label: 'CriadoEm',
    minWidth: 170,
    
    format: (value) => new Date(value).toLocaleString('en-US'),
  },
  {
    id: 'AtualizadoEm',
    label: 'AtualizadoEm',
    minWidth: 170,
    
    format: (value) => new Date(value).toLocaleString('en-US'),
  },
  { id: 'Status', label: 'Status', minWidth: 100 },
  { id: 'PJ', label: 'PJ', minWidth: 100 },
  { id: 'Software', label: 'Software', minWidth: 100 },
  { id: 'Solicitante_RGE', label: 'Solicitante', minWidth: 170 },
];


// Função para criar dados com base em solicitações
function createData(
  id,
  spec,
  componente,
  dn01,
  dn02,
  dn03,
  observacao,
  pendencia,
  criadoEm,
  atualizadoEm,
  status,
  pj,
  software,
  solicitante
) {
  return {
    id,
    SPEC : spec,
    Componente : componente,
    'DN-01': dn01,
    'DN-02': dn02,
    'DN-03': dn03,
    Observacao : observacao,
    Pendencia : pendencia,
    CriadoEm : criadoEm,
    AtualizadoEm : atualizadoEm,
    Status: status,
    PJ: pj,
    Software: software,
    Solicitante_RGE: solicitante,
  };
}

// Dados fictícios baseados em solicitação
const rows = [
  createData(
    1,
    'Spec',
    'Componente A',
    'DN-01A',
    'DN-02A',
    'DN-03A',
    'Observação da solicitação 1',
    'Pendência da solicitação 1',
    '2023-07-25 12:34:56',
    '2023-07-26 10:11:12',
    'novo',
    'Projeto A',
    'Revid',
    'maria'
  ),
  createData(
    2,
    'speci 2',
    'Componente B',
    'DN-01B',
    'DN-02B',
    'DN-03B',
    'Observação da solicitação 2',
    'Pendência da solicitação 2',
    '2023-07-27 08:00:00',
    '2023-07-28 15:30:45',
    'pendente',
    'Projeto B',
    'e3d',
    'joao'
  ),
  createData(
    3,
    'spec3',
    'Componente C',
    'DN-01C',
    'DN-02C',
    'DN-03C',
    'Observação da solicitação 3',
    'Pendência da solicitação 3',
    '2023-07-29 17:45:23',
    '2023-07-30 09:22:10',
    'finalizado',
    'Projeto C',
    'plant 3d',
    'lucas'
  ),
  
  // Adicione aqui mais linhas com base nas suas solicitações reais
];


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {activeMenu} = useStateContext();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card sx={activeMenu ? {maxWidth:'82vw' } : {maxWidth: '100vw'}}>
        <CardContent>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </Paper>
        </CardContent>
    </Card>
   
  );
}