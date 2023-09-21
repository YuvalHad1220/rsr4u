import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import BugReportIcon from '@mui/icons-material/BugReport';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import TableChartIcon from '@mui/icons-material/TableChart';
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import { Outlet } from 'react-router';

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
    const theme = useTheme();

    const isBigScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const [open, setOpen] = useState(isBigScreen);

    useEffect(() => {
        setOpen(isBigScreen);
    }, [isBigScreen])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const adminOptions = [{text: "דיבאגר", icon: <BugReportIcon color='secondary'/>}];

  const rasarOptions = [{text: "הוסף משתמש", icon: <PersonAddAltIcon color='primary'/>}, {text: "הרשאות משתמש", icon: <AdminPanelSettingsIcon color='primary'/>}];
  
  const rasarAsisstantOptions = [{text: "מסך הבית", icon: <HomeIcon color='primary' />}, {text: "הוסף מסדר", icon: <DomainAddIcon color='primary'/> }, {text: "הורדת אקסל מסדר", icon: <TableChartIcon color='primary'/>}];

  const rasarWorkerOptions = [{text: "עדכון והפצת תאריך מסדר", icon: <UpdateIcon color='primary'/>}];

  const loggedInOptions = [{text: "התנתקות", icon: <LogoutIcon color='primary'/>}, {text: "אודות", icon: <InfoIcon color='primary'/>}];

  const optionsList = [adminOptions, rasarAsisstantOptions, rasarWorkerOptions, rasarOptions, loggedInOptions]; // will be determined by permissions system

  const OptionsListComp = optionsList.map((options, i) => {
      return (
      <Box key={i}>
      {options.map(option => {
          return (
              <ListItem key={option.text} disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                      {option.icon}
                  </ListItemIcon>
                  <ListItemText primary={option.text}/>
              </ListItemButton>
          </ListItem>
          )
      })}
      <Divider/>
      </Box>
  )});


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="פתיחת סייד באר"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
            </IconButton>
        </DrawerHeader>
        <List>
          {OptionsListComp}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
