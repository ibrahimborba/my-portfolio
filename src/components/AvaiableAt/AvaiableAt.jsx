import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StyledBox } from '../../styles/GlobalTheme';

function AvaiableAt() {
  return (
    <StyledBox>
      <Typography variant="h2" gutterBottom align="center">
        You can find me at:
      </Typography>
      <ButtonGroup variant="text" aria-label="avaiable links">
        <Link href="https://www.linkedin.com/in/ibrahimborba/" target="_blank">
          <IconButton aria-label="linkedin link" size="large" color="primary">
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Link>
        <Link href="https://github.com/ibrahimborba" target="_blank">
          <IconButton aria-label="github link" size="large" color="primary">
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Link>
        <Link href="mailto:ibrahim.borba@gmail.com" target="_blank">
          <IconButton aria-label="send email" size="large" color="primary">
            <EmailIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </ButtonGroup>
    </StyledBox>
  );
}

export default AvaiableAt;
