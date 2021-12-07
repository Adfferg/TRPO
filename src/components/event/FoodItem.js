import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { FormattedMessage } from "react-intl";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@material-ui/core/IconButton";

function FoodItem(props) {
  const { food, setFood } = props;
  const classes = styles();
  const changeFood = (increase) =>{
    if(food[1]+increase>=0){
        setFood(food[0]._id,increase)
    }
  }
  return(
        <Grid>
            <Grid container style={{padding:"0.5rem 1rem"}} justifyContent="center">
                <Grid item xs={12}>
                    <img className={classes.foodImage} alt="img" src={food[0].image}></img>  
                </Grid>
                <Grid item xs={12}>
                    {food[0].name}
                </Grid>
                <Grid  item xs={12}>
                    <FormattedMessage id="event.price_for_portion" defaultMessage="Price"/>{": "}{food[0].price} <FormattedMessage id="event.r" defaultMessage="r."/>
                </Grid>
                <Grid  item xs={12}>
                    <IconButton size="small" onClick={()=>{changeFood(-1)}}>
                        <RemoveIcon />
                    </IconButton>
                        {food[1]}
                    <IconButton size="small" onClick={()=>{changeFood(1)}}>
                        <AddIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
  );      
}

export default FoodItem;