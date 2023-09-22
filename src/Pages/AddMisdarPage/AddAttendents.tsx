import { Paper, Button, TextField, TextFieldProps } from "@mui/material";
import { useRef, useState } from "react";

// move to assets?
interface personData {
    name: string,
    comments?: string[],
    wrongs?: string[]

}

const lineToData = (line: string) => {

    // find name inside "". IDEA: neet to fix it to match only words before () or []
    const nameRegex = /[^\"]+(?=\")/g;
    // find whatever inside ()
    const commentsRegex = /[^\()]+(?=\))/g;
    // find whatever inside []
    const wrongsRegex = /[^\[]+(?=\])/g;


    const data: personData = {
        name: "", // Provide an initial value for 'name'
        comments: [], // Provide an initial value for 'comments'
        wrongs: [] // Provide an initial value for 'wrongs'
    };

    data.name = (line.match(nameRegex) || []).join(" ");
    data.comments = line.match(commentsRegex) || [];
    data.wrongs = line.match(wrongsRegex) || [];

    return data;

}

const AddAttendents = () => {
    const textRef = useRef<TextFieldProps>();
    const clearInput = (line: string) => line.length > 0; 

    const nextLevelHandler = () => {
        const data = textRef.current?.value as string;
        if (!data)
            return;

        const attendentsLines = data.split("\n");
        const attendentsData = attendentsLines.filter(clearInput).map(lineToData);
        console.log(attendentsData);
    }

    return (
        <Paper>
            <TextField multiline fullWidth inputRef={textRef} />
            <Button onClick={nextLevelHandler}>עבור לשלב הבא</Button>
        </Paper>
    )
};

export default AddAttendents;