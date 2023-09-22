import MultipleSelect from "../../General/Reusables/MultilpleSelect";

const DevPage = () => {
    
    const text = "עמוד שבתוכו נוכל לעקוב אחרי הקונטקסט באתר, מצב הסשן וכו'. ";

    return (
        <>
        {text}
        <MultipleSelect options={["יובל", "היה", "פה"]} label="בדיקה" onSelection={console.log} readOnly/>
        </>
    
    )
};

export default DevPage;