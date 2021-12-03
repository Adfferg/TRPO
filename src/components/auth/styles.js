import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: "2rem",
      marginTop: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.gridColor,
      border: theme.border,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: theme.headerColor,
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