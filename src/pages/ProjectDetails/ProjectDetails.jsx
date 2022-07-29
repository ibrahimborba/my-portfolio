import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollToTop } from '../../components/ScrollToTop';
import { ContentContext } from '../../context/ContentContext';

function ProjectDetails() {
  const { projects } = useContext(ContentContext);
  const { id } = useParams();
  const project = projects.find((currProject) => currProject.title === id);

  return (
    <>
      <Header />
      <Stack
        divider={<Divider flexItem />}
        p={6}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        marginBottom={{ md: '50px', xs: '100px' }}
      >
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography gutterBottom variant="h2">
            {project.title}
          </Typography>
          <Typography gutterBottom variant="h3">
            {project.subtitle}
          </Typography>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{ width: { xs: 250, sm: 500 }, height: { xs: 150, sm: 300 } }}
          />
          <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '520px', mb: 3 }}>
            {project.introductionText}
          </Typography>
          <Stack direction="row" spacing={2} paddingBottom="20px">
            <Button
              variant="contained"
              size="medium"
              color="primary"
              href={project.urlGitHub}
              target="_blank"
              endIcon={<GitHubIcon />}
              sx={{ width: '150px' }}
            >
              {project.urlGitHubCTA}
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              href={project.urlDeploy}
              target="_blank"
              endIcon={<EastIcon />}
              sx={{ width: '150px' }}
            >
              {project.urlDeployCTA}
            </Button>
          </Stack>
          <Typography variant="h3">
            {project.technologiesTitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} m={0}>
            <Link
              variant="subtitle1"
              href="https://www.linkedin.com/in/ibrahimborba/"
              target="_blank"
              sx={{ textDecoration: 'none' }}
            >
              Ibrahim Borba
            </Link>
            <Link
              variant="subtitle1"
              href={project.team.memberOneLikedIn}
              target="_blank"
              sx={{ textDecoration: 'none' }}
            >
              {project.team.memberOne}
            </Link>
            <Link
              variant="subtitle1"
              href={project.team.memberTwoLikedIn}
              target="_blank"
              sx={{ textDecoration: 'none' }}
            >
              {project.team.memberTwo}
            </Link>
          </Stack>
        </Stack>
        {
          project.development.map((development) => (
            <Stack spacing={2} justifyContent="center" maxWidth="520px" key={development.title}>
              <Typography variant="h3">
                {development.title}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h4">
                {development.subtitle}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h5">
                {development.text1}
              </Typography>
            </Stack>
          ))
        }

      </Stack>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default ProjectDetails;
