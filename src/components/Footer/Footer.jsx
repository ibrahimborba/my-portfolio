import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack, Tooltip } from '@mui/material';
import { ContentContext } from '../../context/ContentContext';

function Footer() {
  const { content: { footer } } = useContext(ContentContext);

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
          {footer.text}
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
