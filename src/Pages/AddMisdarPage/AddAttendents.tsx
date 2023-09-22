import { Paper, Button, TextField, Typography, Box, Divider } from "@mui/material";
import React, { useMemo, useState } from "react";
import { personData } from "../../assets/interfaces";
import Fuse from "fuse.js";

interface AddAttendentsProps {
    onAttendentsData: Function
}

const fuseOptions = {
    isCaseSensitive: false,
	minMatchCharLength: 4,
    threshold: 0.3,
	shouldSort: true,
	includeScore: true,
    keys: ["name"]
};

interface fuseData {
    name: string,
    score: number
};

const userDatas = [
    {name: "יובל הדר"},
    {name: "ניב פדידה"},
    {name: "חני שהיר"},
    {name: "נואה קדמון"},
    {name: "אייל כהן"},
]


const AddAttendents: React.FC<AddAttendentsProps> = ({onAttendentsData}) => {
    const [attendentsData, setAttendentsData] = useState<personData[]>([]);
    const [lineData, setLineData] = useState("");
    const [suggested, setSuggested] = useState<fuseData>({name: "", score: 0});
    
    const fuse = useMemo(() => new Fuse(userDatas, fuseOptions), []);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLineData(event.target.value);
        // find name inside "". IDEA: neet to fix it to match only words before () or []

        const approxiateName = event.target.value.split(")")[0].split("]")[0];
        const matches = fuse.search(approxiateName);

        if (matches.length > 0 && (matches[0].score || 0 > suggested.score)){
            setSuggested({name: matches[0].item.name, score: matches[0].score || 0});
        }
        else {
            setSuggested({name: "", score: 0});
        }
        
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter"){
            if (suggested.name) {
                // find whatever inside ()
                const commentsRegex = /[^\()]+(?=\))/g;
                // find whatever inside []
                const wrongsRegex = /[^\[]+(?=\])/g;

                const comments = lineData.match(commentsRegex) || [];
                const wrongs = lineData.match(wrongsRegex) || [];

                setAttendentsData(value => [...value, {name: suggested.name, comments, wrongs}]);
                setLineData("");
                setSuggested({name: "", score: 0})
            }
            else {
                console.log("לא ניתן להוסיף את החייל למסדר מאחר והוא לא נמצא במערכת. ")
            }
        }

    };

    const onButton = () => {
        onAttendentsData(attendentsData);
    }

    const foundSoldierData = useMemo(() => {
        if (!lineData){
            return null;
        }
        if (!suggested.name) {
            return <Typography fontWeight="bold" bgcolor="error.light">לא נמצא חייל, אנא תקן את השם או פנה לרסר</Typography>;
        }

        if (suggested.score * 100 < 1){
            return <Typography fontWeight="bold" bgcolor="success.light">נמצא החייל {suggested.name} בהתאמה</Typography>
        }

        else {
            return <Typography fontWeight="bold" bgcolor="info.light">האם התכוונת ל{suggested.name}? ({(suggested.score * 100).toFixed(1)}% התאמה)</Typography>
        }

    }, [suggested, lineData]);

    const items = (
        attendentsData.map(dataPoint => {
            return (
                <Box key={dataPoint.name} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin:3}}>
                <Typography>ענף</Typography>
                <Divider light orientation="vertical" />
                <Typography>שם החייל</Typography>
                <Divider orientation="vertical" />
                <Typography>הערות לבוש</Typography>
                <Divider orientation="vertical" />
                <Typography>הערות</Typography>

            </Box>
            );
        })
    );

    return (
        <Paper sx={{textAlign: "center", height: "100%", padding: 4, borderRadius: 5,boxShadow: 3,}}>
            <Typography fontWeight="bold">אנא הכנס את שם החייל, ולאחר מכן לחץ אנטר. במידה והמערכת תזהה את החייל הוא יוצג על המסך</Typography>
            <Typography>כדי להוסיף הערת דיגום פתח סוגריים [] וכתוב את פרטי ההערת דיגום</Typography>
            <Typography>על מנת להכניס הערה, פתח סוגריים () וכתוב את פרטי ההערה</Typography>
            <Typography>עם סיום הכנסת כל השמות אנא לחץ על הכפתור "עבור לשלב הבא" על מנת להזין את הפרטים למערכת</Typography>
            <TextField fullWidth value={lineData} onKeyDown={handleKeyDown} onChange={handleInputChange}/>
            <Typography>{foundSoldierData}</Typography>
            <Button fullWidth variant="contained" onClick={onButton}>עבור לשלב הבא</Button>
            {items}
        </Paper>
    )
};

export default AddAttendents;