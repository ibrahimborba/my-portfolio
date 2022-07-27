import React, { useContext } from 'react';
import Link from '@mui/material/Link';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import { ProjectsContext } from '../../context/ProjectsContext';

function ProjectsList() {
  const { projects } = useContext(ProjectsContext);

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
