import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../../images/Logo.png';

function Header() {
  const [navTabValue, setNavTabValue] = useState(3);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/projects':
        setNavTabValue(0);
        break;
      case '/about':
        setNavTabValue(1);
        break;
      case '/contact':
        setNavTabValue(2);
        break;
      default:
        setNavTabValue(3);
        break;
    }
  }, [pathname]);

  const goToHome = () => {
    navigate('/');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <Tooltip title="Go to Home page" placement="bottom-end">
            <IconButton onClick={goToHome}>
              <Avatar alt="logo and navigate to home page" src={Logo} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="pages navigation"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Tabs
              value={navTabValue}
              aria-label="navigation tabs"
              textColor="primary"
              indicatorColor="secondary"
              orientation="vertical"
              sx={{ width: '200px' }}
            >
              <Tab label="Projects" href="/projects" aria-label="projects tab" />
              <Tab label="About" href="/about" aria-label="about tab" />
              <Tab label="Contact" href="/contact" aria-label="contact tab" />
            </Tabs>
          </Drawer>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Tabs
            value={navTabValue}
            aria-label="navigation tabs"
            textColor="primary"
            indicatorColor="secondary"
          >
            <Tab label="Projects" href="/projects" aria-label="projects tab" />
            <Tab label="About" href="/about" aria-label="about tab" />
            <Tab label="Contact" href="/contact" aria-label="contact tab" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
