import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import Home from './HomePage';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Blog from './Blog';
import ContactUs from './ContactUs';
import DentalServices from './Dentalservices';
import Button from './Button';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//#TODO:  resolve menu flickering

export default function ColorTabs() {
  const theam = useTheme();
  const location = useLocation();
  let currentPath = location.pathname;

  if (currentPath.startsWith('/Dentalservices')) {
    currentPath = '/Dentalservices';
  }
  const [, setValue] = React.useState(location.pathname);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Open menu when hovering over tab
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu only when leaving both tab & menu
  const handleLeave = () => {
    setAnchorEl(null);
  };

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={currentPath} onChange={handleChange} aria-label="secondary tabs example">
          <Tab value="/" label="Home" component={NavLink} to="/" />
          <Tab value="/AboutUs" label="About Us" component={NavLink} to="/AboutUs" />
          <Tab
            value="/Dentalservices"
            onMouseEnter={handleHover}
            // onMouseLeave={handleLeave}

            label={
              <span style={{ display: 'flex', alignItems: 'center' }} onMouseEnter={handleHover}>
                DentalServices
                <IconButton
                  aria-controls={open ? 'menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{
                    transition: 'transform 0.3s ease',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </span>
            }
          />
          <Tab value="/Gallery" label="Gallery" component={NavLink} to="/Gallery" />
          <Tab value="/Blog" label="Blog" component={NavLink} to="/Blog" />
          <Tab value="/ContactUs" label="Contact Us" component={NavLink} to="/ContactUs" />
        </Tabs>
        <Button />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLeave}
        MenuListProps={{
          onMouseEnter: () => {},
          onMouseLeave: handleLeave,
        }}
      >
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#bridge-treatment"
          onClick={handleLeave}
        >
          Dental bridge treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#implants"
          onClick={handleLeave}
        >
          Dental Implants
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#teeth-cleaning"
          onClick={handleLeave}
        >
          Teeth Cleaning
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#root-canal"
          onClick={handleLeave}
        >
          Root Canal Treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#child-treatment"
          onClick={handleLeave}
        >
          Child Teeth Treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#smile-designing"
          onClick={handleLeave}
        >
          Smile designing
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#denture"
          onClick={handleLeave}
        >
          Denture
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theam.palette.primary.light, marginTop: '1px' }}
          component={NavLink}
          to="/Dentalservices#wth"
          onClick={handleLeave}
        >
          Wisdom tooth removal
        </MenuItem>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dentalservices" element={<DentalServices />} />
        <Route path="/Dentalservices/implants" element={<DentalServices />} />
        <Route path="/Dentalservices/whitening" element={<DentalServices />} />
        <Route path="/Dentalservices/root-canal" element={<DentalServices />} />
        <Route path="/Dentalservices/child-treatment" element={<DentalServices />} />
        <Route path="/Dentalservices/denture" element={<DentalServices />} />
        <Route path="/Dentalservices/bridge-treatment" element={<DentalServices />} />
        <Route path="/Dentalservices/smile-designing" element={<DentalServices />} />
        <Route path="/Dentalservices/wisdom-removal" element={<DentalServices />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Box>
  );
}
