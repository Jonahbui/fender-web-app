
import {
  Navigate
} 
from "react-router-dom";import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Logo from '../Logo/Logo.js';

const pages = { 'Home' : '', 'Queue' : 'queue'};


const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container sx={{width: '100%', margin:"0"}} maxWidth={false}>
        <Toolbar disableGutters>
          <Box>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'} }}
              pl={1}
            >
            Fender
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, position: 'absolute', top: 15,right: 10}}>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;