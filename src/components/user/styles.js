import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  userInfo: {
    padding: ".5rem",
    marginTop: "1.5rem",
    display: "flex",
    background:"White",
    minHeight: theme.spacing(18),
    border: "2px solid #FFA332",
  },
  avatar: {
    border: "3px solid #FFA332",
    marginRigth: "10rem",
    width: theme.spacing(14),
    height: theme.spacing(14),
    "&:hover": {
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: "3px solid #5a78d8",
    },
  },
  events: {
    padding: ".5rem",
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: "#FFA332",
  },
  active: {
    border: "2px solid rebeccapurple",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default styles;
