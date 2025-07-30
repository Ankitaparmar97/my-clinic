import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
// import Button from './Button';
import { Box, Button } from '@mui/material';
import Bread from './Breadcrumb';
import { Link } from 'react-router-dom';
import { color } from 'framer-motion';

export default function ActionAreaCard() {
  return (
    <Box sx={{ width: '100vw' }}>
      <Box>
        <Bread />
      </Box>
      <Box sx={{ marginLeft: '10%', marginRight: '10%', marginTop: '3rem' }}>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Our Treatment Services
        </h2>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
          <CardItem
            image="child-dental.jpg"
            title="Dental Bridge Treatment"
            description="A dental bridge permanently replaces missing teeth with false teeth. The bridge is attached to the teeth on either side of the gap. Bridges are usually made of porcelain or metal, a mixture of the 2, or zirconia."
          />
        </Box>
      </Box>
    </Box>
  );
}
function CardItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  const theam = useTheme();
  return (
    <CardActionArea
      sx={{
        margin: '10px',
        boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
        borderBottom: '1px solid #06a3da',
        borderRadius: '10px 10px 10px 10px',
        '&:hover': {
          transform: 'scale(1.05)', // slight zoom
          boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
          borderBottom: '2px solid #0d487c', // darker blue border
        },
      }}
    >
      <CardMedia component="img" image={image} sx={{ borderRadius: '10px 10px 0px 0px' }} />
      <CardContent>
        <Box padding={'1rem'}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={theam.palette.text.primary}
            fontWeight={600}
            fontSize={'1rem'}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'theam.palette.text.secondary',
              fontSize: '.8rem',
              fontFamily: 'sans-serif',
              marginBottom: '1rem',
            }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/ContactUs"
            sx={{
              backgroundColor: theam.palette.primary.light,
              '&:hover': {
                color: 'white',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </CardContent>
    </CardActionArea>
  );
}
