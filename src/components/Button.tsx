import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { CONTACT } from '../constants';
//#TODO: make generalised button for all buttons on website

const PhoneCall = () => {
  const theam = useTheme();
  return (
    <Stack spacing={2} direction="row">
      <a href={`tel:${CONTACT.Mobile}`}>
        <Button
          sx={{
            backgroundColor: theam.palette.primary.light,
            color: theam.palette.primary.contrastText,
          }}
        >
          Book Appointment
        </Button>
      </a>
    </Stack>
  );
};

export default PhoneCall;
