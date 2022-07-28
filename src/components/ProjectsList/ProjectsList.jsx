import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContentContext } from '../../context/ContentContext';
import { ProjectCard } from '../ProjectCard';

function ProjectsList() {
  const { content: { projectList }, projects } = useContext(ContentContext);

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
      <Card sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '420px',
        width: '280px',
      }}
      >
        <CardContent>
          <Typography gutterBottom variant="h2">
            { projectList.soon }
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ProjectsList;
