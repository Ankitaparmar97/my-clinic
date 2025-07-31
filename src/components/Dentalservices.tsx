import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
// import Button from './Button';
import { Box, Button } from '@mui/material';
import Bread from './Breadcrumb';
import { Link } from 'react-router-dom';

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
            title="Dental Implant"
            description="A dental embed is a screw produced using titanium which is set in the jaw at the site of the missing teeth. The material utilized for a dental embed is titanium since it is a bio-viable material. A biocompatible material doesn't make any bothering the gingiva. This screw goes about as the root part of the teeth. The screw is connected to the alveolar bone by methods for osseointegration"
          />
          <CardItem
            image="child-dental.jpg"
            title="Child teeth treatment"
            description="We treat babies, little children, youths, and youngsters to guarantee that your kids can appreciate great dental wellbeing all through the entirety of their early stages. This guarantees that as your kids' dental necessities start to change with age, our dental arrangements can be modified to meet them"
          />
          <CardItem
            image="child-dental.jpg"
            title="Root canal treatment"
            description="A root canal is the normal pit inside the foundations of the tooth. It comprises of pulp(nerves of the tooth). A root canal treatment is the treatment of the tooth root."
          />
          <CardItem
            image="child-dental.jpg"
            title="Smile designing"
            description="Woman with very low certainty while chatting with companions and family members in view of appalling teeth. Sure grin was planned with blend of Teeth cleaning, Dental Implants and Crowns, at Laxmi Dental Clinic"
          />
          <CardItem
            image="child-dental.jpg"
            title="Teeth cleaning"
            description="Teeth cleaning is a standard dental methodology. We prompt our patients for a customary teeth cleaning like clockwork to 1 year. Other than that, anybody with a stained teeth, awful breath or draining gums ought to quickly complete a teeth cleaning. On the off chance that you are confronting any of these conditions, it demonstrates that you need a teeth cleaning as ahead of schedule as could reasonably be expected."
          />
          <CardItem
            image="child-dental.jpg"
            title="Denture"
            description="A dental replacement is the most crude technique for trade for missing teeth. It is made of an acrylic plate on which counterfeit teeth is installed.There are essentially 2 sorts of false teeth: complete and fractional. A total dental replacement is for patients who don't have any teeth in his mouth, we call them edentulous."
          />
          <CardItem
            image="child-dental.jpg"
            title="Wisdom tooth removal"
            description="Insight tooth emission is now and again an excruciating occasion. Being the last tooth of the curve, now and then it needs more space for its emission. In those cases, the emission push will in general reason torment in that locale. We consider it an affected tooth. Here and there it additionally influences the neighboring tooth by pushing them and making pockets in the middle of which thusly causes contamination and rot of the tooth. In those cases."
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
