// will be renderend once we have the attendents - this will display what about the missings

import { useMemo } from "react";
import CustomPagination from "../../General/Reusables/CustomPagination";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { Box, Button, Divider, Typography } from "@mui/material";
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
                constantMissingReasons: ["אחזקות חוץ"],
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
            <MultipleSelect label="סיבות העדרות קבועה" options={soldier.constantMissingReasons} onSelection={console.log} value={[soldier.constantMissingReasons[0]]} readOnly/>
            <Divider light orientation="vertical" />
            <Button color="success" variant="outlined">אשר העדרות חייל</Button>
            <Button color="error" variant="outlined">דחה העדרות חייל</Button>
         </Box>   
        ) 

    }, []);
 


    return (
        <CustomPaper sx={{textAlign: "center", height: "100%", display: "flex", flexDirection: "column"}}>
            <CustomPagination count={3} page={2} sx={{alignSelf: "end"}} />
            {InstructionsBox}
            <Typography fontWeight="bold">חיילים עם אישור קבוע (במידה וידוע שיש לחייל סיבת העדרות נוספת ניתן לבחור אותה מהמערך)</Typography>
            <Button>אשר העדרות כל החיילים</Button>
            {constantPermissionGroup}
        </CustomPaper>
    );
};


export default AddMissings;
