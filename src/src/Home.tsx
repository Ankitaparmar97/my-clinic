import * as React from 'react';
// import Nav from './Nav';
// import { Button } from '@mui/material';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Example from './Example';

function Home() {
  return (
    <div>
    
       {/* <div style={{ display: 'flex' }}>
            <Nav />
            <Button/>
          </div> */}
          <div className='image-container'>
              <div className='heading'>
              BHAVNAGAR DENTAL<br/>
              AND IMPLANT HOSPITAL
              </div>
          </div>
          <div>
            <h1 style={{ color: 'black' }}>Dental Clinic</h1>
          </div>
          {/* <div>
            <DentalServices/>
          </div> */}
          <div>
            <AboutUs/>
          </div>
          <div>
            <Gallery/>
          </div>
          <div>
            {<ContactUs/>}
          </div>
          <div>
            <Blog/> 
          </div><p style={{ color: 'black' }}>Contact Us by Phone Number or Email Address</p>
      <p style={{ color: 'black' }}><strong>Phone:</strong> (999) 818-1111</p>
      <p style={{ color: 'black' }}><strong>Email:</strong> contact@myclinic.com</p>
      <div>
        <Example/>
      </div>

    </div>
  );
}

export default Home;
