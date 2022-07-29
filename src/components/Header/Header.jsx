import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
/* import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; */
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
// import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/logo.png';
import { ContentContext } from '../../context/ContentContext';

function Header() {
  const [navTabValue, setNavTabValue] = useState(3);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { content: { header } } = useContext(ContentContext);

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

  /*   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; */

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Tooltip title="Go to Home page" placement="bottom-end">
            <IconButton onClick={goToHome}>
              <Avatar alt="logo and navigate to home page" src={logo} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>
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
              <Tab label={header.navProjects} href="/projects" aria-label="projects tab" />
              <Tab label={header.navAbout} href="/about" aria-label="about tab" />
              {/* <Tab label="Contact" href="/contact" aria-label="contact tab" /> */}
            </Tabs>
          </Drawer>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
          <Tabs
            value={navTabValue}
            aria-label="navigation tabs"
            textColor="primary"
            indicatorColor="secondary"
          >
            <Tab label={header.navProjects} href="/projects" aria-label="projects tab" />
            <Tab label={header.navAbout} href="/about" aria-label="about tab" />
            {/* <Tab label="Contact" href="/contact" aria-label="contact tab" /> */}
          </Tabs>
          {/*           <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={changeLang('en')}>English</MenuItem>
            <MenuItem onClick={changeLang('pt-br')}>Português (Brasil)</MenuItem>
          </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
