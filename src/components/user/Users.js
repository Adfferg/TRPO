import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Users(props) {

    const {users} = props
    const classes = styles();
    return(
            <Grid item xs ={12} >
                <Grid container justifyContent="center">
                    <Typography className={classes.headers}><FormattedMessage id="event.staff" defaultMessage="Staff" /></Typography>
                </Grid>
                {users.map((user)=>(
                    <Grid>{user.email}</Grid>
                ))}
            </Grid>
    )
}
export default observer(Users);