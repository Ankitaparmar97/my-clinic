import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Button from './Button';
import { motion } from 'framer-motion';
// import { Calculate } from '@mui/icons-material';

function Example() {
  const items: CarouselItem[] = [
    {
      name: 'Bhavnagar Dental Hospital',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l_denture.jpg',
    },
    {
      name: 'Implant Center',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'homeImage.jpg',
    },
    {
      name: 'Root Canal',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'smile.jpg',
    },
    {
      name: 'Teeth whitining',
      description:
        'A dental implant is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown.',
      image: 'l_denture.jpg',
    },
  ];

  return (
    <Carousel
      animation="slide"
      // duration={500}
      // interval={3000}
      indicators={false}
      navButtonsAlwaysVisible={true}
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

// function Item({ item }: { item: CarouselItem }) {
//     return (
//         <Paper style={{ padding: 20, textAlign: 'center' }}>
//             <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: '100%', height: 'auto', borderRadius: 8 }}
//             />
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <Button variant="contained" color="primary">
//                 Check it out!
//             </Button>
//         </Paper>
//     );
// }

function Item({ item }: { item: CarouselItem }) {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0 });
  return (
    <Paper
      style={{
        padding: 20,
        textAlign: 'center',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 240px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white',
        position: 'relative',
        borderRadius: 8,
      }}
    >
      {/* <div
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    borderRadius: '0 0 8px 8px',
                }}
            > */}
      {/* <h2>{item.name}</h2>
                <p>{item.description}</p> */}
      {/* <Button variant="contained" color="primary">
                    Check it out!
                </Button> */}
      {/* </div> */}
      {/* <Fade in={true} timeout={1000}> */}
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
          color: 'green',
          marginTop: '0px',
          marginBottom: '0px',
        }}
      >
        {item.name}
      </motion.h1>
      {/* </Fade>  */}
      {/* <Fade in={true} timeout={1500}> */}
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
          color: 'black',
        }}
      >
        {item.description}
      </motion.p>
      {/* </Fade>    */}
      {/* <p style={
              {display:'flex',
               flexDirection:'row',
               justifyContent:'flex-start', 
               textAlign:'left'
              }
            }>
              "A dental implant is a surgical component that interfaces with<br/>
               the bone of the jaw or skull to support a dental prosthesis such as a crown." */}
      {/* </p> */}
      {/* <Fade in={true} timeout={2000}>  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button />
      </motion.div>
      {/* </Fade>      */}
    </Paper>
  );
}

export default Example;
