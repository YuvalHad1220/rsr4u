import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const SetMisdar = () => {
    return (
        <CustomPaper sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <Typography>כאן נציג אם אנחנו נרצה לשנות תאריך מסדר: זה יהיה טופס שבו יהיה ניתן להזין תאריך ושעה, ועל מנת לשנות את התאריך יופיע השם החדש</Typography>

            <Box component="form" sx={{display: "flex", flexDirection: "column", gap: 3}}>
            <TextField label="יום בשבוע" />
            <TextField label="שעה ביום" />
            <TextField label="הערות קשורות" />
            <FormControlLabel 
            control={<Checkbox />}
            label="האם לתזמן את המסדר כיום קבוע בשבוע"
            />
            </Box>
            <Typography>שים לב: בעת תזמון מסדר כקבוע בשבוע, ההערות המוזנות יהיו תקפות אך ורק למסדר הקרוב, כלומר: ההערות יהיו תקפות חד פעמית למסדר הקרוב</Typography>
            <Box sx={{alignSelf: "end"}}>
                    <Button variant="outlined">איפוס</Button>
                    <Button variant="contained">שלח</Button>
            </Box>

        </CustomPaper>
    );
};

export default SetMisdar;