import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

function CardWithImage({ src }: { src: string }) {
  const theam = useTheme();
  return (
    <Card
      sx={{
        margin: '10px',
        backgroundColor: theam.palette.primary.main,
        boxShadow: '0 15px 35px rgba(15, 70, 143, 0.2)',
      }}
    >
      <CardContent>
        <img src={src} alt="Card" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </CardContent>
    </Card>
  );
}

export default function OutlinedCard() {
  return (
    <Box sx={{ display: 'flex', marginLeft: '130px', marginRight: '130px' }}>
      <CardWithImage src="achieve-image1.jpg" />
      <CardWithImage src="achieve-image2.jpg" />
      <CardWithImage src="achieve-image3.jpg" />
    </Box>
  );
}
