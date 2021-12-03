import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: "2.5rem",
      marginTop: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.gridColor,
      border: theme.border,
      [theme.breakpoints.down("sm")]: {
        marginTop: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "1rem",
      },
    },
    sign:{
      display:"flex", 
      flexDirection: "column",
      justifyContent:"center",
      [theme.breakpoints.down("sm")]: {
        fontSize:"80%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"60%"
      },
    },
    button: {
      margin: "3rem",
      background: theme.headerColor,
      [theme.breakpoints.down("sm")]: {
        fontSize:"90%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"80%"
      },
    }
  }));

  export default styles