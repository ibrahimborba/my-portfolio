import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { AvaiableAt } from '../../components/AvaiableAt';
import profile from '../../images/profile.png';
import { ContentContext } from '../../context/ContentContext';

function About() {
  const { content: { about } } = useContext(ContentContext);

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
              {about.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
              {about.paragraph1}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {about.paragraph2}
            </Typography>
          </Box>
          <Avatar
            alt="Ibrahim Borba profile"
            src={profile}
            sx={{
              ml: 10,
              width: 250,
              height: 250,
              filter: 'grayscale(100%) contrast(105%) brightness(105%)',
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
