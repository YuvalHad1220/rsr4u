// will be renderend once we have the attendents - this will display what about the missings

import { useMemo } from "react";
import CustomPagination from "../../General/Reusables/CustomPagination";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import MultipleSelect from "../../General/Reusables/MultilpleSelect";

const AddMissings = () => {
    const missings = useMemo(() => {
        return [
            {
                fullname: "ליאור אשכנזי",
                constantMissingReasons: [],
                oneTimeMissingReasons: ["חולה - הוציא גימלים עד יום שלישי"]
            },
            {
                fullname: "יובל הדר",
                constantMissingReasons: [],
                oneTimeMissingReasons: []
            },
            {
                fullname: "נועם בראד",
                constantMissingReasons: ["גר רחוק"],
                oneTimeMissingReasons: ["חולה"]
            },
            {
                fullname: "יניר כהן",
                constantMissingReasons: ["אחזקות חוץ", "גר רחוק", "סיבות אישיות"],
                oneTimeMissingReasons: []

            }
        ]
    }, []);

    const InstructionsBox = (
        <Box paddingY={2}>
            <Typography fontWeight="bold">המערכת זיהתה שמספר חיילים לא הגיעו למסדר</Typography>
            <Typography>לחלקם יש אישור קבוע ועליך לאשר אותו </Typography>
            <Typography>לחלקם ישנו אישור חד פעמי שמור במערכת ועליך לאשר אותו</Typography>
            <Typography>לחלקם אין אישור שמור ועליך לכתוב את סיבת האישור או לציין שהחייל נעדר ללא אישור</Typography>
            <Typography>בסיום לחץ על כפתור "לשלב הבא"</Typography>
        </Box>
    );


    const constantPermissionGroup = useMemo(() => {
        const soldiersWithConstants = missings.filter((soldier) => soldier.constantMissingReasons.length > 0);
        return soldiersWithConstants.map(soldier => 
         <Box key={soldier.fullname} display="flex" flexDirection="row" justifyContent="space-between" paddingX={3}>
            <Typography>שם ענף</Typography>
            <Divider light orientation="vertical" />
            <Typography>{soldier.fullname}</Typography>
            <Divider light orientation="vertical" />
            <MultipleSelect sx={{width: "50%"}} label="סיבות העדרות קבועה" options={soldier.constantMissingReasons} onSelection={console.log} value={[soldier.constantMissingReasons[0]]} readOnly/>
            <Divider light orientation="vertical" />
            <ButtonGroup sx={{width: "40%"}}>
            <Button sx={{width: "80%"}} color="success" variant="contained">אשר</Button>
            <Button sx={{width: "80%"}} color="error" variant="contained">דחה</Button>
            </ButtonGroup>

         </Box>   
        ) 

    }, []);

    const constantPermissionBox = (
        <Box display="flex" flexDirection="column" gap={3} justifyContent="center">
            <Typography fontWeight="bold">חיילים עם אישור קבוע (במידה וידוע שיש לחייל סיבת העדרות נוספת ניתן לבחור אותה מהמערך)</Typography>
            <Button variant="contained">אשר את כל החיילים</Button>
            {constantPermissionGroup}
        </Box>
    );

    const oneTimePermissionBox = (
        <Box paddingY={1.6}>
            <Typography fontWeight="bold">חיילים עם אישור חד פעמי. שים לב שעל כל ניצול אישור, אתה מפחית ממכסת האישורים של החייל</Typography>

        </Box>
    );
 


    return (
        <CustomPaper sx={{textAlign: "center", height: "100%", display: "flex", flexDirection: "column"}}>
            <CustomPagination count={3} page={2} sx={{alignSelf: "end"}} />
            {InstructionsBox}
            {constantPermissionBox}
            {oneTimePermissionBox}
        </CustomPaper>
    );
};


export default AddMissings;
