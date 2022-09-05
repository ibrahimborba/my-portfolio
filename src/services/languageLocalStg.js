const LANG = 'language-imborba';
const INITIAL_VALUE = 'pt-br';

const readLang = () => {
  if (!localStorage.getItem(LANG)) return localStorage.setItem(LANG, INITIAL_VALUE);
  return localStorage.getItem(LANG);
};

export const updateLang = (lang) => localStorage.setItem(LANG, lang);

export const getLang = () => readLang();
