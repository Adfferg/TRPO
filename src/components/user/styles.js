import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  userInfo: {
    padding: ".5rem",
    marginTop: "1.5rem",
    display: "flex",
    background: theme.gridColor,
    minHeight: theme.spacing(18),
    border: theme.border,
  },
  avatar: {
    border: theme.thinBorder,
    marginRigth: "10rem",
    width: theme.spacing(14),
    height: theme.spacing(14),
    "&:hover": {
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: theme.border,
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
    background: theme.headerColor,
  },
  active: {
    border: "2px solid rebeccapurple",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default styles;
