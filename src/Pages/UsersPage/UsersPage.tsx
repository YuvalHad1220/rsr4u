import { Box, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const UsersPage = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100%"}} gap={1.5}>
            <CustomPaper sx={{height: "50%"}}>
                <Typography>כאן לכל משתמש יהיה אישור לראות את כל המשתמשים הקשורים למחלקה שלו, כלומר לכל משתמש תהיה האופציה לראות את הרסר, הרגינה והעובדי רסר. לרסרים תהיה האופציה לראות את מנהלי המערכת (אך ורק הרסרים)</Typography>
                <Typography>יהיה ממש מגניב אם נוכל לעשות כמו תיוקים - כשכל לשונית תהיה הדרגות הזמינות. לדוגמא לרסר\אדמין יהיו לשוניות שיתנו לנו לראות "רסר"ת "נגד משמעת"ת "עובדי רבר" אדמינים וכו'</Typography>
            </CustomPaper>
            <CustomPaper sx={{height: "50%"}}>
                כאן נוכל לראות משתמשים. נוכל להוסיף רק לדרגות שמתחתנו (לא שולל את זה שבטבלה מעל אפשר לראות משתמשים גם בדרגה שלנו)
            </CustomPaper>
        </Box>
    );
};

export default UsersPage;