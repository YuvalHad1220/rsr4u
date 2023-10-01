import { Grid } from "@mui/material";
import Whatsapp from "./Whatsapp";
import SetMisdar from "./SetMisdar";
import Army from "./Army";
import Misdar from "./Misdar";

const UpdateAndDistributeMisdarPage = () => {
    return (
        <Grid height="100%" container columnSpacing={1.5} rowGap={1.5}>
            <Grid item xs={6}>
                <Misdar />
            </Grid>
            <Grid item xs={6}>
                <SetMisdar />
            </Grid>
            <Grid item xs={6}>
                    <Army />
            </Grid>
            <Grid item xs={6}>
                <Whatsapp />
            </Grid>

        </Grid>
    )
};
export default UpdateAndDistributeMisdarPage;