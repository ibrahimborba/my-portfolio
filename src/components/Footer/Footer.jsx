import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack, Tooltip } from '@mui/material';

function Footer() {
  return (
    <AppBar
      position="fixed"
      color="neutral"
      component="footer"
      sx={{
        p: 2, top: 'auto', bottom: 0, alignItems: 'center',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ alignItems: 'center', width: '96vw' }}
      >
        <Typography
          align="start"
          variant="body1"
          component="p"
          sx={{ flexGrow: 1 }}
        >
          Ibrahim Borba
          <span>&copy;</span>
          , 2022
        </Typography>
        <Typography
          align="center"
          variant="body1"
          component="p"
          sx={{ flexGrow: 0 }}
        >
          Developed with React, React Testing Library and Material UI.
          <Tooltip title="Go to Portfolio GitHub repository" placement="top-start">
            <IconButton
              aria-label="portfolio github link"
              size="large"
              color="primary"
              sx={{ p: 0, pl: 1 }}
              href="https://github.com/ibrahimborba"
              target="_blank"
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Typography>
      </Stack>
    </AppBar>
  );
}

export default Footer;
