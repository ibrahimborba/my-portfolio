import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        >
          Ibrahim Borba
          <span>&copy;</span>
          , 2022
        </Typography>
        <ButtonGroup variant="text" aria-label="avaiable links" sx={{ flexGrow: 1 }}>
          <Link href="https://www.linkedin.com/in/ibrahimborba/" target="_blank">
            <IconButton aria-label="linkedin link" size="medium" color="primary">
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Link>
          <Link href="https://github.com/ibrahimborba" target="_blank">
            <IconButton aria-label="github link" size="medium" color="primary">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Link>
          <Link href="mailto:ibrahim.borba@gmail.com" target="_blank">
            <IconButton aria-label="send email" size="medium" color="primary">
              <EmailIcon fontSize="inherit" />
            </IconButton>
          </Link>
        </ButtonGroup>
        <Typography
          align="center"
          variant="body1"
          component="p"
          sx={{ flexGrow: 0, display: { sm: 'flex', xs: 'none' } }}
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
