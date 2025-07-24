import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';

export default function ActionAreaCard() {
  const theam = useTheme();
  return (
    <Card>
      <div style={{ display: 'flex' }}>
        <CardActionArea>
          <CardMedia component="img" image="implant.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dental Implant
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              A dental implant is a surgical component that interfaces with the bone of the jaw or
              skull to support a dental prosthesis such as a crown, bridge, denture, or facial
              prosthesis or to act as an orthodontic anchor
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardMedia component="img" image="l-teeth.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dental Bridge Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary }}>
              A dental bridge permanently replaces missing teeth with false teeth. The bridge is
              attached to the teeth on either side of the gap. Bridges are usually made of porcelain
              or metal, a mixture of the 2, or zirconia.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardMedia component="img" image="root-canal.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Root Canal Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary  }}>
              Root canal is a treatment to repair and save a badly damaged or infected tooth instead
              of removing it. The term "root canal" comes from cleaning of the canals inside a
              tooth's root. Decades ago,
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardMedia component="img" image="child-dental.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Child Dental Treatment
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary  }}>
              Every child preventive dental treatment to children. Additionally, we can also help
              your child to get rid of bad habits like bruxism, lip sucking, thumb sucking, tongue
              thrusting, and more.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardMedia component="img" image="denture.jpg" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Denture
            </Typography>
            <Typography variant="body2" sx={{ color: theam.palette.text.primary  }}>
              We offer advanced denture solutions to suit all varieties of requirements. From
              removable partial denture in Gandhinagar to complete denture, we offer a plethora of
              solutions to match your varying needs.
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
    </Card>
  );
}
