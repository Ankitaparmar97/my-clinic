import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT, HOSPITAL_NAME } from '../constants';

export default function FooterPage() {
  const theam = useTheme();
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: theam.palette.primary.dark }}>
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
              <img
                src="/header-teeth.png"
                style={{ width: '50px', height: '50px', marginTop: '1.2rem' }}
              ></img>
              <h3>{HOSPITAL_NAME}</h3>
            </Box>
            <p style={{ textAlign: 'justify' }}>
              Welcome To {HOSPITAL_NAME}, One of the best dental clinic in Bhavnagar, We are
              offering advanced dental treatments to the people of all ages. Our dental experts,
              specialists and dental assistants make sure that our patients have the best
              experience.
            </p>
          </Box>
          <Box sx={{ width: '25%' }}>
            <h3>Useful Link</h3>
            <Link
              to={'/'}
              style={{ color: theam.palette.primary.contrastText }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <br />
            <Link
              to={'/AboutUs'}
              style={{ color: theam.palette.primary.contrastText }}
              onClick={() => window.scrollTo(0, 0)}
            >
              AboutUs
            </Link>
            <br />
            <Link
              to={'/Dentalservices'}
              style={{ color: theam.palette.primary.contrastText }}
              onClick={() => window.scrollTo(0, 0)}
            >
              DentalServices
            </Link>
            <br />
            <Link
              to={'/Gallery'}
              style={{ color: theam.palette.primary.contrastText }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Gallery
            </Link>
            <br />
            <Link
              to={'/ContactUs'}
              style={{ color: theam.palette.primary.contrastText }}
              onClick={() => window.scrollTo(0, 0)}
            >
              ContactUs
            </Link>
          </Box>
          <Box sx={{ width: '25%' }}>
            <h3>Our services</h3>
            <Link
              to={'/Dentalservices#implants'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Dental Implant
            </Link>
            <br />
            <Link
              to={'/Dentalservices#bridge-treatment'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Dental Bridge Treatment
            </Link>
            <br />
            <Link
              to={'/Dentalservices#smile-desining'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Smile Desining
            </Link>
            <br />
            <Link
              to={'/Dentalservices#teeth-cleaning'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Teeth Cleaning
            </Link>
            <br />
            <Link
              to={'/Dentalservices#denture'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Denture
            </Link>
            <br />
            <Link
              to={'/Dentalservices#child-treatment'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Child Dental Treatment
            </Link>
            <br />
            <Link
              to={'/Dentalservices#root-canal'}
              style={{ color: theam.palette.primary.contrastText }}
            >
              Root canal Treatment
            </Link>
            <br />
            <Link to={'/Dentalservices#wth'} style={{ color: theam.palette.primary.contrastText }}>
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
                  {CONTACT.Address}
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
          Copyright {HOSPITAL_NAME} All Right Reserved. Design & Developed by Ankita Parmar and
          Darshan Kapadiya
        </Typography>
      </Box>
    </>
  );
}
