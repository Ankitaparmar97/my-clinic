import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CardWithImage({ src }: { src: string }) {
  return (
    <Card
      sx={{
        width: '250px',
        height: '300px',
        margin: '10px',
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
    <Box sx={{ display: 'flex', marginLeft: '130px' }}>
      <CardWithImage src="smile.jpg" />
      <CardWithImage src="smile.jpg" />
      <CardWithImage src="smile.jpg" />
      <CardWithImage src="smile.jpg" />
    </Box>
  );
}
