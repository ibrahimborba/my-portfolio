import React from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import StyledBox from './StyledHome';
// import PortfolioCover from '../../images/PortfolioCover.png';
import { ProjectsList } from '../../components/ProjectsList';

function Home() {
  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
      >
        <Box sx={{
          p: 4,
          pl: 10,
          // backgroundImage: `url(${PortfolioCover})`,
          // backgroundSize: 'contain',
          // backgroundPosition: 'right',
          // backgroundRepeat: 'no-repeat',
        }}
        >
          <Box sx={{
            p: 2,
            maxWidth: '710px',
          }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Hi. Welcome to my portfolio!
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: '500px' }}>
              {/* eslint-disable-next-line max-len */}
              I&apos;m a Jr. Web Developer passionate about creating apps that impact people&apos;s lives.
            </Typography>
            <Typography variant="h1">
              Ibrahim Borba
            </Typography>
          </Box>
        </Box>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <ProjectsList />
        </StyledBox>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            Also avaiable at:
          </Typography>
          <ButtonGroup variant="text" aria-label="avaiable links" sx={{ marginBottom: 12 }}>
            <Link href="https://www.linkedin.com/in/ibrahimborba/">
              <IconButton aria-label="linkedin link" size="large" color="primary">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Link href="https://github.com/ibrahimborba">
              <IconButton aria-label="github link" size="large" color="primary">
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <IconButton aria-label="github link" size="large" color="primary">
              <EmailIcon fontSize="inherit" />
            </IconButton>

          </ButtonGroup>
        </StyledBox>
      </Stack>
      <Footer />
    </>
  );
}

export default Home;
