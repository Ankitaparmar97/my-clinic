import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { NavLink, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
// import Home from './HomePage';
import { Tab, Tabs } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Blog from './Blog';

export default function CustomSeparator(props) {
  const theam = useTheme();
  const [value, setValue] = React.useState('one');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const breadcrumbs = [
    //  eslint-disable-next-line react-x/no-missing-key
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '300px',
        backgroundImage: 'url(l-denture.jpg)',
      }}
    >
      <Tabs value={value} onChange={handleChange} textColor="primary">
        <Tab value="one" label="Blog" component={NavLink} to="/Blog" />
      </Tabs>
      <Typography sx={{ color: 'text.primary' }}>Breadcrumb</Typography>
    </Box>,
  ];
  <Routes>
    <Route path="/Blog" element={<Blog />} />
  </Routes>;

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
