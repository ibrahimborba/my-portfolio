import React from 'react';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';
import projects from '../../services/projects';

function ProjectsList() {
  return (
    <Container sx={{ width: '100vw', overflow: 'scroll' }}>
      <ImageList gap={2} cols={3}>
        {
            projects.map((project) => (
              <ImageListItem sx={{ width: 350 }} key={project.title}>
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
      </ImageList>
    </Container>
  );
}

export default ProjectsList;
