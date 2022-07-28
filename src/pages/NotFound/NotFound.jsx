import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EastIcon from '@mui/icons-material/East';
import { ContentContext } from '../../context/ContentContext';
import notfound from '../../images/notfound.png';

function NotFound() {
  const { content: { notFound } } = useContext(ContentContext);

  return (
    <Stack
      alignItems="center"
      sx={{
        p: 5,
        height: '100vh',
        marginBottom: { md: '50px', xs: '100px' },
        justifyContent: { md: 'center', xs: 'end' },
        backgroundImage: { md: 'none', xs: `url(${notfound})` },
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box sx={{ p: 0, maxWidth: '550px' }}>
          <Typography variant="h2">
            {notFound.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
            {notFound.text}
          </Typography>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            href="./"
            endIcon={<EastIcon />}
          >
            {notFound.backTo}
          </Button>
        </Box>
        <CardMedia
          alt="not found"
          component="img"
          image={notfound}
          sx={{
            height: 500,
            width: 350,
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default NotFound;
