import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import './main.css'
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
function MainPage() {
    const classes = styles();
    const navigate = useNavigate();

    const makeOrder = ()=>{
        navigate('../make-order', { replace: true });
    }
    return(
       <Container className = {classes.paper}>
            <Grid container className={classes.sign} spacing={1}>
                <div className="two"><h1>Event management</h1></div>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>{makeOrder()}}>
                Сделать заказ
            </Button>
       </Container>
    )
}


export default MainPage;