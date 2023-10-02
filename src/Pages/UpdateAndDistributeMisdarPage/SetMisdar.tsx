import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import LoadingButton from "../../General/Reusables/LoadingButton";

const SetMisdar = () => {
    return (
        <CustomPaper sx={{height: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box component="form" sx={{display: "flex", flexDirection: "column", gap: 1.5,}}>
            <TextField label="יום בשבוע" />
            <TextField label="שעה ביום" />
            <TextField label="הערות קשורות" />
            <FormControlLabel 
            control={<Checkbox />}
            label="האם לתזמן את המסדר כיום קבוע בשבוע"
            />
            <Typography>שים לב: בעת תזמון מסדר כקבוע בשבוע, ההערות המוזנות יהיו תקפות אך ורק למסדר הקרוב, כלומר: ההערות יהיו תקפות חד פעמית למסדר הקרוב</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "end", gap: 1.5}}>
                    <LoadingButton loading={false} variant="outlined">איפוס</LoadingButton>
                    <LoadingButton loading={false} variant="contained">שלח</LoadingButton>
            </Box>

        </CustomPaper>
    );
};

export default SetMisdar;