import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";

function Food() {


    return(
            <Grid item xs ={12} >
                Food
            </Grid>
    )
}
export default observer(Food);