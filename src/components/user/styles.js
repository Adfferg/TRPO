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
  paper: {
    padding: "0",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.gridColor,
    border: theme.border,
  },
  headers:{
    fontSize:"130%",
    margin:"1rem 0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize:"110%",
    },
  },
  applicationGrid:{
    background:"rgb(238, 238, 245)",
    width:"100%",
    border:"1.5px solid #8f3525",
    margin:"0.5rem",
    padding:"0.5rem",
    [theme.breakpoints.down("sm")]: {
      margin:"0.2rem",
      fontSize:"90%",
    },
  },
  eventGrid:{
    background:"rgb(238, 238, 245)",
    width:"100%",
    display:"flex",
    border:"1.5px solid #8f3525",
    margin:"0.1rem",
    padding:"0.5rem"
  },
  eventSmallerGrid1:{
    width:"50%",
    padding:"0.5rem",
    marginRight:"1rem",
    [theme.breakpoints.down("sm")]: {
      padding:"0rem",
      fontSize:"70%",
    },
  },
  eventSmallerGrid2:{
    width:"30%",
    padding:"0.5rem",
    marginRight:"1rem",
    [theme.breakpoints.down("sm")]: {
      padding:"0rem",
      fontSize:"80%",
    },
  },
  eventSmallerGrid3:{
    width:"20%",
    padding:"0.5rem",
    marginRight:"1rem",
    [theme.breakpoints.down("sm")]: {
      padding:"0rem",
      fontSize:"80%",
    },
  },
  userGrid:{
    background:"rgb(238, 238, 245)",
    width:"100%",
    display:"flex",
    padding:"0.5rem",
    margin:"0.5rem",
    border:"1.5px solid #8f3525",
    [theme.breakpoints.down("sm")]: {
      margin:"0.2rem",
    },
  }
}));

export default styles;
