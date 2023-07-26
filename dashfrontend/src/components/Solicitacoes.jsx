import React from 'react'
import { columns, rows } from '../data/dummy'
import { DataGrid } from '@mui/x-data-grid';

function Solicitacoes() {
   
  return (
    <div className='shadow-2xl '>
    
    <DataGrid
      rows={rows}
      onRowClick={(row) => console.log("clicou" + row.id)}
      
      columns={columns}
      sx={{border: 0}}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection 
      disableSelectionOnClick {...rows}
      select
        
    />
  </div>
  )
}

export default Solicitacoes