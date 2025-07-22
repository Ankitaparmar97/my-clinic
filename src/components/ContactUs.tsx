import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

export default function BasicTextFields() {
  const theam = useTheme();
  const phoneNumber = '+919998086406';
  const email = 'ankitaparmar@gmail.com';

  return (
    <>
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
