import { useState } from "react";
import EditableTabs from "../../General/Reusables/EditableTabs";
import LoadingButton from "../../General/Reusables/LoadingButton";
import MultipleSelect from "../../General/Reusables/MultilpleSelect";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { Skeleton, Stack } from "@mui/material";

const DevPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const text = "עמוד שבתוכו נוכל לעקוב אחרי הקונטקסט באתר, מצב הסשן וכו'. ";

    return (
        <>
        {text}
        <MultipleSelect options={["יובל", "היה", "פה"]} label="בדיקה" onSelection={console.log} readOnly/>
        <EditableTabs />
        <LoadingButton loading={isLoading} variant="contained" size="large">לחץ עליי</LoadingButton>
        {/* <Skeleton component={CustomPaper} variant="rectangular" animation="wave" sx={{height: "100%", display: "flex", flexDirection: "column", bgcolor: 'black'}}>
            
        </Skeleton> */}

        <Stack component={CustomPaper} sx={{height: "100%", display: "flex", flexDirection: "column"}} spacing={2}>
            <Skeleton component={CustomPaper} sx={{width: "100%", height: "20%", bgcolor: 'black'}} animation="wave" variant="rectangular"/>
            <Skeleton component={CustomPaper} sx={{width: "100%", height: "80%", bgcolor: 'black'}} animation="wave" variant="rectangular"/>
        </Stack>
        </>
    
    )
};

export default DevPage;