import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { FormattedMessage } from "react-intl";

function StaffItem(props) {
  const { staff, setStaff } = props;
  const classes = styles();
  return(
        <Grid item xs ={12} className={staff[1]?classes.chosenStaffGrid:classes.staffGrid} onClick={()=>{setStaff(staff[0]._id)}}>
          <Grid className={classes.staffImageGrid}>
              <Grid>
                <img className={classes.foodImage} alt="img" src={staff[0].avatar}></img>  
              </Grid>
              <Grid>
                {staff[0].name}
              </Grid>
              <Grid container>
              <FormattedMessage id="event.price_for_hour" defaultMessage="Price for hour"/>{": "}{staff[0].salary} <FormattedMessage id="event.r" defaultMessage="r."/>
              </Grid>
          </Grid>
          <Grid style={{marginLeft:"1rem"}}>
              {staff[0].description}
          </Grid>
        </Grid>
  );      
}

export default StaffItem;