import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Footer } from '../../components/Footer';
import { StyledBox } from '../../styles/GlobalTheme';
import { Header } from '../../components/Header';
import { ProjectsList } from '../../components/ProjectsList';
import { AvaiableAt } from '../../components/AvaiableAt';
import cover from '../../images/cover.png';

function Home() {
  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ p: 5, marginBottom: { md: '50px', xs: '100px' } }}
      >
        <Stack
          direction="row"
          sx={{
            backgroundImage: { md: `url(${cover})` },
            backgroundSize: '750px 380px',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            justifyContent: { xl: 'center', xs: 'start' },
          }}
        >
          <Box sx={{
            p: { md: 6, xs: 2 },
            backgroundImage: 'linear-gradient(90deg, rgba(254,254,254,1) 90%, rgba(254,254,254,0) 100%)',
          }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '520px', mb: 3 }}>
              {/* eslint-disable-next-line max-len -- Unable full text content   */}
              Hi, welcome to my Portfolio! I&apos;m a
              <Typography variant="subtitle2" display="inline"> Jr. Web Developer </Typography>
              passionate about creating apps that impact people&apos;s lives.
            </Typography>
            <Typography variant="h1">
              Ibrahim Borba
            </Typography>
          </Box>
        </Stack>
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
