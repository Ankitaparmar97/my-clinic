import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddCallIcon from '@mui/icons-material/AddCall';
import { useTheme } from '@mui/material/styles';

export default function ButtonAppBar() {
  const theam = useTheme();
  const phoneNumber = '919426549472';
  const message = 'Hello!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instagramLink = 'https://www.instagram.com/tanvi_malhara/';
  const facebookLink = 'https://www.facebook.com/your_username_or_page';
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '40px',
        }}
      >
        <Box sx={{ display: 'flex', marginLeft: '70px' }}>
          <AddLocationIcon sx={{ color: theam.palette.primary.light }}></AddLocationIcon>
          <Typography sx={{ fontSize: '12px' }}>
            C27,Bhavnagar dental clinic, Kaliyabid, Bhavnagar-364001
          </Typography>
        </Box>
        <Box sx={{ marginRight: '40px' }}>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FacebookOutlinedIcon
              sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
            ></FacebookOutlinedIcon>
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <InstagramIcon
              sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
            ></InstagramIcon>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon
              sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
            ></WhatsAppIcon>
          </a>
          <a href={`tel:${phoneNumber}`}>
            <AddCallIcon
              sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
            ></AddCallIcon>
          </a>
        </Box>
      </Box>
    </>
  );
}
