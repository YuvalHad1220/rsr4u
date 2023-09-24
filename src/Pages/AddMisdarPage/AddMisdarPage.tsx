import { Grid } from "@mui/material";
import { personData } from "../../assets/interfaces";
import AddAttendents from "./AddAttendents"

const AddMisdarPage = () => {
    // will need to contact the backend and gather  their personal data, and if we cant we need to fuzzy search
    // once we get fuzzy searched data we will ask the user if this is correct
    // if they reject then will add to "unknown list and user will have to clear it to continue"

    // for all te results - group by all-good, absent-alwys, absent-with-permission, adsent-without-permission
    // then we let the user edit the results \ confirm and send to db

    const onAttendentsData = (attendents: personData[]) => {

    };

    return (
        <Grid container width="100%" height="100%" spacing={1.5}>
            <Grid item md={4} sm={12}><AddAttendents onAttendentsData={onAttendentsData}/></Grid>
            <Grid item md={4} sm={12}><AddAttendents onAttendentsData={onAttendentsData}/></Grid>
            <Grid item md={4} sm={12}><AddAttendents onAttendentsData={onAttendentsData}/></Grid>
        </Grid>
    );
};


export default AddMisdarPage;