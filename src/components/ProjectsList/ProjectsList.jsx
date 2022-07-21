import React from 'react';
import Link from '@mui/material/Link';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
// import { Container } from '@mui/material';
import projects from '../../services/projects';

function ProjectsList() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{ width: '80vw', alignItems: 'center', justifyContent: 'center' }}
    >
      {
            projects.map((project) => (
              <ImageListItem sx={{ width: 300 }} key={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                />
                <Link href={project.url}>
                  <ImageListItemBar
                    title={project.title}
                    subtitle={project.subtitle}
                  />
                </Link>
              </ImageListItem>
            ))
          }
    </Stack>
  );
}

export default ProjectsList;
