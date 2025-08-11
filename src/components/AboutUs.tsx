import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Bread from './Breadcrumb';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Achieve from './Achievement';
function AboutUs() {
  const theam = useTheme();
  return (
    <>
      <Box>
        <Box>
          <Bread />
        </Box>
        <Box sx={{ display: 'flex', width: '100vw' }}>
          <Box sx={{ width: '50%', marginTop: '3rem' }}>
            <Box
              style={{
                color: theam.palette.primary.light,
                // display: 'flex',
                marginLeft: '130px',
                fontSize: '1.5rem',
                fontWeight: '700',
                // width: '50vw',
              }}
            >
              BHAVNAGAR DENTAL AND IMPLANT HOSPITAL
            </Box>
            <p
              style={{
                fontFamily: 'poppins, sans-serif',
                color: theam.palette.text.primary,
                marginLeft: '130px',
                fontSize: '1rem',
              }}
            >
              The morning sun filtered through the tall pine trees, casting golden patterns on the
              forest floor. Birds chirped overhead as a soft breeze rustled the leaves, creating a
              gentle, rhythmic sound. A narrow path wound its way through the woods, inviting anyone
              passing by to explore its quiet mysteries. The scent of damp earth and wildflowers
              filled the air, grounding every step in natures calm. It was one of those rare moments
              where time seemed to pause, allowing the world to simply breathe.
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
