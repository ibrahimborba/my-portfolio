import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

function ProjectDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <h1>{`Project ${id}`}</h1>
      <Footer />
    </>
  );
}

export default ProjectDetails;
