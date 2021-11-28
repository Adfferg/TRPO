import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: "2.5rem",
      marginTop: "3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      border: "1px solid #FFA332",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: "#FFA332",
    },
    error: {
      alignItems: "center",
      color: "red",
    },
    textField:{
      background:theme.gridColor
    }
  }));

  export default styles