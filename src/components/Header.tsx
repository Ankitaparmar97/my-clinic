import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { HOSPITAL_NAME } from '../constants';

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.palette.primary.main, height: '100px', top: '40px' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '110px',
            height: '100%',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>
              <img src="/header-teeth.png" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {HOSPITAL_NAME.toUpperCase()}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
