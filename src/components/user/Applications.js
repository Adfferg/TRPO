import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Applications(props) {

    const {applications} = props
    const classes = styles();
    return(
            <Grid item xs ={12} >
                <Grid container justifyContent="center">
                    <Typography className={classes.headers}><FormattedMessage id="event.staff" defaultMessage="Staff" /></Typography>
                </Grid>
                {applications.map((application)=>(
                    <Grid>
                        <Grid>{application.email}</Grid>
                        <Grid>{application.phone}</Grid>
                        <Grid>{application.name}</Grid>
                    </Grid>
                ))}
            </Grid>
    )
}
export default observer(Applications);