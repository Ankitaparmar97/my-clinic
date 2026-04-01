import { AppBar, Box, Container, IconButton, Toolbar, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
interface HeaderProps {
  toggleDrawer: (open: boolean) => () => void;
}

export default function ResponsiveAppBar({ toggleDrawer }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar
        position="fixed"
        sx={{
          top: { xs: '40px', sm: '45px', md: '2.5rem' }, // 🔥 match your top bar height
          height: { xs: '75px', sm: '80px', md: '7.5rem' }, // 🔥 smaller on mobile
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              px: { md: 13 },
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* LEFT SIDE */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Box
                component="img"
                src="/header-teeth.png"
                sx={{
                  maxHeight: { xs: '100px', md: '160px' },
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.2rem' },
                    lineHeight: 1.1,
                  }}
                >
                  BHAVNAGAR
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    fontSize: { xs: '0.5rem', sm: '0.85rem', md: '1rem' },
                    opacity: 0.9,
                  }}
                >
                  DENTAL & IMPLANT CLINIC
                </Typography>
              </Box>
            </Box>

            {/* RIGHT SIDE MOBILE MENU */}
            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ padding: '0' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
