import { Box, CircularProgress, Divider, IconButton, Typography } from "@mui/material"
import CustomPaper from "../../General/Reusables/CustomPaper"
import NorthWestIcon from '@mui/icons-material/NorthWest';
import React, { useState } from "react";
import { stringToRGBA } from "../../assets/globalFunctions";

interface datacardInterface {
    unitName: string
}
const DataCard: React.FC<datacardInterface> = ({unitName}) => {
    const [isExpanded, setExpanded] = useState(false);
    const InnerCard = () => (
        <>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <Typography variant="h5" fontWeight="bold">{unitName}</Typography>
                <IconButton sx={{color: "black", opacity: 0.2, bgcolor: "white",}}><NorthWestIcon /></IconButton>
            </Box>

            <Box position="relative" sx={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => setExpanded(prev => !prev)}>
                <Box sx={{position: "absolute", height: "6rem", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                    <Typography variant="h5" fontWeight="bold">50%</Typography>
                    <Typography variant="h6">10/20</Typography>
                </Box>
                <CircularProgress variant="determinate" size="9rem" color="success" value={100} thickness={2.5}/>
            </Box>
        </>

    );

    const ExpansionCard = () => (
        <>
            <Divider />
            <Box>
                <Typography>
                    נוכחות: 12\13
                </Typography>
                <Typography>
                    הערות משמעת
                </Typography>
                <Typography>
                    הערות לבוש
                </Typography>
            </Box>
        </>
    );

    const {backgroundColor: bgcolor} = stringToRGBA(unitName);

    return (
        <CustomPaper
        sx={{bgcolor: bgcolor, display: "flex", flexDirection: "column", gap: 2}}>
            <InnerCard />
            {isExpanded && <ExpansionCard />}
        </CustomPaper>
    );

};

export default DataCard;