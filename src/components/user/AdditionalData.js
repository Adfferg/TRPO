
import React,{useState} from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from "@material-ui/core/Container";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import Users from './Users'
import Applications from './Applications'
import Events from './Events'

function AdditionalData(props) {

    const {applications,users, banUser,role,events,deleteApplication} = props
    const [value, setValue] = useState('1');
    const classes = styles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
  
      };
      const showComponent=()=>{
        if(value === "1")
            return (<Events events={events}/>)
        else if(value ==="2")
            return (<Users users={users} banUser={banUser}/>)
        else if(value ==="3")
            return (<Applications applications={applications} deleteApplication={deleteApplication}/>)
        
    }

    return(
        <Container  className = {classes.paper}>

            {role&&role ==='ADMIN'?(
                <Grid style={{width:"100%"}}>
                <Grid container item xs ={12} justifyContent="center">
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    variant="fullWidth"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example">
                        <Tab value="1"   label={<EventIcon size={"small"}/>} />
                        <Tab value="2"   label={<PersonIcon size={"small"}/>} />
                        <Tab value="3"   label={<EmailIcon size={"small"}/>} />
                </Tabs>
                </Grid>
                <Grid item xs={12}>
                    {showComponent()}
                </Grid>
                </Grid>
              ):(
                  <Grid item xs={12} style={{width:"100%"}}>
                        <Events events={events}/>
                  </Grid>
                )}
            
        </Container>
    )
}
export default observer(AdditionalData);