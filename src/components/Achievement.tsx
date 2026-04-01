import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

function CardWithImage({ src }: { src: string }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: {
          xs: '100%',   // mobile
          sm: '48%',    // tablet
          md: '30%',    // desktop
          display: 'flex',
          justifyContent: 'space-between'
        },
        // margin: '15px',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 15px 35px rgba(15, 70, 143, 0.2)',
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <img
          src={src}
          alt="Card"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </CardContent>
    </Card>
  );
}

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap', // 🔥 important
        justifyContent: 'center',
        gap: 6,
        mb: 1,
      }}
    >
      <CardWithImage src="achieve-image1.jpg" />
      <CardWithImage src="achieve-image2.jpg" />
      <CardWithImage src="achieve-image3.jpg" />
    </Box>
  );
}