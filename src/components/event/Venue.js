import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import VenueMap from '../maps/VenueMap'
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
function Venue(props) {

    const{venues,chosenVenue, setVenue} = props
    const classes = styles();

    const choseVenue = (venue) =>{
        setVenue(venue)
    }
    return(
        <Grid container item xs ={12} justifyContent="center" >
            <Typography className={classes.headers}><FormattedMessage id="event.venue" defaultMessage="Venue" /></Typography>
            <Grid container item xs ={12} justifyContent="center" className={classes.grid}>
                <Grid container item xs ={12} md ={6} justifyContent="center" style={{marginBottom:"2rem"}}>
                    <Grid>
                        {chosenVenue&&<Grid>{chosenVenue.name}</Grid>}
                        {chosenVenue&&<Grid ><img className={classes.venueImage} alt="img" src={chosenVenue.image}></img></Grid>}
                        {chosenVenue&&<Grid><FormattedMessage id="event.address" defaultMessage="Address"/>:{" "}{chosenVenue.address}</Grid>}
                        {chosenVenue&&<Grid><FormattedMessage id="event.price_for_hour" defaultMessage="Price for hour"/>:{" "}{chosenVenue.price} <FormattedMessage id="event.r" defaultMessage="r."/></Grid>}
                    </Grid>
                </Grid>
                <Grid container item xs ={12} md ={6} justifyContent="center" >
                    <Grid className={classes.map}>
                        {venues&&(
                            <VenueMap lat ={chosenVenue?chosenVenue.lat:53.912091} lng = {chosenVenue?chosenVenue.lng:27.594754} venues={venues} click={choseVenue}/>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default observer(Venue);