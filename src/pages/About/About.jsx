import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { AvaiableAt } from '../../components/AvaiableAt';
import profile from '../../images/profile.png';

function About() {
  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        alignItems="center"
        spacing={2}
        sx={{ p: 5, marginBottom: { md: '50px', xs: '100px' } }}
      >
        <Stack direction="row">
          <Box sx={{ p: 0, maxWidth: '550px' }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              I&apos;m an aspiring Web Developer who loves to create
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
              {/* eslint-disable-next-line max-len -- Unable full text content  */}
              Through my career, I&apos;ve always been passionate about technology and how it can create a positive impact in people&apos;s lives. Which lead me to transition from architecture to development.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {/* eslint-disable-next-line max-len -- Unable full text content  */}
              My goals are to always learn and improve as a programmer. And to create apps that will give a pleasant experience to its users and make their lives better.
            </Typography>
          </Box>
          <Avatar
            alt="Ibrahim Borba profile"
            src={profile}
            sx={{
              ml: 10,
              width: 250,
              height: 250,
              filter: 'grayscale(100%) contrast(90%) brightness(105%)',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Ibrahim Borba
          </Avatar>
        </Stack>
        <AvaiableAt />
      </Stack>
      <Footer />
    </>
  );
}

export default About;
