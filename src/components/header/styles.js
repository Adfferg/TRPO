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
      marginRight:"5rem",
      padding:"1rem",
      display:"flex",
    },
    option:{
      margin:"0 1rem",
    },
  }));

  export default styles