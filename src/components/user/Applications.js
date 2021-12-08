import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@material-ui/core/IconButton";

function Applications(props) {

    const {applications,deleteApplication} = props
    const classes = styles();

    return(
        <Grid item xs ={12} style={{display:"flex", flexDirection:"column", padding:"1rem", alignItems:"center"}}>
            <Typography className={classes.headers}><FormattedMessage id="profile.applications" defaultMessage="Applications"/></Typography>
            {applications.length>0 && applications.map((application)=>(
                <Grid item xs={10} md={6} className={classes.applicationGrid} key={application._id}>
                    <Grid style={{display:"flex"}}>
                        <Grid item xs={11}>
                            <FormattedMessage id="mainpage.email" defaultMessage="Email"/>: {application.email}   
                        </Grid>
                        <Grid item xs={1}>
                        <IconButton size="small" style={{color:"red"}} onClick={()=>{deleteApplication(application._id)}}>
                            <ClearIcon/>
                          </IconButton>
                        </Grid>
                    </Grid>
                    <Grid><FormattedMessage id="mainpage.phone" defaultMessage="Phone"/>: {application.phone}</Grid>
                    <Grid><FormattedMessage id="mainpage.name" defaultMessage="Name"/>: {application.name}</Grid>
                </Grid>
            ))}
        </Grid>
    )
}
export default observer(Applications);