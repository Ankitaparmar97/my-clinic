import * as React from 'react';
import {
  Tabs,
  Tab,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ResponsiveAppBar from './Header';

import Home from './HomePage';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import DentalServices from './Dentalservices';
import Button from './Button';
import ModeButton from './ModeButton';
import ScrollToTop from './ScrollToTop';

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  let currentPath = location.pathname;

  if (currentPath.startsWith('/Dentalservices')) {
    currentPath = '/Dentalservices';
  }

  const [, setValue] = React.useState(location.pathname);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // =========================
  // DESKTOP DROPDOWN STATE
  // =========================
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  // =========================
  // MOBILE DRAWER
  // =========================
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // MOBILE DROPDOWN STATE
  const [openServices, setOpenServices] = React.useState(false);

  const toggleServices = () => {
    setOpenServices(!openServices);
  };

  return (
    <>
      {/* HEADER */}
      <ResponsiveAppBar toggleDrawer={toggleDrawer} />

      {/* NAVBAR */}
      <Box
        sx={{
          width: '100%',
          mt: { xs: '7.1875rem', sm: '7.8125rem', md: '10rem' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 16,
        }}
      >
        {/* DESKTOP */}
        {!isMobile && (
          <>
            <Tabs value={currentPath} onChange={handleChange}>
              <Tab value="/" label="Home" component={NavLink} to="/" style={{ paddingLeft: 0 }} />

              <Tab value="/AboutUs" label="About Us" component={NavLink} to="/AboutUs" />

              {/* DROPDOWN TAB */}
              <Tab
                value="/Dentalservices"
                onMouseEnter={handleHover}
                label={
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    Dental Services
                    <ExpandMoreIcon
                      style={{
                        marginLeft: 4,
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s',
                      }}
                    />
                  </span>
                }
              />

              <Tab value="/Gallery" label="Gallery" component={NavLink} to="/Gallery" />

              <Tab value="/ContactUs" label="Contact Us" component={NavLink} to="/ContactUs" />
            </Tabs>

            {/* RIGHT SIDE */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <ModeButton />
              <Button />
            </Box>
          </>
        )}
      </Box>

      {/* DESKTOP DROPDOWN MENU */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: () => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          },
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#bridge-treatment"
          onClick={handleClose}
        >
          Dental Bridge Treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#implants"
          onClick={handleClose}
        >
          Dental Implants
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#teeth-cleaning"
          onClick={handleClose}
        >
          Teeth Cleaning
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#root-canal"
          onClick={handleClose}
        >
          Root Canal Treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#child-treatment"
          onClick={handleClose}
        >
          Child Teeth Treatment
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#smile-designing"
          onClick={handleClose}
        >
          Smile designing
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#denture"
          onClick={handleClose}
        >
          Denture
        </MenuItem>
        <MenuItem
          sx={{ backgroundColor: theme.palette.primary.light }}
          component={NavLink}
          to="/Dentalservices#wth"
          onClick={handleClose}
        >
          Wisdom Tooth Removal
        </MenuItem>
      </Menu>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* MENU */}
          <List>
            <ListItemButton component={NavLink} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton component={NavLink} to="/AboutUs" onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItemButton>

            {/* MOBILE DROPDOWN */}
            <ListItemButton onClick={toggleServices}>
              <ListItemText primary="Dental Services" />

              <ExpandMoreIcon
                sx={{
                  transform: openServices ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }}
              />
            </ListItemButton>

            {openServices && (
              <Box sx={{ pl: 2 }}>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#bridge-treatment"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Dental Bridge Treatment" />
                </ListItemButton>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#implants"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Dental Implants" />
                </ListItemButton>

                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#teeth-cleaning"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Teeth Cleaning" />
                </ListItemButton>

                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#root-canal"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Root Canal" />
                </ListItemButton>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#child-treatment"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Child teeth treatment" />
                </ListItemButton>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#smile-designing"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Smile designing" />
                </ListItemButton>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#denture"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Denture" />
                </ListItemButton>
                <ListItemButton
                  component={NavLink}
                  to="/Dentalservices#wth"
                  onClick={toggleDrawer(false)}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <ListItemText primary="Wisdom Tooth Removal" />
                </ListItemButton>
              </Box>
            )}

            <ListItemButton component={NavLink} to="/Gallery" onClick={toggleDrawer(false)}>
              <ListItemText primary="Gallery" />
            </ListItemButton>

            <ListItemButton component={NavLink} to="/ContactUs" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </List>

          {/* BOTTOM BUTTONS */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              p: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <ModeButton />
            <Button />
          </Box>
        </Box>
      </Drawer>

      {/* ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dentalservices" element={<DentalServices />} />
        <Route path="/Dentalservices/implants" element={<DentalServices />} />
        <Route path="/Dentalservices/whitening" element={<DentalServices />} />
        <Route path="/Dentalservices/root-canal" element={<DentalServices />} />
        <Route path="/Dentalservices/child-treatment" element={<DentalServices />} />
        <Route path="/Dentalservices/denture" element={<DentalServices />} />
        <Route path="/Dentalservices/smile-designing" element={<DentalServices />} />
        <Route path="/Dentalservices/wth" element={<DentalServices />} />
        <Route path="/Dentalservices/bridge-treatment" element={<DentalServices />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}
