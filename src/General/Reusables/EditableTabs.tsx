import { Button, IconButton, InputAdornment, Snackbar, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import DoneIcon from '@mui/icons-material/Done';

/*
TODO:
1. make it scrollable
2. add delete button
*/
const EditableTabs = () => {
    interface tabInterface {
        label: string,
        value: string
    };

    const [isInputVisible, setInputIsVisible] = useState(false);
    const [isSnackbarShown, setIsSnackbarShown] = useState(false);
    const [tabs, setTabs] = useState<tabInterface[]>([
        {label: "טאב א", value: "טאב א"},
        {label: "טאב ב", value: "טאב ב"},
        {label: "טאב ג", value: "טאב ג"},
        {label: "טאב ד", value: "טאב ד"},
    ]);
    const [tabValue, setTabValue] = useState(tabs[0].value);
    const inputRef = useRef<HTMLInputElement>();
    
    const onTextDone = () => {
        if (!inputRef.current?.value){
            setIsSnackbarShown(true);
        }

        else {
            setInputIsVisible(false);
            setTabs(prev => [...prev, {label: inputRef.current?.value, value: inputRef.current?.value} as tabInterface])
        }
        
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter"){
            onTextDone();
        }
    };

    // in order to cancel errors
    const ButtonInTabs = () =>                 
        <Button variant="contained" onClick={() => setInputIsVisible(true)} sx={{px: 4, mr: 4, ml: "auto"}}>הוספה</Button>
    ;
    const TextInput = () => (
        <TextField
            inputRef={inputRef}
            size="small"
            onKeyDown={handleKeyDown}
            sx={{maxWidth: "11rem", alignSelf: "center"}}
            inputProps={{maxLength: 15}}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton color="primary" size="small" onClick={onTextDone}>
                        <DoneIcon />
                    </IconButton>
                </InputAdornment>
                ),
                sx: {
                    paddingY: 0.8
                }
            }}
        />
        );

    return (
        <>
            <Snackbar
                open={isSnackbarShown}
                autoHideDuration={6000}
                onClose={() => setIsSnackbarShown(false)}
                message="לא ניתן לשמור כרטיסיה ללא שם"
            />
            <Typography>יהיו טאבים שיהיו צמודים לימין, ולשמאל יהיה כפתור "הוספת כרטיסיה". כשנלחץ על זה תהיה לנו כרטיסיה חדשה שיהיה ניתן לבחור לה שם (במידה ולא נבחר שם אז יקפוץ אלרט שאומר שחייבים שם). הכרטיסייה תהיה ברוחב מלא</Typography>
            <Tabs sx={{width: "100%"}} value={tabValue}>
                {tabs.map(tab => <Tab key={tab.value} value={tab.value} label={tab.label} onClick={() => setTabValue(tab.value)}/>)}
                {isInputVisible && <TextInput /> }
                <ButtonInTabs />
            </Tabs>
        </>
    );
};

export default EditableTabs;