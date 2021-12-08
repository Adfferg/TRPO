import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BlockIcon from '@mui/icons-material/Block';
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function Users(props) {

    const {users,banUser} = props
    const navigate = useNavigate();
    const classes = styles();

    const goToProfile=(id)=>{
        navigate(`/profile/${id}`, { replace: false });
    }

    return(
            <Grid item xs ={12} style={{display:"flex", flexDirection:"column", padding:"1rem", alignItems:"center"}}>
                 <Typography className={classes.headers}><FormattedMessage id="profile.users" defaultMessage="Users"/></Typography>
                {users.length>0 && users.map((user)=>(
                    user.role !== 'ADMIN'&&(
                    <Grid item xs={8} md={6} className={classes.userGrid}  key={user._id}>
                        <Grid item xs={11} onClick={()=>{goToProfile(user._id)}}>{user.email}</Grid>
                        <Grid item xs ={1}>
                          {user.blocked?(
                            <IconButton size="small" onClick={()=>{banUser(user.email)}}>
                              <LockOpenIcon />
                            </IconButton>
                          ):(
                            <IconButton size="small" onClick={()=>{banUser(user.email)}}>
                              <BlockIcon />
                            </IconButton>)
                          } 
                         </Grid>
                    </Grid>)
                ))}
            </Grid>
    )
}
export default observer(Users);