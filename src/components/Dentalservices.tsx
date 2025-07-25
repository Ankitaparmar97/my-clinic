import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import Button from './Button';

export default function ActionAreaCard() {
  const theam = useTheme();
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <div style={{ display: 'flex' }}>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="implant.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dental Implant
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              A dental implant is a surgical component that interfaces with the bone of the jaw or
              skull to support a dental prosthesis such as a crown, bridge, denture, or facial
              prosthesis or to act as an orthodontic anchor
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="l-teeth.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dental Bridge Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              A dental bridge permanently replaces missing teeth with false teeth. The bridge is
              attached to the teeth on either side of the gap. Bridges are usually made of porcelain
              or metal, a mixture of the 2, or zirconia.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="root-canal.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Root Canal Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Root canal is a treatment to repair and save a badly damaged or infected tooth instead
              of removing it. The term "root canal" comes from cleaning of the canals inside a
              tooth's root. Decades ago,
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
      </div>
      <div style={{ display: 'flex' }}>
        <CardActionArea
          sx={{
            margin: '20px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '20px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
        <CardActionArea
          sx={{
            margin: '10px',
            boxShadow: '0 15px 35px hsla(202, 74.00%, 71.40%, 0.20);',
            borderBottom: '1px solid #06a3da',
            borderRadius: '10px 10px 10px 10px',
            '&:hover': {
              backgroundColor: '#06a3da', // light blue background
              transform: 'scale(1.02)', // slight zoom
              boxShadow: '0 20px 40px hsla(202, 74%, 71%, 0.4)', // deeper shadow
              borderBottom: '2px solid #0d487c', // darker blue border
            },
          }}
        >
          <CardMedia
            component="img"
            image="child-dental.jpg"
            alt="green iguana"
            sx={{ borderRadius: '10px 10px 0px 0px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
            <Button />
          </CardContent>
        </CardActionArea>
      </div>
    </div>
  );
}
