import { Grid } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import DataCard from "./DataCard";
const LastMisdarDataPage = () => {
    return (
        <CustomPaper sx={{height: "100%"}}>
            <Grid container spacing={4}>
                {['גדעונים','אקדמיה','אחזקות חוץ','מקטנא"ר','עוקץ', 'נאס"א', 'רפ"ט', 'חט"ל','נאס"א', 'רפ"ט',"עתיד מבטיח"].map(i => <Grid key={i} item xs={3}> <DataCard unitName={i} /></Grid>)}
            </Grid>
        </CustomPaper>
    );
};

export default LastMisdarDataPage;