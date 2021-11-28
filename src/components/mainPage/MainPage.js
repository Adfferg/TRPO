import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
function MainPage() {
    const classes = styles();
    return(
       <Container className = {classes.paper}>
           <Grid container style ={{display:"flex"}} spacing={1}>
                Main page
           </Grid>
       </Container>
    )
}


export default MainPage;