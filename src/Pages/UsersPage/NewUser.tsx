import { Badge, Box, Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { useState } from "react";

const NewUser = () => {
    const jobs = ["עובד רסר", "אדמין", "נגד משמעת", "רסר"];
    enum states {SignUp, waitingForApprove};
    const [tabState, setTabState] = useState(states.SignUp);
    
    const ApproveUser = () => (
        <Box>
            <Typography>פה נראה רשימה של משתמשים המחכים לאישור</Typography>
            <Typography>על מנת להתחיל לאשר משתמשים - ניאלץ להזין סיסמה שוב או שזה מוגזם? אם לא אז אפשר פשוט לכתוב בהרשמה "המערכת זיהתה שאתה רושם דרגה מתחתיך. האם לאשר אותו אוטומטית?"</Typography>
        </Box>
    );
    const SignUpUser = () => (
        <Box component="form" sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 1.5}}>
            <Typography>שים לב! באפשרותך להוסיף כל משתמש בדרגה שלך או מתחתיך. יחד עם זאת, במידה ואתה מוסיף משתמש בדרגה שלך - רק מי שבדרגה מעליך יוכל לאשר אותו.</Typography>
                <TextField label="שם מלא"/>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">תפקיד במערכת</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="תפקיד במערכת"
                >
                    {jobs.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
                </Select>
                </FormControl>
                <TextField label="מספר אישי"/>
                <TextField label="דרגה"/>
                <TextField type="password" label="סיסמה"/>
                <TextField type="password" label="חזור על הסיסמה"/>
                
                <Button type="submit" variant="contained" sx={{justifySelf: "end"}} >הרשמה</Button>

        </Box>
    );

    const numberedLabel = (
        <Badge variant="dot" color="primary" badgeContent={3} sx={{pr: 1.4}}>
            <Typography>ממתינים לאישור</Typography>
        </Badge>
    )

    return (
        <CustomPaper sx={{height: "85%", paddingTop: 1.5}}>
            <Tabs value={tabState} centered sx={{paddingBottom: 1.5}}>
                <Tab value={states.SignUp} label="הרשמת משתמש" onClick={() => setTabState(states.SignUp)}/>
                <Tab value={states.waitingForApprove} label={numberedLabel} onClick={() => setTabState(states.waitingForApprove)}/>
            </Tabs>
            {states.SignUp === tabState ? <SignUpUser /> : <ApproveUser /> }

        </CustomPaper>
    );
}

export default NewUser;