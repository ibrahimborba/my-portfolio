import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import StyledBox from './StyledHome';
import PortfolioCover from '../../images/PortfolioCover.png';
import { SimpleCard } from '../../components/SimpleCard';

function Home() {
  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        spacing={3}
      >
        <Box sx={{
          backgroundImage: `url(${PortfolioCover})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right',
        }}
        >
          <Box sx={{
            maxWidth: '720px',
            p: 5,
            backgroundImage: 'linear-gradient(to right, rgba(254, 254, 254), rgba(254, 254, 254, 0.7))',
          }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Hi. Welcome to my portfolio!
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: '500px' }}>
              {/* eslint-disable-next-line max-len */}
              I&apos;m a Jr. Web Developer passionate about creating apps that impact people&apos;s lives.
            </Typography>
            <Typography variant="h1" gutterBottom>
              Ibrahim Borba
            </Typography>
          </Box>
        </Box>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <SimpleCard />
        </StyledBox>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            You can also find me at:
          </Typography>
        </StyledBox>
      </Stack>
      <Footer />
    </>
  );
}

export default Home;
