import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { FiX } from 'react-icons/fi';


export default function AlertsMessage({message, type}) {
  const [open, setOpen] = React.useState(true);

  return (
    
      <Collapse in={open}>
        <Alert
            severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <FiX />
            </IconButton>
          }
          sx={{ m: 5 }}
        >
         {message}
        </Alert>
        
      </Collapse>
      
   
  );
}
