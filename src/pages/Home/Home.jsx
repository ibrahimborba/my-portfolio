import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Footer } from '../../components/Footer';
import { StyledBox } from '../../GlobalTheme';
import { Header } from '../../components/Header';
import { ProjectsList } from '../../components/ProjectsList';
import AvaiableAt from '../../components/AvaiableAt/AvaiableAt';

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
        <AvaiableAt />
      </Stack>
      <Footer />
    </>
  );
}

export default Home;
