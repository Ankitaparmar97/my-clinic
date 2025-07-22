import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main, height: '100px' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '40px',
            height: '100%',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>
              <img src="header-teeth.png" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              BHAVNAGAR DENTAL CLINIC AND IMPLANT CENTER
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
