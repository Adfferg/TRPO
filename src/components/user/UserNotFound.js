import React from "react";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Container from "@material-ui/core/Container";
import styles from "./styles";

function UserNotFound(props) {
    const classes = styles();
    return(
        <Container className={classes.paper}>
            <Grid container justifyContent="center" style={{margin:"2rem", fontSize:"130%"}}>
                <FormattedMessage id="profile.user_not_found" defaultMessage="User not found"/>
            </Grid>
        </Container>
            
    )
}
export default UserNotFound;