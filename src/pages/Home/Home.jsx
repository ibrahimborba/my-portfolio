import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Footer } from '../../components/Footer';
import { StyledBox } from '../../styles/GlobalTheme';
import { Header } from '../../components/Header';
import { ProjectsList } from '../../components/ProjectsList';
import { AvaiableAt } from '../../components/AvaiableAt';
import cover from '../../images/cover.png';
import { ContentContext } from '../../context/ContentContext';

function Home() {
  const { content: { home } } = useContext(ContentContext);

  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ p: 5, marginBottom: { md: '50px', xs: '100px' } }}
      >
        <Stack
          sx={{
            justifyContent: { xl: 'center', xs: 'start' },
            flexDirection: { md: 'row', xs: 'column' },
          }}
        >
          <CardMedia
            alt="painting code"
            component="img"
            image={cover}
            sx={{
              height: 200,
              width: 340,
              display: { xs: 'none', sm: 'flex', md: 'none' },
              alignSelf: 'center',
            }}
          />
          <Box sx={{ p: { md: 6, sm: 2, xs: 0 } }}>
            <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '520px', mb: 3 }}>
              {home.intro}
            </Typography>
            <Typography variant="h1">
              Ibrahim Borba
            </Typography>
          </Box>
          <CardMedia
            alt="painting code"
            component="img"
            image={cover}
            sx={{
              height: 350,
              width: 600,
              display: { xs: 'none', md: 'flex' },
            }}
          />
        </Stack>
        <StyledBox>
          <Typography variant="h2" gutterBottom>
            {home.projectTitle}
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
