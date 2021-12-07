import React,{useState, useContext} from "react";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import './main.css'
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
import Maps from '../maps/Maps'
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { FormattedMessage } from "react-intl";
import { Context } from "../../index";
import CubeLoader from "../loaders/CubeLoader";
import ProfileService from "../../services/ProfileService";

function MainPage() {
    const { store } = useContext(Context);
    const classes = styles();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [tryingToApplication, setTryingToCreateApplication] = useState(false);

    const makeOrder = ()=>{
        navigate('../make-order', { replace: true });
    }
    const goToLogin = ()=>{
        navigate('../login', { replace: true });
    }

    const leaveApplication = async(event) => {
        event.preventDefault();
        if(!tryingToApplication){
            try{
                setTryingToCreateApplication(true);
                const response = await ProfileService.createApplication(name,email,phone);
                if(response){
                    console.log(response)
                    setName('');
                    setEmail('');
                    setPhone('');
                }
              }
              catch(e){
        
              }
              finally{
                setTryingToCreateApplication(false);
              }
           }
    }

    if (store.isLoading) {
        return <CubeLoader></CubeLoader>;
    }
    
    return(
       <Container className = {classes.paper}>
            <Grid container className={classes.sign} spacing={1}>
                <div className="two"><h1>Event management</h1></div>
            </Grid>
            
            <Grid container className={classes.contacts}>
                <Grid item xs = {12} md ={4} className={classes.call_us}>
                    <Box className={classes.call_us_header}>
                        <FormattedMessage
                             id="mainpage.can_call_us"
                            defaultMessage="YOU CAN CALL US"/>
                    </Box>
                    <Box className={classes.box}>
                        +375-29-855-64-49
                    </Box>
                    <Box className={classes.box}>
                        +375-29-720-48-87
                    </Box>
                    <Box className={classes.box}>
                        <FormattedMessage
                             id="mainpage.worktime"
                            defaultMessage="We work on weekdays from 10 to 18"/>
                    </Box>
                </Grid>
                <Grid item xs = {12} md ={4} className={classes.write_us}>
                    <Box className={classes.write_us_header}>
                        <FormattedMessage
                            id="mainpage.can_write_us"
                            defaultMessage="YOU CAN WRITE US"/>
                    </Box>
                    <Box  className={classes.box}>
                        maxrusak01@gmail.com
                    </Box>
                    <Box  className={classes.box}>
                        maxzhukousky@gmail.com
                    </Box>
                </Grid>
                <Grid item xs = {12} md ={4} >
                    <form onSubmit={leaveApplication}>
                        <Grid className={classes.application}>
                            <Box className={classes.application_header}>
                                <FormattedMessage
                                    id="mainpage.fill_application"
                                    defaultMessage="YOU CAN FILL IN THE APPLICATION"/>
                            </Box>
                        
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label={
                                    <FormattedMessage
                                    id="mainpage.name"
                                    defaultMessage="Name"/>
                                }
                                style={{background:"white"}}
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                type="email"
                                label={
                                    <FormattedMessage
                                    id="mainpage.email"
                                    defaultMessage="Email" />
                                }
                                style={{background:"white"}}
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label={
                                    <FormattedMessage
                                        id="mainpage.phone"
                                        defaultMessage="Phone"/>
                                }
                                style={{background:"white"}}
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}/>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}>
                                <FormattedMessage
                                id="mainpage.leave_application"
                                defaultMessage="Leave application"/>
                            </Button>
                        
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid className={classes.find_us_here}>
                <FormattedMessage
                    id="mainpage.find_us"
                    defaultMessage="YOU CAN FIND US HERE"/>
            </Grid>
            <Grid className={classes.map}>
                <Maps lat ={53.912091} lng = {27.594754} text={<FormattedMessage id="mainpage.map_message" defaultMessage="We are here!"/>}/>
            </Grid>
            {store.isAuth?(
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>{makeOrder()}}>
                <FormattedMessage
                    id="mainpage.make_order"
                    defaultMessage="Make order"/>
            </Button>
            ):(
                <Box className={classes.auth_to_make_order} onClick={()=>{goToLogin()}}>
                        <FormattedMessage
                            id="mainpage.auth"
                            defaultMessage="Log in to make order"/>
                </Box>
            )}

       </Container>
    )
}


export default MainPage;