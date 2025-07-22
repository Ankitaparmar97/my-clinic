// import * as React from 'react';
// import Nav from './Nav';
// import { Button } from '@mui/material';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Carouselicon from './CarouselIcon';
import { useTheme } from '@mui/material/styles';

function HomePage() {
  const theam = useTheme();
  return (
    <div>
      <Carouselicon />
      <div>
        <h1 style={{ color: theam.palette.text.primary }}>Dental Clinic</h1>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Blog />
      </div>
      <p style={{ color: theam.palette.text.primary }}>
        Contact Us by Phone Number or Email Address
      </p>
      <p style={{ color: theam.palette.text.primary }}>
        <strong>Phone:</strong> (999) 818-1111
      </p>
      <p style={{ color: theam.palette.text.primary }}>
        <strong>Email:</strong> contact@myclinic.com
      </p>
    </div>
  );
}

export default HomePage;
