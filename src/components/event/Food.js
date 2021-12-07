import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import FoodItem from './FoodItem'

function Food(props) {
    const {food, setFood} = props
    const classes = styles();

    return(
        <Grid item xs ={12} >
        <Grid container justifyContent="center">
            <Typography className={classes.headers}><FormattedMessage id="event.food" defaultMessage="Food" /></Typography>
        </Grid>
        <Grid container style={{display:"flex"}}>
            {food.map((foodItem)=>(
                <Grid  key={foodItem[0]._id} item md ={3} xs = {4}>
                    <FoodItem  food={foodItem} setFood={setFood}></FoodItem>
                </Grid>
            ))}
        </Grid>
    </Grid>
    )
}
export default observer(Food);