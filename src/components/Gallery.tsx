import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

function CardWithImage({ src }: { src: string }) {
  return (
    <Card
      sx={{
        margin: '10px',
        boxShadow: '0 15px 35px rgba(15, 70, 143, 0.2)',
      }}
    >
      <CardContent>
        <Box
          component="img"
          src={src}
          alt="Card"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.2)', // zoom effect
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
export default function Gallery() {
  const theam = useTheme();
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: theam.palette.background.default }}>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          Our Gallery
        </h2>
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            marginLeft: '8.125rem',
            marginRight: '8.125rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          }}
        >
          <CardWithImage src="gallery-image1.jpg" />
          <CardWithImage src="gallery-image2.jpg" />
          <CardWithImage src="gallery-image3.jpg" />
          <CardWithImage src="gallery-image4.jpg" />
          <CardWithImage src="gallery-image5.jpg" />
          <CardWithImage src="gallery-image6.jpg" />
          <CardWithImage src="gallery-image7.jpg" />
          <CardWithImage src="gallery-image8.jpg" />
          <CardWithImage src="gallery-image9.jpg" />
          <CardWithImage src="gallery-image10.jpg" />
        </Box>
      </Box>
    </>
  );
}
