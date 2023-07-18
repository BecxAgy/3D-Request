import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import '../styles/sidebar.css'
import { useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Logo} from "../images/logo_kemp.png"


const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export  function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();



  return (
    <Box className='sidebar'>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="name-logo">
            <img src={Logo} alt="" className="logo" />
          </div>
          
          <IconButton onClick={()=> setOpen(!open)}>
            {theme.direction === 'rtl' ? <Menu /> : <Menu />}
          </IconButton>
        </DrawerHeader>
        
        <div className={open ? "menu-items" : ""}>
          <List>
          <Box className="menu-item shadow">
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0, 
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="container-icon-home">

                      <HomeRoundedIcon /> 
                    </div>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </Box>

          
          <Box className="menu-item ">
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/historic")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="container-icon">

                    <TextSnippetRoundedIcon /> 
                    </div>
                  </ListItemIcon>
                  <ListItemText className='text-subitem' primary="Historic" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              {open ? <p className="text-accounts">
                  PÁGINA DE CONTAS
              </p> : <Box height={10}/>} 

              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/profile")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="container-icon">

                      <PersonRoundedIcon /> 
                    </div>
                  </ListItemIcon>
                  <ListItemText className='text-subitem' primary="Perfil" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/profile")}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="container-icon">

                      <LogoutRoundedIcon /> 
                    </div>
                  </ListItemIcon>
                  <ListItemText className='text-subitem' primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              
          </Box>
          </List>
        </div>
       
        
      </Drawer>
      
    </Box>
  );
}