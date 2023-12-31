import { Box, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { useState } from "react";
import LoadingButton from "../../General/Reusables/LoadingButton";

const Army = () => {
    const [wasMessageSent, setMessageSent] = useState(false);

    const SentMessageBox = () => (
        <Box>
            <Typography>הודעה נשלחה</Typography>
            <Typography>על ידי: מערכת</Typography>
            <Typography>ביום שני בשעה 00:00</Typography>
        </Box>
    );

    const NotSentMessageBox = () => (
        <Box sx={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between"}}>
            <Typography>הודעה לא נשלחה. באפשרותך לשלוח הודעת מערכת (מומלץ) או לשלוח הודעת מערכת בצורה ידנית. שים לב שבמידה ואתה שולח הודעת מערכת ידנית, עליך לאשר את השליחה על מנת שהכפתור יעבוד</Typography>
            <Box sx={{display: "flex", justifyContent: "end", gap: 1.5}}>
                    <LoadingButton  loading={false} variant="outlined">שלח הודעה ידנית</LoadingButton>
                    <LoadingButton loading={false} variant="contained">שלח הודעת מערכת</LoadingButton>
            </Box>
            
        </Box>
    )
    return (
        <CustomPaper sx={{height: "50%"}}>
            {wasMessageSent ? <SentMessageBox /> : <NotSentMessageBox /> }
        </CustomPaper>
    );

};

export default Army;