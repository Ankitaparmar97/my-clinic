import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import AddCallIcon from '@mui/icons-material/AddCall';

export default function ButtonAppBar() {
  const theam = useTheme();
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
        <Box sx={{ display: 'flex', marginLeft: '50px' }}>
          <AddLocationIcon sx={{ color: theam.palette.primary.light }}></AddLocationIcon>
          <Typography sx={{ fontSize: '12px' }}>
            C20,Bhavnagar dental hospital, Kaliyabid, Bhavnagar-364001
          </Typography>
        </Box>
        <Box sx={{ marginRight: '40px' }}>
          <FacebookOutlinedIcon
            sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
          ></FacebookOutlinedIcon>
          <InstagramIcon
            sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
          ></InstagramIcon>
          <WhatsAppIcon
            sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}
          ></WhatsAppIcon>
          <AddCallIcon sx={{ color: theam.palette.primary.light, marginLeft: '5px' }}></AddCallIcon>
        </Box>
      </Box>
    </>
  );
}
