import { Grid, Stack, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const UsersPage = () => {
    return (
        <Grid container columnSpacing={1.5} height="100%">
                        <Grid item xs={6}>
                <Stack height="100%" spacing={1.5}>
                    <CustomPaper sx={{height: "30%"}}>
                        פה יופיע המידע עלינו
                    כאן נוכל לראות משתמשים. נוכל להוסיף רק לדרגות שמתחתנו (לא שולל את זה שבטבלה מעל אפשר לראות משתמשים גם בדרגה שלנו)
                    </CustomPaper>
                    <CustomPaper sx={{height: "70%"}}>
                        <Typography>יופיע פה טופס הוספת משתמש</Typography>
                    </CustomPaper>
                </Stack>
            </Grid>
            
            <Grid item xs={6}>
            <CustomPaper sx={{height: "100%"}}>
                <Typography>כאן לכל משתמש יהיה אישור לראות את כל המשתמשים הקשורים למחלקה שלו, כלומר לכל משתמש תהיה האופציה לראות את הרסר, הרגינה והעובדי רסר. לרסרים תהיה האופציה לראות את מנהלי המערכת (אך ורק הרסרים)</Typography>
                <Typography>יהיה ממש מגניב אם נוכל לעשות כמו תיוקים - כשכל לשונית תהיה הדרגות הזמינות. לדוגמא לרסר\אדמין יהיו לשוניות שיתנו לנו לראות "רסר"ת "נגד משמעת"ת "עובדי רבר" אדמינים וכו'</Typography>
            </CustomPaper>
            </Grid>
        </Grid>
    );
};

export default UsersPage;