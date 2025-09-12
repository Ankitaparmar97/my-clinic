import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT } from '../constants';

export default function FooterPage() {
  const theam = useTheme();
  return (
    <>
      <Box sx={{ width: '100vw', backgroundColor: theam.palette.primary.dark }}>
        <Box
          sx={{
            marginLeft: '10%',
            marginRight: '10%',
            display: 'flex',
            color: theam.palette.primary.contrastText,
          }}
        >
          <Box sx={{ width: '25%', marginRight: '1rem' }}>
            <Box sx={{ display: 'flex' }}>
              <img src="/Header-teeth.png" style={{ width: '50px', height: '50px' }}></img>
              <h3>Bhavnagar Dental</h3>
            </Box>
            <p style={{ textAlign: 'justify' }}>
              Welcome To BHavnagar Dental Clinic, One of the best dental clinic in Bhavnagar, We are
              offering advanced dental treatments to the people of all ages. Our dental experts,
              specialists and dental assistants make sure that our patients have the best
              experience.
            </p>
          </Box>
          <Box sx={{ width: '25%' }}>
            <h3>Useful Link</h3>
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Home
            </Link>
            <br />
            <Link to={'/AboutUs'} style={{ color: theam.palette.primary.contrastText }}>
              AboutUs
            </Link>
            <br />
            <Link to={'/Dentalservices'} style={{ color: theam.palette.primary.contrastText }}>
              DentalServices
            </Link>
            <br />
            <Link to={'/Gallery'} style={{ color: theam.palette.primary.contrastText }}>
              Gallery
            </Link>
            <br />
            <Link to={'/Blog'} style={{ color: theam.palette.primary.contrastText }}>
              Blog
            </Link>
            <br />
            <Link to={'/ContactUs'} style={{ color: theam.palette.primary.contrastText }}>
              ContactUs
            </Link>
          </Box>
          <Box sx={{ width: '25%' }}>
            <h3>Our services</h3>
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Dental Implant
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Dental Bridge Treatment
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Smile Desining
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Teeth Cleaning
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Denture
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Child Dental Treatment
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Root canal Treatment
            </Link>
            <br />
            <Link to={'/'} style={{ color: theam.palette.primary.contrastText }}>
              Wisdom Tooth Removal
            </Link>
            <br />
          </Box>
          <Box sx={{ width: '25%' }}>
            <h3>Contact Informations</h3>
            <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
              <Box>
                <AddCallIcon />
              </Box>
              <Box sx={{ marginLeft: '15px' }}>
                <Typography sx={{ fontWeight: '700' }}>Phone</Typography>
                <a
                  href={`tel:${CONTACT.Mobile}`}
                  style={{ textDecoration: 'none', color: theam.palette.primary.light }}
                >
                  {CONTACT.Mobile}
                </a>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
              <Box>
                <EmailIcon />
              </Box>
              <Box sx={{ marginLeft: '15px' }}>
                <Typography sx={{ fontWeight: '700' }}>Email</Typography>
                <a
                  href={`mailto:${CONTACT.Email}`}
                  style={{ textDecoration: 'none', color: theam.palette.primary.light }}
                >
                  {CONTACT.Email}
                </a>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <AddLocationIcon />
              </Box>
              <Box sx={{ marginLeft: '15px' }}>
                <Typography sx={{ fontWeight: '700' }}>Address</Typography>
                <Typography style={{ textDecoration: 'none', color: theam.palette.primary.light }}>
                  C27,Bhavnagar dental clinic, Kaliyabid, Bhavnagar-364001
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: '0.1px',
            backgroundColor: theam.palette.primary.contrastText,
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5rem',
          }}
        ></Box>
        <Typography
          style={{
            color: theam.palette.primary.contrastText,
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          Copyright Bhavnagar Dental Clinic All Right Reserved. Design & Developed by Ankita Parmar
          and Darshan Kapadiya
        </Typography>
      </Box>
    </>
  );
}
