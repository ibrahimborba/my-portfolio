import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import { ContentContext } from '../../context/ContentContext';

function ProjectCard({ project, hasDetails }) {
  const { content: { projectCard } } = useContext(ContentContext);

  return (
    <Card sx={hasDetails ? {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
    } : {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '280px',
      maxHeight: '420px',
    }}
    >
      <CardMedia
        component="img"
        height="260"
        image={project.image}
        alt={project.title}
        sx={{ width: 280 }}
      />
      <Box>
        <CardActionArea href={project.urlDetail}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {project.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {project.subtitle}
            </Typography>
            <Button
              variant="text"
              size="small"
              color="primary"
              href={project.urlDetail}
              endIcon={<EastIcon />}
              sx={{ mb: 2, fontWeight: 'bold' }}
            >
              {projectCard.readMore}
            </Button>
            {
              hasDetails && (
                <>
                  <Typography variant="body1" color="text.secondary">
                    {projectCard.madeWith}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.technologies}
                  </Typography>
                </>
              )
            }
          </CardContent>
        </CardActionArea>
        {
          hasDetails && (
          <CardActions sx={{ p: 2 }}>
            <IconButton
              aria-label={`${project.title} github link`}
              size="large"
              color="primary"
              href={project.urlGitHub}
              target="_blank"
              sx={{ p: 0 }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href={project.urlDeploy}
              target="_blank"
              endIcon={<EastIcon />}
            >
              {projectCard.visitHere}
            </Button>
          </CardActions>
          )
        }
      </Box>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape.isRequired,
  hasDetails: PropTypes.bool,
};

ProjectCard.defaultProps = {
  hasDetails: false,
};

export default ProjectCard;
