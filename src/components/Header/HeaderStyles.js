const HeaderStyles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },

  container_nav: {
    width: '340px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },

  link_active: {
    borderBottom: '3px solid #ffb300',
  },

  link_home: {
    display: 'flex',
    transition: '0.1s',

    '&:hover': {
      border: 'none',
      filter: 'invert(12%) sepia(39%) saturate(5218%) hue-rotate(215deg) brightness(95%) contrast(112%)',
    },
  },
};

export default HeaderStyles;
