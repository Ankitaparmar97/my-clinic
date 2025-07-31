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
import { Menu, MenuItem } from '@mui/material';

export default function ColorTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const timeoutRef = React.useRef<number | undefined>(undefined);

  const handleLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setAnchorEl(null);
    }, 1000);
  };
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined; // reset
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={value} onChange={handleChange} aria-label="secondary tabs example">
          <Tab value="one" label="Home" component={NavLink} to="/" />
          <Tab value="two" label="About Us" component={NavLink} to="/AboutUs" />
          <Tab
            value="/Dentalservices"
            label="Dental Services ▼"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
          <Tab value="four" label="Gallery" component={NavLink} to="/Gallery" />
          <Tab value="five" label="Blog" component={NavLink} to="/Blog" />
          <Tab value="six" label="Contact Us" component={NavLink} to="/ContactUs" />
        </Tabs>
        <Button />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: () => clearTimeout(timeoutRef.current),
          onMouseLeave: handleLeave,
        }}
      >
        <MenuItem component={NavLink} to="/Dentalservices/implants" onClick={handleClose}>
          Dental Implants
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/child-treatment" onClick={handleClose}>
          Child treatment
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/whitening" onClick={handleClose}>
          Teeth Whitening
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/root-canal" onClick={handleClose}>
          Root Canal Treatment
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/wisdom-removal" onClick={handleClose}>
          Wisdom tooth removal
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/denture" onClick={handleClose}>
          Denture
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/bridge-treatment" onClick={handleClose}>
          Dental bridge treatment
        </MenuItem>
        <MenuItem component={NavLink} to="/Dentalservices/smile-designing" onClick={handleClose}>
          Smile designing
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
