import { Typography } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import DataCard from "./DataCard";
const LastMisdarDataPage = () => {
    return (
        <CustomPaper sx={{height: "100%"}}>
           <Typography>שעוני מידע על המסדר האחרון. לחיצה על כל שעון בפינה תוריד דרגה (עד רמת מדור). השאלה מה יהיה בלחיצה על האחוזים עצמם</Typography>
           <DataCard />
        </CustomPaper>
    );
};

export default LastMisdarDataPage;