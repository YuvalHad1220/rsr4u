import Groups2Icon from '@mui/icons-material/Groups2';
import StatusCard from "../../General/Reusables/StatusCard";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import CustomPaper from '../../General/Reusables/CustomPaper';
import MultipleSelect from '../../General/Reusables/MultilpleSelect';

const HomePage = () => {
    return (
        <Stack rowGap={1.5} height="100%">
            <Grid container columnSpacing={1.5} height="15%">
                <Grid item xs={4}><StatusCard mainTitle='תאריך המסדר הבא' secondaryTitle={new Date().toLocaleDateString()} bottomTitle='יום שני בשעה 12:00' icon={<Groups2Icon color="secondary"/>} /></Grid>
                <Grid item xs={4}><StatusCard mainTitle='האם נשלחה הודעה בארמי' secondaryTitle="נשלחה" bottomTitle='ע"י רגינה ב21.12.23, יום שני בשעה 16:43' secondaryTitleColor="success.light" icon={<MicrosoftIcon color="info"/>} /></Grid>
                <Grid item xs={4}><StatusCard mainTitle='האם נשלחה הודעה בווצאפ' secondaryTitle="לא נשלחה" secondaryTitleColor="error.light" icon={<WhatsAppIcon color="success"/>} /></Grid>
            </Grid>
            <Grid container columnSpacing={1.5} height="85%">
                <Grid item xs={8}>
                    <CustomPaper sx={{height: "100%"}}>
                        כאן יופיע הגרף. אולי נעשה שבתור ברירת מחדל לכל משתמש תהיה האפשרות לעשות את הגרפים שלו? וזה ישמר אוטומטית בענן
                    </CustomPaper>
                </Grid>
                <Grid item xs={4}>
                    <CustomPaper sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Box>
                            <Typography>סינון</Typography>
                            <MultipleSelect label='מדור' options={["מדור א","מדור ב"]} value={[]} onSelection={console.log} />
                        </Box>
                        <Divider />
                        <Box>
                            <Typography>מיון</Typography>
                            <MultipleSelect label='אופציות' options={["לפי נוכחות", "לפי ענף", "לפי מדור", "לפי הערות", "לפי הערות משמעת"]} value={[]} onSelection = {console.log} />
                        </Box>
                    </CustomPaper>
                </Grid>
            </Grid>
        </Stack>

    )
};

export default HomePage;