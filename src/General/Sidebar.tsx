import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import BugReportIcon from '@mui/icons-material/BugReport';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import TableChartIcon from '@mui/icons-material/TableChart';
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const drawerWidth = "20rem";


const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const adminOptions = [{text: "דיבאגר", icon: <BugReportIcon color='secondary'/>}];

    const rasarOptions = [{text: "הוסף משתמש", icon: <PersonAddAltIcon color='primary'/>}, {text: "הרשאות משתמש", icon: <AdminPanelSettingsIcon color='primary'/>}];
    
    const rasarAsisstantOptions = [{text: "הוסף מסדר", icon: <DomainAddIcon color='primary'/> }, {text: "הורדת אקסל מסדר", icon: <TableChartIcon color='primary'/>}];

    const rasarWorkerOptions = [{text: "עדכון והפצת תאריך מסדר", icon: <UpdateIcon color='primary'/>}];

    const loggedInOptions = [{text: "התנתקות", icon: <LogoutIcon color='primary'/>}, {text: "אודות", icon: <InfoIcon color='primary'/>}];

    const optionsList = [adminOptions, rasarAsisstantOptions, rasarWorkerOptions, rasarOptions, loggedInOptions]; // will be determined by permissions system

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const OptionsListComp = optionsList.map((options, i) => {
        return (
        <Box key={i}>
        <Divider/>
        {options.map(option => {
            return (
                <ListItem key={option.text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    <ListItemText primary={option.text} />
                </ListItemButton>
            </ListItem>
            )
        })}
        </Box>
    )});
  
  
    const drawer = (
        <>
            <Toolbar />
            <List>
                {OptionsListComp}
            </List>
        </>

    );


    return (
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
          </Box>
        </Box>
      );
}



export default Sidebar;