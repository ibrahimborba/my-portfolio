import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Logo from '../../images/Logo.png';
import HeaderStyles from './HeaderStyles';

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <Box sx={HeaderStyles.container}>
        <h1>
          <Link
            href="/"
            sx={HeaderStyles.link_home}
          >
            <img style={{ width: '40px' }} src={Logo} alt="ibrahim borba logo and link to home" />
          </Link>
        </h1>
        <nav>
          <Box sx={HeaderStyles.container_nav}>
            <Link
              href="/projects"
              sx={pathname === '/projects' && HeaderStyles.link_active}
            >
              Projects
            </Link>
            <Link
              href="/about"
              sx={pathname === '/about' && HeaderStyles.link_active}
            >
              About
            </Link>
            <Link
              href="/contact"
              sx={pathname === '/contact' && HeaderStyles.link_active}
            >
              Contact
            </Link>
          </Box>
        </nav>
      </Box>
    </header>
  );
}

export default Header;
