import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentContext } from '../../context/ContentContext';
import { ProjectCard } from '../../components/ProjectCard';

function Projects() {
  const { projects } = useContext(ContentContext);

  return (
    <>
      <Header />
      <Stack
        spacing={4}
        sx={{
          p: { xs: 3, md: 6 },
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: { md: '50px', xs: '100px' },
        }}
      >
        {
            projects.map((project) => (
              <ProjectCard
                project={project}
                hasDetails
              />
            ))
          }
      </Stack>
      <Footer />
    </>
  );
}

export default Projects;
