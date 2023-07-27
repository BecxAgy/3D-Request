import React, { useState } from 'react'
import { columns, rows } from '../../data/dummy'
import { DataGrid } from '@mui/x-data-grid';
import MenuActions from './MenuActions';

function Solicitacoes() {
  const [menuActions, setMenuActions] = useState(false); 

  const toggleMenuActions =  () => {
    setMenuActions(true);
  }

  

   
  return (
    
    <div className='shadow-2xl '>
    {menuActions ? <MenuActions/> : <></>}
    <DataGrid
      rows={rows}
      onRowClick={toggleMenuActions}
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