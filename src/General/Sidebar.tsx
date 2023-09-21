import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import BugReportIcon from '@mui/icons-material/BugReport';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import TableChartIcon from '@mui/icons-material/TableChart';
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

const drawerWidth = "20rem";


const Sidebar = () => {

    const adminOptions = [{text: "דיבאגר", icon: <BugReportIcon color='secondary'/>}];

    const rasarOptions = [{text: "הוסף משתמש", icon: <PersonAddAltIcon color='primary'/>}, {text: "הרשאות משתמש", icon: <AdminPanelSettingsIcon color='primary'/>}];
    
    const rasarAsisstantOptions = [{text: "הוסף מסדר", icon: <DomainAddIcon color='primary'/> }, {text: "הורדת אקסל מסדר", icon: <TableChartIcon color='primary'/>}];

    const rasarWorkerOptions = [{text: "עדכון והפצת תאריך מסדר", icon: <UpdateIcon color='primary'/>}];

    const loggedInOptions = [{text: "התנתקות", icon: <LogoutIcon color='primary'/>}, {text: "אודות", icon: <InfoIcon color='primary'/>}];

    const optionsList = [adminOptions, rasarAsisstantOptions, rasarWorkerOptions, rasarOptions, loggedInOptions]; // will be determined by permissions system

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
                    <ListItemText primary={option.text}/>
                </ListItemButton>
            </ListItem>
            )
        })}
        </Box>
    )});
  

    return (
          <Box
            component="nav"
            aria-label="סרגל ניווט ראשי" >
            <Drawer variant="permanent" >
                <Toolbar />
                <List>
                    {OptionsListComp}
                </List>
            </Drawer>
          </Box>          
      );
}



export default Sidebar;