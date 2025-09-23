import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Achieve from './Achievement';
import { HOSPITAL_NAME } from '../constants';

function AboutUs() {
  const theam = useTheme();
  const imgSrc = theam.palette.mode === 'dark' ? '/medical-symbol2.png' : '/medical-symbol.png';

  const imgsrc = theam.palette.mode === 'dark' ? '/dentist-chair2.png' : '/dentist-chair.png';
  return (
    <>
      <Box sx={{ backgroundColor: theam.palette.background.default }}>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          About Us
        </h2>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box sx={{ width: '60%', marginTop: '3rem' }}>
            <Box
              style={{
                color: theam.palette.primary.light,
                marginLeft: '8.125rem',
                fontSize: '1.5rem',
                fontWeight: '700',
              }}
            >
              {HOSPITAL_NAME}
            </Box>
            <p
              style={{
                fontFamily: 'poppins, sans-serif',
                color: theam.palette.text.secondary,
                marginLeft: '8.125rem',
                fontSize: '1rem',
              }}
            >
              We have been at the forefront of dental healthcare, committed to providing world-class
              dental treatments in a friendly and most comfortable environment. We offer the best in
              comprehensive dental services and recognize the importance of each patient's unique
              needs and concerns while staying committed to providing quality and individualized
              dental services
            </p>
            <Box sx={{ display: 'flex', marginLeft: '8.125rem' }}>
              <Box>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Dental Implant</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Dental Bridge Treatment</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Root Canal Treatment</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      height: '70px',
                      width: '70px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    }}
                  >
                    <img src={imgSrc} />
                  </Box>
                  <Box sx={{ marginLeft: '15px' }}>
                    <Typography sx={{ fontSize: '2rem', fontWeight: '500' }}>5 years</Typography>
                    <Typography>Dental Exprienced</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginLeft: '100px' }}>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Teeth Whitining</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Smile desining</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: '18px' }}>
                  <CheckCircleIcon sx={{ color: theam.palette.primary.light }}></CheckCircleIcon>
                  <Typography sx={{ marginLeft: '10px' }}>Routine Checkup </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      height: '70px',
                      width: '70px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    }}
                  >
                    <img src={imgsrc} />
                  </Box>
                  <Box sx={{ marginLeft: '15px' }}>
                    <Typography sx={{ fontSize: '2rem', fontWeight: '500' }}>1800+</Typography>
                    <Typography>Dental services</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '40%', overflow: 'hidden', marginRight: '8.125rem' }}>
            <img src="/bhavnagar-clinic.jpg" style={{ height: '600px', paddingLeft: '40px' }} />
          </Box>
        </Box>
        <Typography
          fontWeight={700}
          fontSize={'2rem'}
          marginLeft={'8.125rem'}
          marginBottom={'20px'}
        >
          Our Achievements
        </Typography>
        <Box>
          <Achieve />
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
