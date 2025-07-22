// import * as React from 'react';
// import Nav from './Nav';
// import { Button } from '@mui/material';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Carouselicon from './CarouselIcon';

function HomePage() {
  return (
    <div>
      <Carouselicon />
      <div>
        <AboutUs />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default HomePage;
