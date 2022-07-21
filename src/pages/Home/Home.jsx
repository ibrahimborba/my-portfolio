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
import StyledBox from './StyledHome';
import { Header } from '../../components/Header';
import { ProjectsList } from '../../components/ProjectsList';

function Home() {
  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ p: 5, marginBottom: { md: '50px', xs: '100px' } }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '520px' }}>
            {/* eslint-disable-next-line max-len */}
            Hi, welcome to my Portfolio! I&apos;m a
            <Typography variant="subtitle2" display="inline"> Jr. Web Developer </Typography>
            passionate about creating apps that impact people&apos;s lives.
          </Typography>
          <Typography variant="h1">
            Ibrahim Borba
          </Typography>
        </Box>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <ProjectsList />
        </StyledBox>
        <StyledBox>
          <Typography variant="h2" gutterBottom align="center">
            I&apos;m also avaiable at:
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
      </Stack>
      <Footer />
    </>
  );
}

export default Home;
