import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    mainGrid: {
      background: "white",
      margin: "3rem 0 0 0",
      border: "1px solid Black",
      borderRadius:"5px",
      padding: "1rem",
      [theme.breakpoints.down("xs")]: {
        padding: ".5rem",
        margin: ".3rem 0",
      },
    },
    grid: {
      background: "white",
      margin: "0.5rem 0 0 0",
      border: "0.5px solid gray",
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
    }
  }));

  export default styles