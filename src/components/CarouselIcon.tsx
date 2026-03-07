import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Button from './Button';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { HOSPITAL_NAME } from '../constants';

function Example() {
  const theam = useTheme();
  const items: CarouselItem[] = [
    {
      name: HOSPITAL_NAME,
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l-denture.jpg',
    },
    {
      name: 'Implant Center',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l-homeimage.jpg',
    },
    {
      name: 'Root Canal',
      description:
        'A root canal is the normal pit inside the foundations of the tooth. A root canal treatment is the treatment of the tooth root.This procedure helps to save a badly infected or damaged tooth from extraction',
      image: 'smile.jpg',
    },
    {
      name: 'Teeth Cleaning',
      description:
        'Teeth cleaning is a standard dental methodology. We prompt our patients for a customary teeth cleaning like clockwork to 1 year. Other than that, anybody with a stained teeth, awful breath or draining gums ought to quickly complete a teeth cleaning.',
      image: 'l-teeth.jpg',
    },
  ];

  return (
    <Carousel
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: theam.palette.background.paper,
          color: theam.palette.text.primary,
        },
      }}
      swipe={false}
      fullHeightHover={false}
      cycleNavigation={true}
    >
      {items.map((item: CarouselItem) => (
        <Item key={item.image} item={item} />
      ))}
    </Carousel>
  );
}

type CarouselItem = {
  name: string;
  description: string;
  image: string;
};

function Item({ item }: { item: CarouselItem }) {
  const theam = useTheme();
  return (
    <Paper
      style={{
        paddingLeft: 130,
        // marginLeft: '8.125rem',
        // marginRight: '8.125rem',
        textAlign: 'center',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 240px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        borderRadius: 8,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          textAlign: 'left',
          color: theam.palette.primary.main,
          marginTop: '0px',
          marginBottom: '0px',
        }}
      >
        {item.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          textAlign: 'left',
          width: '40%',
          color: theam.palette.text.primary,
        }}
      >
        {item.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button />
      </motion.div>
    </Paper>
  );
}

export default Example;
