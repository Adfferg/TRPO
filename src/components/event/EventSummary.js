import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import DualRing from "../loaders/DualRing";

function  EventSummary(props) {
    const {chosenVenue, staff, food, totalPrice,hours, changeShowWindow, tryingToCreate} = props

    const classes = styles();
    return(
        <Grid container item xs ={12} style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"1rem"}}>
                <Typography className={classes.headers}><FormattedMessage id="event.event_summary" defaultMessage=" Event Summary" /></Typography>
                
                <Grid  item className={classes.summaryGrid}>
                    <FormattedMessage id="event.venue" defaultMessage="Venue" />*:
                    {chosenVenue&&<Grid>{chosenVenue.name}{": "}{chosenVenue.price*hours} <FormattedMessage id="event.r" defaultMessage="r."/></Grid>}
                </Grid>
                {staff&&(
                <Grid item className={classes.summaryGrid}>
                    <FormattedMessage id="event.staff" defaultMessage="Staff"/>:
                    {staff.map((person)=>(
                        person[1]&&
                        (<Grid key={person[0]._id}>
                            {person[0].name}{": "}{person[0].salary*hours} <FormattedMessage id="event.r" defaultMessage="r."/>
                        </Grid>
                        )
                    ))}
                </Grid>)}
                <Grid item className={classes.summaryGrid}>
                    <FormattedMessage id="event.food" defaultMessage="Food"/>:
                    {food&&food.map((item)=>(
                        item[1]>0?(
                        <Grid key={item[0]._id}>
                            {item[0].name}{" x "}{item[1]}{": "}{item[0].price*item[1]} <FormattedMessage id="event.r" defaultMessage="r."/>
                        </Grid>):("")
                    ))}
                </Grid>
                <Grid  item className={classes.totalPrice}>
                    <FormattedMessage id="event.total_cost" defaultMessage="Total cost"/>: {totalPrice} <FormattedMessage id="event.r" defaultMessage="r."/>
                </Grid>
                {totalPrice>0&&(tryingToCreate?(<DualRing></DualRing>):(<Button
                type="submit"
                variant="contained"
                color="primary"
                onClick ={()=>{changeShowWindow(true)}}
                className={classes.button}>
                     <FormattedMessage id="mainpage.make_order" defaultMessage="Make order"/>
                </Button>))}
            </Grid>
    )
}
export default observer(EventSummary);