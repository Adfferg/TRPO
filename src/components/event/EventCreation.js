import React,{useContext, useState, useEffect} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CubeLoader from "../loaders/CubeLoader";
//import Typography from "@material-ui/core/Typography";
//import { FormattedMessage } from "react-intl";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HailIcon from '@mui/icons-material/Hail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventProgram from './EventProgram'
import Food from './Food'
import MainInfo from './MainInfo'
import Staff from './Staff'
import Venue from './Venue'
function EventCreation() {

    const { store } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const classes = styles();
    const [value, setValue] = useState('Main info');
    useEffect(() => {
        let cleanupFunction = false;
        async function getDataFromServer() {
          try {
           
          } catch (e) {
            console.log(e)
          } finally {
            if (!cleanupFunction) setLoading(false);
          }
        }
        getDataFromServer();
    
        return () => (cleanupFunction = true);
      }, [store]);

    const handleChange = (event, newValue) => {
      setValue(newValue);

    };
    const showComponent=()=>{
        if(value ==="Main info")
            return (<MainInfo/>)
        else if(value ==="Venue")
            return (<Venue/>)
        else if(value ==="Staff")
            return (<Staff/>)
        else if(value ==="Food")
            return (<Food/>)
        else if(value ==="Event program")
            return (<EventProgram/>)
    }

    if (loading) {
        return <CubeLoader></CubeLoader>;
      }

    return(
        <Container  className = {classes.paper}>
            <Grid item xs ={12} >
              <Tabs 

                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    variant="fullWidth"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example">
                    <Tab value="Main info"   label={<InfoIcon size={"small"}/>} />
                    <Tab value="Venue"   label={<ApartmentIcon size={"small"}/>} />
                    <Tab value="Staff" label={<HailIcon size={"small"}/>} />
                    <Tab value="Food"  label={<RestaurantIcon size={"small"}/>} />
                    <Tab value="Event program"  label={<AccessTimeIcon size={"small"}/>} />
              </Tabs>
            </Grid>
            {showComponent()}
        </Container>
    )
}

/*                    <Tab value="one" label={<FormattedMessage id="event.main_info" defaultMessage="Main info"/>} />
                    <Tab value="two" label={<FormattedMessage id="event.venue" defaultMessage="Venue"/>} />
                    <Tab value="three" label={<FormattedMessage id="event.staff" defaultMessage="Staff"/>} />
                    <Tab value="four" label={<FormattedMessage id="event.food" defaultMessage="Food"/>} />
                    <Tab value="five" label = {<FormattedMessage id="event.event_program" defaultMessage="Event program"/>} /> */
export default observer(EventCreation);