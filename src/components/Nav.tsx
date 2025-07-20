import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Blog from './Blog';
import ContactUs from './ContactUs';
import DentalServices from './Dentalservices';
import Button from './Button';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Home" component={NavLink} to="/" />
          <Tab value="two" label="About Us" component={NavLink} to="/AboutUs" />
          <Tab value="three" label="Dental services" component={NavLink} to="/Dentalservices" />
          <Tab value="four" label="Gallery" component={NavLink} to="/Gallery" />
          <Tab value="five" label="Blog" component={NavLink} to="/Blog" />
          <Tab value="six" label="Contact Us" component={NavLink} to="/ContactUs" />
        </Tabs>
        <Button />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dentalservices" element={<DentalServices />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Box>
  );
}
