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
import EventSummary from './EventSummary'
import Food from './Food'
import MainInfo from './MainInfo'
import Staff from './Staff'
import Venue from './Venue'
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventService from "../../services/EventService";
import PaidIcon from '@mui/icons-material/Paid';
import ConfirmationWindow from './ConfirmationWindow'
import { useNavigate } from "react-router";

function EventCreation() {
    const navigate = useNavigate()
    const { store } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('1');
    const [date,setDate] = useState("");
    const [venues, setVenues] = useState("")
    const [chosenVenue, setChosenVenue] = useState("")
    const [staff, setStaff] = useState("")
    const [food, setFood] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
    const [hours, setHours] = useState(0)
    const [personalWishes, setPersonalWishes] = useState("")
    const [openWindow, setOpenWindow] = useState(false)
    const [tryingToCreate, setTryingToCreate] = useState(false)
    const [typeOfEvent, setTypeOfEvent] = useState('wedding')
    const classes = styles();
    
    useEffect(() => {
        let cleanupFunction = false;
        async function getDataFromServer() {
          try {
            if(!store.isAuth){
              navigate(`/`, { replace: true });
            }
            if (!cleanupFunction) {
              const info = await EventService.getInfo(typeOfEvent);
              if(info){
                setVenues(info.data.venues)
                setChosenVenue(info.data.venues[0])
                let chosen = []
                info.data.staff.forEach(person => {
                  chosen.push([person,false])
                });
                setStaff(chosen)
                let amountOfFood = []
                info.data.food.forEach(foodItem => {
                  amountOfFood.push([foodItem,0])
                });
                setFood(amountOfFood)
              }
            }
          } catch (e) {
            console.log(e)
          } finally {
            if (!cleanupFunction) setLoading(false);
          }
        }
        getDataFromServer();
    
        return () => (cleanupFunction = true);
      }, [navigate, store, typeOfEvent]);


    const handleChange = (event, newValue) => {
      setValue(newValue);

    };

    const toRight = () =>{
      if (parseInt(value)<5){
       setValue((parseInt(value)+1).toString())
      }
    }
    const toLeft = () =>{
      if (parseInt(value)>1){
       setValue((value-1).toString())
      }
    }
    
    const changeDate = (new_date) =>{
      setDate(new_date);
    }
    const changeHours = (new_hours) =>{
      if(new_hours>=0)
      {
        calculateTotalPrice(chosenVenue,food,staff,new_hours)
        setHours(new_hours)
      }
    
    }
    const changeChosenVenue=(new_venue) =>{
      calculateTotalPrice(new_venue,food,staff,hours)
      setChosenVenue(new_venue)
      
    }
   
    const changeStaff = (staff_id) =>{
      if(staff){
        let temp = []
        staff.forEach(person => {
          if(person[0]._id === staff_id){
            temp.push([person[0],!person[1]])
          }
          else {
            temp.push([person[0],person[1]])
          }
        });
        calculateTotalPrice(chosenVenue,food,temp,hours)
        setStaff(temp)
       
      }
    }
    const changeFood = (food_id, increase) =>{
      if(food){
        let temp = []
        food.forEach(foodItem => {
          if(foodItem[0]._id === food_id){
            temp.push([foodItem[0],foodItem[1]+increase])
          }
          else {
            temp.push([foodItem[0],foodItem[1]])
          }
        });
        calculateTotalPrice(chosenVenue,temp,staff,hours)
        setFood(temp)
        
      }
    }
    const calculateTotalPrice = (venue,food,staff,hours) =>{
        let temp = 0;
        if(chosenVenue){
          temp +=chosenVenue.price * hours
        }
        if(staff){
          staff.forEach((person)=>{
            if(person[1]){
              temp+=person[0].salary * hours
            }
          })
        }
        if(food){
          food.forEach((item)=>{
            if(item[1]>0){
              temp+=item[0].price * item[1]
            }
          })
        }
        setTotalPrice(temp)
    }
    const changePersonalWishes=(new_wish)=>{
      setPersonalWishes(new_wish)
    }
    const changeShowWindow=(bool)=>{
      setOpenWindow(bool)
    }
    const changeTypeOfEvent =(new_type)=>{
      setTypeOfEvent(new_type)
    }
    const createEvent= async() =>{
      setOpenWindow(false)
      setTryingToCreate(true)
      try{
        const staffIds = []
        staff.forEach((person)=>{
          if(person[1]){
            staffIds.push(person)
          }
        })
        const foodIds = []
        food.forEach((item)=>{
          if(item[1]>0){
            foodIds.push(item)
          }
        })
        const mainInfo ={
          email:store.email,
          total_price:totalPrice,
          start_time:date,
          hours:hours,
          personal_wishes:personalWishes,
          type:typeOfEvent
        }
        const response = await EventService.createEvent(chosenVenue._id,staffIds,foodIds,mainInfo)
        setOpenWindow(false)
        setTryingToCreate(false)
        if(response){
          navigate(`/profile/${store.id}`, { replace: true });
        }
      }
      catch(e){
        console.log(e)
      }
    }

    const showComponent=()=>{
        if(value === "1")
            return (<MainInfo date={date} setDate={changeDate} hours={hours} setHours={changeHours} personalWishes = {personalWishes} setPersonalWishes={changePersonalWishes} typeOfEvent={typeOfEvent} setTypeOfEvent={changeTypeOfEvent}/>)
        else if(value ==="2")
            return (<Venue venues={venues} chosenVenue={chosenVenue} setVenue={changeChosenVenue} totalPrice={totalPrice}/>)
        else if(value ==="3")
            return (<Staff staff={staff} setStaff={changeStaff}/>)
        else if(value ==="4")
            return (<Food food={food} setFood={changeFood}/>)
        else if(value ==="5")
            return (<EventSummary chosenVenue={chosenVenue} staff={staff} food={food} totalPrice={totalPrice} hours={hours} changeShowWindow={changeShowWindow} tryingToCreate={tryingToCreate} date={date}/>)
    }

    if (loading) {
        return <CubeLoader></CubeLoader>;
      }

    return(
        <Container  className = {classes.paper}>
            <Grid container item xs ={12} justifyContent="center">
            <ConfirmationWindow
              openWindow={openWindow}
              changeShowWindow={changeShowWindow}
              createEvent={createEvent}
            ></ConfirmationWindow>
              <IconButton size="small" className={classes.arrows} onClick={()=>{toLeft()}}>
                <ArrowBackIosIcon />
              </IconButton>
              <Tabs 
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    variant="fullWidth"
                    indicatorColor="secondary"
                    className={classes.tabs}
                    aria-label="secondary tabs example">
                    <Tab value="1"   label={<InfoIcon size={"small"}/>} />
                    <Tab value="2"   label={<ApartmentIcon size={"small"}/>} />
                    <Tab value="3" label={<HailIcon size={"small"}/>} />
                    <Tab value="4"  label={<RestaurantIcon size={"small"}/>} />
                    <Tab value="5"  label={<PaidIcon size={"small"}/>} />
              </Tabs>
              <IconButton size="small"  className={classes.arrows} onClick={()=>{toRight()}}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
            {showComponent()}
        </Container>
    )
}

export default observer(EventCreation);