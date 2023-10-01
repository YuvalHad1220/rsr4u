import { Box, Button, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { useState } from "react";

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
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Typography>הודעה לא נשלחה. באפשרותך לשלוח הודעת מערכת (מומלץ) או לשלוח הודעת מערכת בצורה ידנית. שים לב שבמידה ואתה שולח הודעת מערכת ידנית, עליך לאשר את השליחה על מנת שהכפתור יעבוד</Typography>
            <Box sx={{display: "flex", justifyContent: "end", width: "100%"}}>
                    <Button variant="outlined">שלח הודעה ידנית</Button>
                    <Button variant="contained" >שלח הודעת מערכת</Button>
            </Box>
        </Box>
    )
    return (
        <CustomPaper sx={{height: "100%"}}>
            {wasMessageSent ? <SentMessageBox /> : <NotSentMessageBox /> }
        </CustomPaper>
    );

};

export default Army;