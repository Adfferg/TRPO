import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    mainGrid: {
      background: theme.gridColor,
      margin: "3rem 0 0 0",
      border: theme.border,
      borderRadius:"5px",
      padding: "1rem",
      [theme.breakpoints.down("xs")]: {
        padding: ".5rem",
        margin: ".3rem 0",
      },
    },
    grid: {
      background: theme.gridColor,
      margin: "0.5rem 0 0 0",
      border: theme.thinBorder,
      borderRadius:"5px",
      padding: "1rem",
      [theme.breakpoints.down("xs")]: {
        padding: ".5rem",
        margin: ".3rem 0",
      },
    },
    error: {
      alignItems: "center",
      color: "red",
    },
    text:{
      [theme.breakpoints.down("sm")]: {
        fontSize:"80%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"70%"
      },
    },
    headers:{
      [theme.breakpoints.down("sm")]: {
        fontSize:"95%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"90%"
      },
    }
  }));

  export default styles