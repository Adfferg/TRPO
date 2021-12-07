import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: "0",
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.gridColor,
      border: theme.border,
    },
    arrows:{
      [theme.breakpoints.up("xs")]: {
        display:"none"
      },
      [theme.breakpoints.down("xs")]: {
        display:"block"
      },
    },
    tabs:{
      [theme.breakpoints.down("xs")]: {
        width:"250px"
      },
    },
    map:{
      height:"400px",
      width:"400px",
      border: theme.border,
      [theme.breakpoints.down("sm")]: {
        height:"250px",
        width:"250px",
      },
    },
    grid:{
      margin:"2rem 1rem"
    },
    venueImage: {
      border: theme.thinBorder,
      width: "300px",
      height: "300px",
    },
    staffImage: {
      border: theme.border,
      width: "auto",
      maxWidth: "250px",
      height: "auto",
      maxHeight: "250px",
    },
    staffImageGrid:{
      [theme.breakpoints.down("sm")]: {
        borderBottom: theme.border,
        marginBottom:"0.5rem"
      },
    },
    foodImage: {
      border: theme.border,
      width: "auto",
      maxWidth: "100%",
      height: "auto",
      maxHeight: "100%",
    },
    staffGrid:{
      display:"flex",
      margin:"0.5rem 1rem",
      border: "2px solid #8f3525",
      padding:"0.5rem",
      [theme.breakpoints.down("sm")]: {
        flexDirection:"column",
      },
    },
    chosenStaffGrid:{
      display:"flex",
      margin:"0.5rem 1.5rem",
      border: "3px solid #8f3525",
      background:"rgb(212, 212, 212)",
      padding:"0.5rem",
      [theme.breakpoints.down("sm")]: {
        flexDirection:"column",
      },
    },
    headers:{
      fontSize:"130%",
      margin:"1rem 0rem",
      [theme.breakpoints.down("sm")]: {
        fontSize:"110%",
      },
    },
    summaryGrid:{
      padding:"0.5rem",
      width:"50%",
      borderBottom: "2px solid black",
      marginTop:"1rem",
      [theme.breakpoints.down("sm")]: {
        width:"80%",
      },
    },
    totalPrice:{
      color:"red",
      padding:"0.5rem",
      width:"50%",
      borderBottom: "2px solid black",
      marginTop:"1rem",
      [theme.breakpoints.down("sm")]: {
        width:"80%",
      },
    },
    button: {
      margin: theme.spacing(3, 0, 2),
      background: theme.headerColor,
    },
    mainInfoGrid:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:"30%",
      [theme.breakpoints.down("sm")]: {
        width:"60%",
      },
    }
  }));

  export default styles