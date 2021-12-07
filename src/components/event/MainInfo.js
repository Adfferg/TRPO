import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function MainInfo(props) {
    const { date, setDate, hours, setHours,personalWishes, setPersonalWishes, typeOfEvent, setTypeOfEvent} = props
    const classes = styles();
    const types =[
        {value:"wedding",label:<FormattedMessage id="event.wedding" defaultMessage="Wedding"/>},
        {value:"birthday",label:<FormattedMessage id="event.birthday" defaultMessage="Birthday" />},
        {value:"graduation",label:<FormattedMessage id="event.graduation" defaultMessage="Graduation" />}
    ]
    return(
            <Grid item xs ={12} className={classes.mainInfoGrid}>
                <Typography className={classes.headers}><FormattedMessage id="event.main_info" defaultMessage="Main info" /></Typography>
                <TextField
                        variant="filled"
                        id="datetime-local"
                        required
                        label={
                            <FormattedMessage
                            id="event.date"
                            defaultMessage="Date"/>
                        }
                        fullWidth
                        value = {date}
                        type="datetime-local"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={(e) => setDate(e.target.value)}
                    />
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    type="number"
                    label={
                        <FormattedMessage
                            id="event.hours"
                            defaultMessage="hours"/>
                     }
                    id="hours"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}/>
                <Select
                    style={{
                    width: "100%",
                    fontWeight: "normal",
                    lineHeight: "1",
                    minWidth: 1,
                    }}
                    variant="filled"
                    label={
                        <FormattedMessage
                            id="event.email"
                            defaultMessage="Email"/>
                     }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeOfEvent}
                    onChange={(e) => setTypeOfEvent(e.target.value)}
                >
                    {types.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                        {type.label}
                    </MenuItem>
                    ))}
                </Select>
                <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    multiline
                    type="number"
                    label={
                        <FormattedMessage
                            id="event.personal_wishes"
                            defaultMessage="Personal wishes"/>
                     }
                    id="hours"
                    value={personalWishes}
                    onChange={(e) => setPersonalWishes(e.target.value)}/>            
            </Grid>
    )
}
export default observer(MainInfo);