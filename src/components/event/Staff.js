import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import StaffItem from './StaffItem'
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Staff(props) {

    const {staff, setStaff} = props
    const classes = styles();
    return(
            <Grid item xs ={12} >
                <Grid container justifyContent="center">
                    <Typography className={classes.headers}><FormattedMessage id="event.staff" defaultMessage="Staff" /></Typography>
                </Grid>
                {staff&&staff.map((person)=>(
                    <StaffItem key={person[0]._id} staff={person} setStaff={setStaff}></StaffItem>
                ))}
            </Grid>
    )
}
export default observer(Staff);