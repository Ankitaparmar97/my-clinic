import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Achieve from './Achievement';
import { HOSPITAL_NAME } from '../constants';

function AboutUs() {
  const theam = useTheme();
  return (
    <>
      <Box>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          About Us
        </h2>
        <Box sx={{ display: 'flex', width: '100vw' }}>
          <Box sx={{ width: '50%', marginTop: '3rem' }}>
            <Box
              style={{
                color: theam.palette.primary.light,
                marginLeft: '130px',
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
                marginLeft: '130px',
                fontSize: '1rem',
              }}
            >
              We have been at the forefront of dental healthcare, committed to providing world-class
              dental treatments in a friendly and most comfortable environment. We offer the best in
              comprehensive dental services and recognize the importance of each patient's unique
              needs and concerns while staying committed to providing quality and individualized
              dental services
            </p>
            <Box sx={{ display: 'flex', marginLeft: '130px' }}>
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
                    <img src="medical-symbol.png" />
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
                    <img src="dentist-chair.png" />
                  </Box>
                  <Box sx={{ marginLeft: '15px' }}>
                    <Typography sx={{ fontSize: '2rem', fontWeight: '500' }}>1800+</Typography>
                    <Typography>Dental services</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '50%', overflow: 'hidden' }}>
            <img src="/bhavnagar-clinic.jpg" style={{ height: '600px', padding: '30px' }} />
          </Box>
        </Box>
        <Typography fontWeight={700} fontSize={'2rem'} marginLeft={'130px'} marginBottom={'20px'}>
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
