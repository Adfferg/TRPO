import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: " 0 2.5rem 2.5rem 2.5rem",
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.gridColor,
      border: theme.border,
    },
  }));

  export default styles