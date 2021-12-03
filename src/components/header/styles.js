import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1, 
      padding:0,
    },
    title: {
      flexGrow:1,
      textDecoration: "inherit",
      color: "inherit",
    },
    appbar: {
      background: theme.headerColor,
    },
    link: {
      textDecoration: "inherit",
      color: "inherit",
    },
    options:{
      display:"flex",
    },
    option:{
      margin:"0 1rem",
      [theme.breakpoints.down("sm")]: {
        margin:"0"
      },
    },
    text:{
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        fontSize:"80%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"60%"
      },
    }
  }));

  export default styles