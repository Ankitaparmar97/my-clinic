// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// // import Typography from '@mui/material/Typography';

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <img src="implant.jpg"></img>
//     </CardContent>
//   </React.Fragment>
// );

// function OutlinedCard() {
//   return (
//     <Box sx={{ display: 'flex', marginLeft: '130px'}}>
//       <Card sx={{ width: '250px', height: '300px', margin: '20px' }}>{card}</Card>
//       <Card sx={{ width: '250px', height: '300px', margin: '20px' }}>{card}</Card>
//       <Card sx={{ width: '250px', height: '300px', margin: '20px' }}>{card}</Card>
//       <Card sx={{ width: '250px', height: '300px', margin: '20px' }}>{card}</Card>
//     </Box>
//   );
// }

// export default OutlinedCard;

// import * as React from 'react';
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
        boxShadow: '0 15px 35px rgba(52, 119, 207, 0.2)',
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
