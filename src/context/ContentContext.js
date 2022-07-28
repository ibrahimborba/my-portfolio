import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import contentEN from './data/contentEN';
// import contentPT from './data/contentPT';
import projectsEN from './data/projectsEN';
// import projectsPT from './data/projectsPT';
// import { getLang, updateLang } from '../services/languageLocalStg';

export const ContentContext = createContext();

export default function ContentProvider({ children }) {
  const [projects, setProjects] = useState(projectsEN);
  const [content, setContent] = useState(contentEN);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    switch (language) {
      case 'en':
        setContent(contentEN);
        setProjects(projectsEN);
        break;
        /*       case 'pt-br':
        setContent(contentPT);
        setProjects(projectsPT);
        break; */
      default:
        break;
    }
  }, []);

  const changeLang = useCallback((lang) => () => {
    setLanguage(lang);
  });

  const contextValue = useMemo(() => ({ content, projects, changeLang }));

  return (
    <ContentContext.Provider value={contextValue}>
      {children}
    </ContentContext.Provider>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
