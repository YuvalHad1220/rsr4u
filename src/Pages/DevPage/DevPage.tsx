import { useState } from "react";
import EditableTabs from "../../General/Reusables/EditableTabs";
import LoadingButton from "../../General/Reusables/LoadingButton";
import MultipleSelect from "../../General/Reusables/MultilpleSelect";

const DevPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const text = "עמוד שבתוכו נוכל לעקוב אחרי הקונטקסט באתר, מצב הסשן וכו'. ";

    return (
        <>
        {text}
        <MultipleSelect options={["יובל", "היה", "פה"]} label="בדיקה" onSelection={console.log} readOnly/>
        <EditableTabs />
        <LoadingButton loading={isLoading} variant="contained" size="large">לחץ עליי</LoadingButton>
        </>
    
    )
};

export default DevPage;