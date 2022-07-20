import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} color="neutral">
          <Toolbar>
            <Typography align="center" variant="body1" component="div" sx={{ flexGrow: 1 }}>
              Ibrahim Borba
              <span>&copy;</span>
              , 2022
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
}

export default Footer;
