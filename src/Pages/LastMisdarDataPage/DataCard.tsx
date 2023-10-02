import { Box, CircularProgress, Divider, IconButton, Typography } from "@mui/material"
import CustomPaper from "../../General/Reusables/CustomPaper"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { useState } from "react";

const DataCard = () => {
    const [isExpanded, setExpanded] = useState(false);
    return (
        <CustomPaper
        onClick={() => setExpanded(prev => !prev)}
        sx={{
            width: "15rem",
            bgcolor: "primary.dark", 
            padding: 1.2,
            // display:"flex", 
            // flexDirection: "column", 
            // alignItems: "center", 
            // textAlign: "center",
            // gap: 2.6,
            }}>
            <IconButton sx={{alignSelf: "end", color: "black", opacity: 0.2, bgcolor: "white",}}><NorthWestIcon /></IconButton>
            <Typography variant="h5" fontWeight="bold">אחזקות חוץ</Typography>
            <Box position="relative">
                <Box sx={{position: "absolute", height: "6rem", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                    <Typography variant="h5" fontWeight="bold">50%</Typography>
                    <Typography variant="h6">10/20</Typography>
                </Box>
                <CircularProgress variant="determinate" size="9rem" color="success" value={12} thickness={2.5}/>
            </Box>
            
            {isExpanded && 
            <Box>
                <Divider />
                <Typography>additional data and progress bars</Typography>
            </Box>
             }
        </CustomPaper>
    );

};

export default DataCard;