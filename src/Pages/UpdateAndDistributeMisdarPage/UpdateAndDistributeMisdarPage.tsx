import { Grid } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const UpdateAndDistributeMisdarPage = () => {
    return (
        <Grid height="100%" container columnSpacing={1.5} rowGap={1.5}>
        <Grid item xs={6}>
                <CustomPaper sx={{height: "100%"}}>
                    נציג כאן אם נקבע מסדר, בנוסף נציג אם יש הערות (למשל: מסדר ניקיון, מסדר עם הרמח, וכו') 
                </CustomPaper>
            </Grid>
            <Grid item xs={6}>
            <CustomPaper sx={{height: "100%"}}>
                    כאן נציג אם אנחנו נרצה לשנות תאריך מסדר: זה יהיה טופס שבו יהיה ניתן להזין תאריך ושעה, ועל מנת לשנות את התאריך יופיע השם החדש
                </CustomPaper>
            </Grid>
            <Grid item xs={6}>
                <CustomPaper sx={{height: "100%"}}>
                כאן יופיע כפתור "שלח לארמי" ותהיה טעינה. כמובן שנעדכן אם זה הצליח או לא 
                </CustomPaper>
            </Grid>
            <Grid item xs={6}>
            <CustomPaper sx={{height: "100%"}}>
                כאן יופיע כפתור "עדכן שליחת הודעה בווצאפ"
                </CustomPaper>
            </Grid>

        </Grid>
    )
};
export default UpdateAndDistributeMisdarPage;