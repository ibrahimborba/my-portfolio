const LANG = 'LANG';
const INITIAL_VALUE = 'en';

const readLang = () => {
  if (!localStorage.getItem(LANG)) localStorage.setItem(LANG, INITIAL_VALUE);
  return localStorage.getItem(LANG);
};

const saveLang = (lang) => localStorage.setItem(LANG, lang);

export const updateLang = (lang) => saveLang(lang);

export const getLang = () => readLang();
