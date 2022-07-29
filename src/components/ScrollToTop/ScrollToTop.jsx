import React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fab
      onClick={scrollToTop}
      variant="contained"
      aria-label="scroll back to top"
      size="small"
      sx={{
        position: 'fixed',
        bottom: { sm: '70px', xs: '110px' },
        right: '15px',
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default ScrollToTop;
