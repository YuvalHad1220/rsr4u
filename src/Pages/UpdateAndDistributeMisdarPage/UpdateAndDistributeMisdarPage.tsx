import { Grid, Stack } from "@mui/material";
import Whatsapp from "./Whatsapp";
import SetMisdar from "./SetMisdar";
import Army from "./Army";
import Misdar from "./Misdar";

const UpdateAndDistributeMisdarPage = () => {
    return (
        <Grid height="100%" container columnSpacing={1.5}>
            <Grid item xs={6}>
                <Stack spacing={1.5} height="100%">
                    <Misdar />
                    <Army />
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack spacing={1.5} height="100%">
                    <SetMisdar />
                    <Whatsapp />
                </Stack>
            </Grid>

        </Grid>
    )
};
export default UpdateAndDistributeMisdarPage;