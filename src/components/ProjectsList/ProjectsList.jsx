import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import { ProjectsContext } from '../../context/ProjectsContext';
import { ProjectCard } from '../ProjectCard';

function ProjectsList() {
  const { projects } = useContext(ProjectsContext);

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {
            projects.map((project) => (
              <ProjectCard
                project={project}
              />
            ))
          }
    </Stack>
  );
}

export default ProjectsList;
