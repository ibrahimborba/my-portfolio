import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import projects from './data/projects';

export const ProjectsContext = createContext();

export default function ProjectsProvider({ children }) {
  const contextValue = useMemo(() => ({ projects }));

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
