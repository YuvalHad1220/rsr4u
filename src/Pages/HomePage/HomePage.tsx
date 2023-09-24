import Groups2Icon from '@mui/icons-material/Groups2';
import StatusCard from "../../General/Reusables/StatusCard";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Grid } from '@mui/material';

const HomePage = () => {
    return (
        <Grid container spacing={1.5}>
            <Grid item xs={4}><StatusCard mainTitle='תאריך המסדר הבא' secondaryTitle={new Date().toLocaleDateString()} bottomTitle='יום שני בשעה 12:00' icon={<Groups2Icon color="secondary"/>} /></Grid>
            <Grid item xs={4}><StatusCard mainTitle='האם נשלחה הודעה בארמי' secondaryTitle="נשלחה" bottomTitle='ע"י רגינה ב21.12.23, יום שני בשעה 16:43' secondaryTitleColor="success.light" icon={<MicrosoftIcon color="info"/>} /></Grid>
            <Grid item xs={4}><StatusCard mainTitle='האם נשלחה הודעה בווצאפ' secondaryTitle="לא נשלחה" secondaryTitleColor="error.light" icon={<WhatsAppIcon color="success"/>} /></Grid>
        </Grid>
    )
};

export default HomePage;