import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
//#TODO: send mail / message on submit, 
//#TODO: add icon for mail, phone and location
//#TODO: remove border and add shadow of form


export default function BasicTextFields() {
  const theam = useTheme();
  const phoneNumber = '+919998086406';
  const email = 'ankitaparmar@gmail.com';

  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: '30%',
          height: 0,
          overflow: 'hidden',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <iframe
          title="Bhavnagar Dental and Implant Hospital"
          src="https://maps.google.com/maps?q=Bhavnagar%20dental%20and%20implant%20hospital%20Lakhubha%20Hall%20Road%2C%20opposite%20Om%20Plaza%2C%20near%20Ram%20Mantra%20Mandir%2C%20Ramnagar%2C%20Kaliyabid%2C%20Bhavnagar%2C%20Gujarat%20364002&z=14&output=embed"
          frameBorder="0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
      {/* </div> */}
      <h2 style={{ display: 'flex', justifyContent: 'center', fontWeight: '700' }}>Contact Us</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <Box sx={{ display: 'flex', marginBottom: '15px' }}>
            <TextField
              id="outlined-basic"
              label="Name"
              style={{ width: '50%', marginRight: '10px' }}
            />
            <TextField id="filled-basic" label="Email" style={{ width: '50%' }} />
          </Box>
          <Box sx={{ display: 'flex', marginBottom: '15px' }}>
            <TextField
              id="filled-basic"
              label="Phone"
              style={{ width: '50%', marginRight: '10px' }}
            />
            <TextField id="filled-basic" label="Address" style={{ width: '50%' }} />
          </Box>
          <Box sx={{ marginBottom: '15px' }}>
            <TextField id="filled-basic" label="Messege" style={{ width: '100%' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <Button
              sx={{
                border: '.5px solid',
                borderColor: theam.palette.text.primary,
                backgroundColor: theam.palette.primary.light,
              }}
            >
              Send Messege
            </Button>
          </Box>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
            Contact Us by Phone Number or Email Address
          </Typography>
          <p
            style={{ color: theam.palette.text.primary, display: 'flex', justifyContent: 'center' }}
          >
            <strong>Phone Number:</strong>
            <a
              href={`tel:${phoneNumber}`}
              style={{ textDecoration: 'none', color: theam.palette.primary.light }}
            >
              9998086406
            </a>
          </p>
          <p
            style={{ color: theam.palette.text.primary, display: 'flex', justifyContent: 'center' }}
          >
            <strong>Email:</strong>
            <a
              href={`mailto:${email}`}
              style={{ textDecoration: 'none', color: theam.palette.primary.light }}
            >
              ankitaparmar@gmail.com
            </a>
          </p>
          <p
            style={{ color: theam.palette.text.primary, display: 'flex', justifyContent: 'center' }}
          >
            <strong>Address:</strong>
            <Typography>C20,Bhavnagar dental clinic, Kaliyabid, Bhavnagar-364001</Typography>
          </p>
        </Box>
      </Box>
    </>
  );
}
