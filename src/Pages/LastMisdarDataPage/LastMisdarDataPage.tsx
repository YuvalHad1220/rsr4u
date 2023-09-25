import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import NorthWestIcon from '@mui/icons-material/NorthWest';
const LastMisdarDataPage = () => {
    return (
        <CustomPaper sx={{height: "100%"}}>
           <Typography>שעוני מידע על המסדר האחרון. לחיצה על כל שעון בפינה תוריד דרגה (עד רמת מדור). השאלה מה יהיה בלחיצה על האחוזים עצמם</Typography>
            <CustomPaper sx={{width: "14rem", bgcolor: "primary.dark", display:"flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
                <IconButton sx={{alignSelf: "end", bgcolor: "background.default", color: "text.default"}}><NorthWestIcon /></IconButton>
                <Typography variant="h6" fontWeight="bold">אחזקות חוץ</Typography>
                <Box position="relative">
                    <Box sx={{position: "absolute", height: "6rem", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <Typography variant="h5" fontWeight="bold">50%</Typography>
                        <Typography variant="h6" fontWeight="bold">10/20</Typography>
                    </Box>
                    <CircularProgress variant="determinate" size="9rem" color="success" value={90} thickness={2.5}/>
                </Box>
            </CustomPaper>
        </CustomPaper>
    );
};

export default LastMisdarDataPage;