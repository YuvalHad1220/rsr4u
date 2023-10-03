import { useState } from "react";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { Box, Checkbox, Typography } from "@mui/material";
import LoadingButton from "../../General/Reusables/LoadingButton";


const Whatsapp = () => {
    const [wasMessageSent, setMessageSent] = useState(false); // will be updated from db

    const SentMessageBox = () => (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Typography variant="h4" fontWeight="bold">הודעה נשלחה</Typography>
            <Box alignSelf="center">
                <Typography variant="h6"> על ידי: נגד משמעת</Typography>
                <Typography variant="h6">בתאריך: 29.1.23</Typography>
                <Typography variant="h6">בשעה: 12:34</Typography>
            </Box>
        </Box>
    );

    const NotSentMessageBox = () => (
        <Box sx={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <Typography>הודעה לא נשלחה. אנא שלח הודעה על פרטי המסדר המופיע בפינה הימנית</Typography>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "background.default", borderRadius: 10, paddingY: 2, paddingX: 2, maxWidth: "80%"}}>
                    <Checkbox color="primary" sx={{padding: 0, mr: 2}}/>
                    <Typography>אני מאשר ששלחתי הודעה על המסדר בתאריך 12.3.23 בווצאפ</Typography>   
                </Box>
                    <LoadingButton loading={false} variant="contained">שלח הודעת ווצאפ</LoadingButton>
        </Box>
    );


    return (
        <CustomPaper sx={{height: "50%",}}>
            {wasMessageSent ? <SentMessageBox /> : <NotSentMessageBox />}
        </CustomPaper>
    );
};

export default Whatsapp;