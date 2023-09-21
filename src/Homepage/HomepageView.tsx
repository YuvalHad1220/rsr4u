import Groups2Icon from '@mui/icons-material/Groups2';
import StatusCard from "../General/Reusables/StatusCard";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Box } from '@mui/material';

const HomepageView = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", gap: 1.5}}>
        <StatusCard mainTitle='תאריך המסדר הבא' secondaryTitle={new Date().toLocaleDateString()} bottomTitle='יום שני בשעה 12:00' icon={<Groups2Icon color="secondary"/>} />
        <StatusCard mainTitle='האם נשלחה הודעה בארמי' secondaryTitle="נשלחה" bottomTitle='ע"י רגינה ב21.12.23, יום שני בשעה 16:43' secondaryTitleColor="success.light" icon={<MicrosoftIcon color="info"/>} />
        <StatusCard mainTitle='האם נשלחה הודעה בווצאפ' secondaryTitle="לא נשלחה" secondaryTitleColor="error.light" icon={<WhatsAppIcon color="success"/>} />
        </Box>
    )
};

export default HomepageView;