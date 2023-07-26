import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
 
  { field: 'SPEC', headerName: 'SPEC',  sortable: false, width: 150 },
  { field: 'Componente', headerName: 'Componente', width: 150 ,  sortable: false },
  {
    field: 'DN-01',
    headerName: 'DN-01',
    sortable: false,
    type: 'string',
    width: 90,
  },
  {
    field: 'DN-02',
    headerName: 'DN-02',
    sortable: false,
    type: 'string',
    
    width: 90,
  },
  {
    field: 'DN-03',
    headerName: 'DN-03',
    sortable: false,
    type: 'string',
    width: 90,
  },
 
  {
    field: 'CriadoEm',
    headerName: 'CriadoEm',
    type: 'Date',
    width: 180,
  },

  {
    field: 'Status',
    headerName: 'Status',
    width: 100,
    
  },
  {
    field: 'PJ',
    headerName: 'PJ',
    sortable: false,
    width: 100,
  },
  {
    field: 'Software',
    headerName: 'Software',
    width: 90,
  },
  {
    field: 'Solicitante_RGE',
    headerName: 'Solicitante',
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    SPEC: 'Especificação 1',
    Componente: 'Componente A',
    'DN-01': 'DN-01A',
    'DN-02': 'DN-02A',
    'DN-03': 'DN-03A',
    Observacao: 'Observação da solicitação 1',
    Pendencia: 'Pendência da solicitação 1',
    CriadoEm: '2023-07-25 12:34:56',
    AtualizadoEm: '2023-07-26 10:11:12',
    Status: 'novo',
    PJ: 'Projeto A',
    Software: 'Revid',
    Solicitante_RGE: 'maria',
  },
  {
    id: 2,    
    SPEC: 'Especificação 2',
    Componente: 'Componente B',
    'DN-01': 'DN-01B',
    'DN-02': 'DN-02B',
    'DN-03': 'DN-03B',
    Observacao: 'Observação da solicitação 2',
    Pendencia: 'Pendência da solicitação 2',
    CriadoEm: '2023-07-27 08:00:00',
    AtualizadoEm: '2023-07-28 15:30:45',
    Status: 'pendente',
    PJ: 'Projeto B',
    Software: 'e3d',
    Solicitante_RGE: 'joao',
  },
  {
    id: 3,
    
    SPEC: 'Especificação 3',
    Componente: 'Componente C',
    'DN-01': 'DN-01C',
    'DN-02': 'DN-02C',
    'DN-03': 'DN-03C',
    Observacao: 'Observação da solicitação 3',
    Pendencia: 'Pendência da solicitação 3',
    CriadoEm: '2023-07-29 17:45:23',
    AtualizadoEm: '2023-07-30 09:22:10',
    Status: 'finalizado',
    PJ: 'Projeto C',
    Software: 'plant 3d',
    Solicitante_RGE: 'lucas',
  },
  // Adicione aqui mais linhas com base nas suas solicitações reais
];


export default function Table() {
  return (
   
  <div className='shadow-2xl p-10'>
    <h4 className='ms-3 mb-5 font-bold'>Solicitações</h4>
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{border: 0}}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>


  );
}