// import { Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import AddLocationIcon from '@mui/icons-material/AddLocation';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import AddCallIcon from '@mui/icons-material/AddCall';
// import { useTheme } from '@mui/material/styles';
// import { CONTACT } from '../constants';

// export default function ButtonAppBar() {
//   const theam = useTheme();
//   const phoneNumber = '919426549472';
//   const message = 'Hello!';
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   const instagramLink = 'https://www.instagram.com/tanvi_malhara/';
//   const facebookLink = 'https://www.facebook.com/your_username_or_page';
//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           // flexWrap: 'wrap', // allow wrapping on small screens
//           // px: { xs: 1, sm: 2, md: 8 },
//           width: '100%',
//           height: '40px',
//           position: 'fixed',
//           backgroundColor: theam.palette.background.default,
//           zIndex: '1000',
//         }}
//       >
//         <Box sx={{ display: 'flex', marginLeft: '8.125rem' }}>
//           <AddLocationIcon
//             sx={{ color: theam.palette.primary.light, fontSize: '18px' }}
//           ></AddLocationIcon>
//           <Typography sx={{ fontSize: '12px' }}>{CONTACT.Address}</Typography>
//         </Box>
//         <Box sx={{ marginRight: '8.125rem', display: 'flex' }}>
//           <Box
//             sx={{
//               height: '30px',
//               width: '30px',
//               borderRadius: '50%',
//               backgroundColor: '#ffffff',
//             }}
//           >
//             <a
//               href={facebookLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <FacebookOutlinedIcon
//                 sx={{ color: theam.palette.primary.light, fontSize: '20px' }}
//               ></FacebookOutlinedIcon>
//             </a>
//           </Box>
//           <Box
//             sx={{
//               height: '30px',
//               width: '30px',
//               borderRadius: '50%',
//               backgroundColor: '#ffffff',
//               marginLeft: '.5rem',
//             }}
//           >
//             <a
//               href={instagramLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <InstagramIcon
//                 sx={{ color: theam.palette.primary.light, fontSize: '20px' }}
//               ></InstagramIcon>
//             </a>
//           </Box>
//           <Box
//             sx={{
//               height: '30px',
//               width: '30px',
//               borderRadius: '50%',
//               backgroundColor: '#ffffff',
//               marginLeft: '.5rem',
//             }}
//           >
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <WhatsAppIcon
//                 sx={{ color: theam.palette.primary.light, fontSize: '20px' }}
//               ></WhatsAppIcon>
//             </a>
//           </Box>
//           <Box
//             sx={{
//               height: '30px',
//               width: '30px',
//               borderRadius: '50%',
//               backgroundColor: '#ffffff',
//               marginLeft: '.5rem',
//             }}
//           >
//             <a
//               href={`tel:${phoneNumber}`}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <AddCallIcon
//                 sx={{ color: theam.palette.primary.light, fontSize: '20px' }}
//               ></AddCallIcon>
//             </a>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddCallIcon from '@mui/icons-material/AddCall';
import { useTheme } from '@mui/material/styles';
import { CONTACT } from '../constants';

export default function ButtonAppBar() {
  const theam = useTheme();
  const message = 'Hello!';
  const whatsappLink = `https://wa.me/${CONTACT.Mobile}?text=${encodeURIComponent(message)}`;
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
          height: '2.5rem', // 40px
          position: 'fixed',
          backgroundColor: theam.palette.background.default,
          zIndex: '1000',
        }}
      >
        <Box sx={{ display: 'flex', marginLeft: '8.125rem' }}>
          <AddLocationIcon
            sx={{ color: theam.palette.primary.light, fontSize: '1.125rem' }} // 18px
          />
          <Typography sx={{ fontSize: '0.75rem' }}>{CONTACT.Address}</Typography> {/* 12px */}
        </Box>

        <Box sx={{ marginRight: '8.125rem', display: 'flex' }}>
          <Box
            sx={{
              height: '1.875rem', // 30px
              width: '1.875rem', // 30px
              borderRadius: '50%',
              backgroundColor: '#ffffff',
            }}
          >
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <FacebookOutlinedIcon
                sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} // 20px
              />
            </a>
          </Box>

          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem', // 8px
            }}
          >
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <InstagramIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>

          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem',
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <WhatsAppIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>

          <Box
            sx={{
              height: '1.875rem',
              width: '1.875rem',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              marginLeft: '0.5rem',
            }}
          >
            <a
              href={`tel:${CONTACT.Mobile}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <AddCallIcon sx={{ color: theam.palette.primary.light, fontSize: '1.25rem' }} />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
