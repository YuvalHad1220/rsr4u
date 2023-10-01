import { Box, Divider, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const OwnRole = () => {
    return (
    <CustomPaper sx={{height: "15%", display: "flex",justifyContent: "center", alignItems: "center", }}>
    <Box sx={{display: "flex", gap: 1.5, justifyContent: "center", alignItems: "center", height: "35%"}}>
        <Typography variant="h6" >מקטנא"ר</Typography>
        <Divider orientation="vertical" />
        <Typography variant="h6">יובל הדר</Typography>
        <Divider orientation="vertical" />
        <Typography variant="h6">אדמין</Typography>
        <Divider orientation="vertical" />
        <Typography variant="h6">9135583</Typography>
        <Divider orientation="vertical" />
        <Typography variant="h6">רב"ט</Typography>
    </Box>
    </CustomPaper>
    );
};

export default OwnRole;