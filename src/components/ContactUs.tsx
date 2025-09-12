import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT, HOSPITAL_NAME } from '../constants';

export default function BasicTextFields() {
  const theam = useTheme();

  return (
    <>
      <Box sx={{ width: '100vw' }}>
        <h2 style={{ display: 'flex', justifyContent: 'center', fontWeight: '1000' }}>
          Contact Us
        </h2>
        <Box
          sx={{
            position: 'relative',
            paddingBottom: '30%',
            height: 0,
            overflow: 'hidden',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <iframe
            title={HOSPITAL_NAME}
            src={CONTACT.AddressLink}
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
          />
        </Box>
        <h2 style={{ marginLeft: '10%', fontWeight: '800' }}>Drop Us Message for Any Query</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
            // width: '100vw',
            marginLeft: '10%',
            marginRight: '10%',
            // display: 'flex',
            // justifyContent: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <form action={`https://formsubmit.co/${CONTACT.Email}`} method="POST">
              <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  sx={{
                    width: '50%',
                    marginRight: '10px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  required
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  sx={{
                    width: '50%',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  sx={{
                    width: '50%',
                    marginRight: '10px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  required
                />
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  sx={{
                    width: '50%',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
              </Box>

              <Box sx={{ marginBottom: '15px' }}>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  sx={{
                    width: '100%',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
              </Box>

              {/* FormSubmit Anti-Spam Hidden Input (optional but recommended) */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="http://localhost:5174/ContactUs" />

              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: theam.palette.primary.light,
                    color: theam.palette.primary.contrastText,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
            <Box>
              <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: theam.palette.primary.light,
                  }}
                >
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
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: theam.palette.primary.light,
                  }}
                >
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
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2);',
                    backgroundColor: theam.palette.primary.light,
                  }}
                >
                  <AddLocationIcon />
                </Box>
                <Box sx={{ marginLeft: '15px' }}>
                  <Typography sx={{ fontWeight: '700' }}>Address</Typography>
                  <Typography
                    style={{ textDecoration: 'none', color: theam.palette.primary.light }}
                  >
                    {CONTACT.Address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
