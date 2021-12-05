import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";

function MainInfo() {


    return(
            <Grid item xs ={12} >
                Main Info
            </Grid>
    )
}
export default observer(MainInfo);