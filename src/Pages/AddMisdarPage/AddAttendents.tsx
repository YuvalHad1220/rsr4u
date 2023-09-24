import { Button, TextField, Typography, Box, Divider } from "@mui/material";
import React, { useMemo, useState } from "react";
import { personData } from "../../assets/interfaces";
import Fuse from "fuse.js";
import CustomPaper from "../../General/Reusables/CustomPaper";
import CustomPagination from "../../General/Reusables/CustomPagination";

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

    const foundSoldierText = useMemo(() => {
        if (!lineData)
            return null;
        if (!suggested.name) 
            return <Typography fontWeight="bold" color="error.light">לא נמצא חייל, אנא תקן את השם או פנה לרסר</Typography>;
        if (suggested.score * 100 < 1)
            return <Typography fontWeight="bold" color="success.light">נמצא החייל {suggested.name} בהתאמה</Typography>
        else 
            return <Typography fontWeight="bold" color="info.light">האם התכוונת ל{suggested.name}? ({(suggested.score * 100).toFixed(1)}% התאמה)</Typography>
        

    }, [suggested, lineData]);

    const addedAttendents = (
        attendentsData.map(dataPoint => (
                <Box key={dataPoint.name} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingX: 3}}>
                    <Typography>ענף</Typography>
                    <Divider light orientation="vertical" />
                    <Typography>שם החייל</Typography>
                    <Divider orientation="vertical" />
                    <Typography>הערות לבוש</Typography>
                    <Divider orientation="vertical" />
                    <Typography>הערות</Typography>
                </Box>
            ))
    );
    const InstructionsBox = (
        <Box paddingY={2}>
            <Typography fontWeight="bold">הכנס את שם החייל (לאישור לחץ אנטר)</Typography>
            <Typography>הערת דיגום כתוב בתוך []</Typography>
            <Typography>הערה רגילה כתוב בתוך ()</Typography>
            <Typography>בסיום לחץ על כפתור "לשלב הבא"</Typography>
        </Box>
    );

    const inputBox = (
        <Box display="flex" flexDirection="column" justifyContent="center">
            <Box height="3.5rem" > {foundSoldierText} </Box>
            <TextField fullWidth value={lineData} onKeyDown={handleKeyDown} onChange={handleInputChange}/>
            <Button fullWidth variant="contained" onClick={onButton} sx={{marginTop: 3}}>עבור לשלב הבא</Button>
        </Box>
    );

    return (
        <CustomPaper sx={{textAlign: "center", height: "100%", display: "flex", flexDirection: "column"}}>
            <CustomPagination count={3} page={1} sx={{alignSelf: "end"}} />
            {InstructionsBox}
            {inputBox}
            {addedAttendents}
        </CustomPaper>
    )
};

export default AddAttendents;