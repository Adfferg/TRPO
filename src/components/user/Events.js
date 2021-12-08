import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Events(props) {

    const {events} = props
    const classes = styles();

    const getEventDate=(start_time)=>{
        const day = new Date(start_time)
            .toLocaleString()
            .split(",")[0];
          const minutes = new Date(start_time)
            .toLocaleString()
            .split(",")[1];
          const date = minutes + " " + day;
        return date
    }

    return(
            <Grid item xs ={12} style={{display:"flex", flexDirection:"column", padding:"1rem", alignItems:"center"}}>
                 <Typography className={classes.headers}><FormattedMessage id="profile.events" defaultMessage="My events"/></Typography>
                    <Grid item xs={12} className={classes.eventGrid}>
                        <Grid className={classes.eventSmallerGrid1}>
                            <FormattedMessage id="event.venue" defaultMessage="Venue"/>
                        </Grid>
                        <Grid className={classes.eventSmallerGrid2}>
                            <FormattedMessage id="event.date" defaultMessage="Date"/>
                        </Grid>
                        <Grid className={classes.eventSmallerGrid3}>
                            <FormattedMessage id="event.total_cost" defaultMessage="Total cost"/>
                        </Grid>
                    </Grid>
                    {events.length>0 && events.map((event)=>(
                    <Grid item xs={12} key={event._id} className={classes.eventGrid}>
                        <Grid className={classes.eventSmallerGrid1}>
                            {event.venue.name}
                        </Grid>
                        <Grid className={classes.eventSmallerGrid2}>
                            {getEventDate(event.start_time)}
                        </Grid>
                        <Grid className={classes.eventSmallerGrid3}>
                            {event.total_price}<FormattedMessage id="event.r" defaultMessage="r."/>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
    )
}
export default observer(Events);